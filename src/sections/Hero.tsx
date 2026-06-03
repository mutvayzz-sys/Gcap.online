import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLanguage } from '../components/LanguageProvider'

gsap.registerPlugin(ScrollTrigger)

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  const count = 2000
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return arr
  }, [])

  const velocities = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 0.002
      arr[i * 3 + 1] = (Math.random() - 0.5) * 0.002
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.001
    }
    return arr
  }, [])

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    const positionArray = meshRef.current.geometry.attributes.position.array as Float32Array
    const time = state.clock.elapsedTime

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const x = positionArray[i3]
      const y = positionArray[i3 + 1]

      positionArray[i3] += velocities[i3] + Math.sin(time * 0.3 + i * 0.1) * 0.0005
      positionArray[i3 + 1] += velocities[i3 + 1] + Math.cos(time * 0.2 + i * 0.15) * 0.0005
      positionArray[i3 + 2] += velocities[i3 + 2]

      const dx = x - mouseRef.current.x * 6
      const dy = y - mouseRef.current.y * 6
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < 2 && distance > 0.001) {
        const force = (2 - distance) * 0.002
        positionArray[i3] += (dx / distance) * force
        positionArray[i3 + 1] += (dy / distance) * force
      }

      if (Math.abs(positionArray[i3]) > 6) positionArray[i3] *= -0.9
      if (Math.abs(positionArray[i3 + 1]) > 6) positionArray[i3 + 1] *= -0.9
      if (Math.abs(positionArray[i3 + 2]) > 4) positionArray[i3 + 2] *= -0.9
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true
    meshRef.current.rotation.y = time * 0.02
  })

  const positionAttr = useMemo(() => new THREE.BufferAttribute(positions, 3), [positions])

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <primitive attach="attributes-position" object={positionAttr} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#c4a882"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function FiberLines() {
  const groupRef = useRef<THREE.Group>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.y = (event.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  const lines = useMemo(() => {
    return Array.from({ length: 12 }, (_, index) => {
      const points: THREE.Vector3[] = []
      const segments = 40
      for (let j = 0; j <= segments; j++) {
        const t = j / segments
        const x = (t - 0.5) * 10
        const y = Math.sin(t * Math.PI * 2 + index) * 0.5 + (index - 6) * 0.4
        const z = Math.cos(t * Math.PI + index * 0.5) * 0.3
        points.push(new THREE.Vector3(x, y, z))
      }
      return { points, index }
    })
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const time = state.clock.elapsedTime
    groupRef.current.children.forEach((child, i) => {
      const line = child as THREE.Line
      const positions = line.geometry.attributes.position.array as Float32Array
      const segments = 40
      for (let j = 0; j <= segments; j++) {
        const t = j / segments
        const wave = Math.sin(t * Math.PI * 3 + time * 0.5 + i * 0.8) * 0.15
        const mouseInfluence = mouseRef.current.y * 0.3 * Math.sin(t * Math.PI)
        positions[j * 3 + 1] = lines[i].points[j].y + wave + mouseInfluence
        positions[j * 3 + 2] = lines[i].points[j].z + Math.cos(time * 0.3 + i + t * 2) * 0.1
      }
      line.geometry.attributes.position.needsUpdate = true
    })
  })

  return (
    <group ref={groupRef}>
      {lines.map((line, index) => {
        const positionArray = new Float32Array(line.points.flatMap((point) => [point.x, point.y, point.z]))
        const attribute = new THREE.BufferAttribute(positionArray, 3)
        return (
          <line key={index}>
            <bufferGeometry>
              <primitive attach="attributes-position" object={attribute} />
            </bufferGeometry>
            <lineBasicMaterial
              color="#c4a882"
              transparent
              opacity={0.15 + index * 0.02}
              blending={THREE.AdditiveBlending}
            />
          </line>
        )
      })}
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <ParticleField />
      <FiberLines />
    </>
  )
}

function KineticText() {
  const { translation, openPicker } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return
    const lines = containerRef.current.querySelectorAll('.kinetic-line')
    const subtitle = containerRef.current.querySelector('.hero-subtitle')
    const cta = containerRef.current.querySelector('.hero-cta')
    const label = containerRef.current.querySelector('.hero-label')

    const tl = gsap.timeline({ delay: 0.5 })

    tl.fromTo(label, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })

    lines.forEach((line, index) => {
      tl.fromTo(
        line,
        { opacity: 0, y: 80, rotateX: 15 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: 'power3.out' },
        0.2 + index * 0.12,
      )
    })

    tl.fromTo(
      subtitle,
      { opacity: 0, y: 30, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out' },
      0.8,
    )

    tl.fromTo(cta, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, 1)
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
      <div className="hero-label label mb-6 opacity-0">
        {translation.hero.eyebrow}
      </div>
      <h1 className="display-xl text-paper mb-8" style={{ perspective: '1000px' }}>
        <span className="kinetic-line block opacity-0">{translation.hero.title[0]}</span>
        <span className="kinetic-line block opacity-0 text-signal">{translation.hero.title[1]}</span>
        <span className="kinetic-line block opacity-0">{translation.hero.title[2]}</span>
      </h1>
      <p className="hero-subtitle body-lg mb-10 max-w-xl text-paper/60 opacity-0">
        {translation.hero.subtitle}
      </p>
      <div className="hero-cta flex flex-col items-center gap-3 opacity-0 sm:flex-row">
        <a href="#manifesto" className="cta-button">
          {translation.hero.primary}
        </a>
        <button type="button" onClick={openPicker} className="cta-button">
          {translation.hero.secondary}
        </button>
      </div>
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!sectionRef.current) return
    gsap.to(sectionRef.current.querySelector('.hero-fade'), {
      opacity: 0,
      filter: 'blur(10px)',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '50% top',
        scrub: 1,
      },
    })
  }, { scope: sectionRef })

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-[100dvh] w-full overflow-hidden bg-deep"
    >
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      </div>

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(15,20,16,0.6) 100%)',
        }}
      />

      <div className="hero-fade relative z-10 h-full">
        <KineticText />
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-paper/30 to-transparent" />
      </div>
    </section>
  )
}
