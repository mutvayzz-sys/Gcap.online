import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLanguage } from '../components/LanguageProvider'
import type { Language } from '../i18n'

gsap.registerPlugin(ScrollTrigger)

type FieldCopy = {
  eyebrow: string
  title: [string, string]
  body: string
  panelTitle: string
  panelBody: string
  stats: Array<{ value: string; label: string }>
}

const FIELD_COPY: Record<Language, FieldCopy> = {
  en: {
    eyebrow: '03 · The Interface',
    title: ['Generative', 'Surfaces'],
    body: 'Every interaction is a signal. Every signal produces form. The interface is not a layer — it is the system itself, rendered visible.',
    panelTitle: 'Interactive field',
    panelBody: 'Move your cursor across the field. The generative surface responds to your presence — ripples form, fibers bend, and the composition shifts in real time. This is not decoration. It is a computational interface that demonstrates the same principles driving GCAP\'s core systems: signal, response, emergence.',
    stats: [
      { value: '∞', label: 'Compositions' },
      { value: '6', label: 'Core systems' },
      { value: '<300ms', label: 'UI response' },
      { value: '60fps', label: 'Target frame' },
    ],
  },
  ar: {
    eyebrow: '03 · الواجهة',
    title: ['مساحات', 'توليدية'],
    body: 'كل تفاعل هو إشارة، وكل إشارة تولّد شكلاً. الواجهة ليست طبقة إضافية، بل هي النظام نفسه وقد أصبح مرئياً.',
    panelTitle: 'حقل تفاعلي',
    panelBody: 'حرّك المؤشر عبر الحقل. السطح التوليدي يستجيب لوجودك — تتشكل التموجات، وتنحني الخيوط، ويتحوّل التكوين في الزمن الحقيقي. هذا ليس زينة. إنها واجهة حاسوبية تُظهر المبادئ نفسها التي تقود الأنظمة الأساسية في GCAP: الإشارة، الاستجابة، والانبثاق.',
    stats: [
      { value: '∞', label: 'تراكيب' },
      { value: '6', label: 'أنظمة أساسية' },
      { value: '<300ms', label: 'استجابة الواجهة' },
      { value: '60fps', label: 'الإطار المستهدف' },
    ],
  },
  th: {
    eyebrow: '03 · อินเทอร์เฟซ',
    title: ['พื้นผิว', 'เชิงกำเนิด'],
    body: 'ทุกปฏิสัมพันธ์คือสัญญาณ และทุกสัญญาณก่อรูปเป็นบางสิ่ง อินเทอร์เฟซไม่ใช่ชั้นที่เพิ่มเข้ามา — แต่มันคือระบบทั้งชุดที่ถูกทำให้มองเห็นได้.',
    panelTitle: 'สนามอินเทอร์แอคทีฟ',
    panelBody: 'เลื่อนเคอร์เซอร์ของคุณไปบนสนามนี้ พื้นผิวเชิงกำเนิดจะตอบสนองต่อการมีอยู่ของคุณ — เกิดระลอกคลื่น เส้นใยโค้งงอ และองค์ประกอบทั้งหมดเปลี่ยนไปแบบเรียลไทม์ นี่ไม่ใช่ของตกแต่ง แต่มันคืออินเทอร์เฟซเชิงคำนวณที่แสดงหลักการเดียวกับระบบแกนกลางของ GCAP: สัญญาณ การตอบสนอง และการเกิดใหม่.',
    stats: [
      { value: '∞', label: 'องค์ประกอบ' },
      { value: '6', label: 'ระบบแกนกลาง' },
      { value: '<300ms', label: 'การตอบสนอง UI' },
      { value: '60fps', label: 'เฟรมเป้าหมาย' },
    ],
  },
}

function FiberMesh() {
  const meshRef = useRef<THREE.Mesh>(null)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      mouseRef.current.targetX = (event.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.targetY = (event.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  const geometry = useMemo(() => new THREE.PlaneGeometry(10, 10, 80, 80), [])

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uColor1: { value: new THREE.Color('#c4a882') },
    uColor2: { value: new THREE.Color('#4a5d4e') },
    uColor3: { value: new THREE.Color('#1a1814') },
  }), [])

  const vertexShader = `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      vUv = uv;
      vec3 pos = position;

      float dist = distance(uv, uMouse * 0.5 + 0.5);
      float wave = sin(pos.x * 2.0 + uTime) * 0.15;
      wave += sin(pos.y * 3.0 + uTime * 0.8) * 0.1;
      wave += sin((pos.x + pos.y) * 1.5 + uTime * 0.5) * 0.08;

      float mouseInfluence = smoothstep(0.5, 0.0, dist) * 0.4;
      pos.z = wave + mouseInfluence;
      vElevation = pos.z;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `

  const fragmentShader = `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      float mixStrength = (vElevation + 0.3) * 1.5;
      vec3 color = mix(uColor3, uColor2, smoothstep(0.0, 0.5, mixStrength));
      color = mix(color, uColor1, smoothstep(0.3, 0.8, mixStrength));

      float grid = smoothstep(0.02, 0.0, abs(fract(vUv.x * 40.0) - 0.5));
      grid += smoothstep(0.02, 0.0, abs(fract(vUv.y * 40.0) - 0.5));
      color += vec3(grid * 0.08);

      gl_FragColor = vec4(color, 0.85);
    }
  `

  useFrame((state) => {
    if (!meshRef.current) return
    const material = meshRef.current.material as THREE.ShaderMaterial
    material.uniforms.uTime.value = state.clock.elapsedTime * 0.4

    mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05
    mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05
    material.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y)
  })

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI * 0.4, 0, 0]} position={[0, -1, 0]}>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  )
}

function FloatingOrbs() {
  const groupRef = useRef<THREE.Group>(null)

  const orbs = useMemo(() => {
    return Array.from({ length: 8 }, (_, index) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4 + 2,
        (Math.random() - 0.5) * 4,
      ] as [number, number, number],
      scale: 0.1 + Math.random() * 0.25,
      speed: 0.2 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2,
      color: ['#c4a882', '#8b7355', '#4a5d4e', '#c9a96e'][index % 4],
    }))
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const time = state.clock.elapsedTime
    groupRef.current.children.forEach((child, index) => {
      const orb = orbs[index]
      child.position.y = orb.position[1] + Math.sin(time * orb.speed + orb.offset) * 0.5
      child.position.x = orb.position[0] + Math.cos(time * orb.speed * 0.7 + orb.offset) * 0.3
      const scale = orb.scale * (1 + Math.sin(time * 2 + orb.offset) * 0.1)
      child.scale.setScalar(scale)
    })
  })

  return (
    <group ref={groupRef}>
      {orbs.map((orb, index) => (
        <mesh key={index} position={orb.position}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial
            color={orb.color}
            transparent
            opacity={0.15}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <FiberMesh />
      <FloatingOrbs />
    </>
  )
}

export default function GenerativeField() {
  const sectionRef = useRef<HTMLElement>(null)
  const { language } = useLanguage()
  const copy = FIELD_COPY[language]

  useGSAP(() => {
    if (!sectionRef.current) return

    const elements = sectionRef.current.querySelectorAll('.field-reveal')
    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
          },
          delay: index * 0.1,
        },
      )
    })
  }, { scope: sectionRef })

  return (
    <section
      id="field"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-paper py-32 md:py-48"
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas
          camera={{ position: [0, 3, 6], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-14 lg:px-24">
        <div className="editorial-grid reverse mb-24">
          <div className="field-reveal order-2 opacity-0 lg:order-1">
            <div className="glass h-full p-8 md:p-12">
              <span className="label mb-6 block">{copy.panelTitle}</span>
              <p className="body-lg mb-6">{copy.panelBody}</p>
            </div>
          </div>
          <div className="field-reveal order-1 opacity-0 lg:order-2">
            <span className="label mb-4 block text-ink/30">{copy.eyebrow}</span>
            <h2 className="display-lg mb-8 text-ink">
              {copy.title[0]}
              <br />
              <span className="text-signal">{copy.title[1]}</span>
            </h2>
            <p className="body-lg max-w-md">{copy.body}</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {copy.stats.map((stat) => (
            <div
              key={stat.label}
              className="field-reveal rounded-lg border border-ink/10 p-6 text-center opacity-0"
            >
              <div className="mb-2 font-display text-3xl font-bold text-ink md:text-4xl">
                {stat.value}
              </div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
