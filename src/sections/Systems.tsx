import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLanguage } from '../components/LanguageProvider'

gsap.registerPlugin(ScrollTrigger)

function SystemNodes() {
  const groupRef = useRef<THREE.Group>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  const nodes = useMemo(() => {
    return [
      { pos: [-2, 1, 0] as [number, number, number], color: '#c4a882', size: 0.12 },
      { pos: [0, 1.5, 0] as [number, number, number], color: '#8b7355', size: 0.1 },
      { pos: [2, 1, 0] as [number, number, number], color: '#4a5d4e', size: 0.11 },
      { pos: [-1.5, -0.5, 0] as [number, number, number], color: '#c9a96e', size: 0.09 },
      { pos: [1.5, -0.5, 0] as [number, number, number], color: '#a08060', size: 0.1 },
      { pos: [0, -1.5, 0] as [number, number, number], color: '#d4a574', size: 0.13 },
    ]
  }, [])

  const connections = useMemo(() => {
    const pairs: [number, number][] = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.4) {
          pairs.push([i, j])
        }
      }
    }
    return pairs
  }, [nodes])

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.y = (event.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const time = state.clock.elapsedTime
    const children = groupRef.current.children

    children.forEach((child, index) => {
      if (index < nodes.length) {
        const node = nodes[index]
        child.position.x = node.pos[0] + Math.sin(time * 0.5 + index) * 0.15 + mouseRef.current.x * 0.1
        child.position.y = node.pos[1] + Math.cos(time * 0.4 + index * 1.2) * 0.1 + mouseRef.current.y * 0.1
        child.position.z = node.pos[2] + Math.sin(time * 0.3 + index * 0.7) * 0.05

        const mesh = child as THREE.Mesh
        mesh.scale.setScalar(1 + Math.sin(time * 2 + index) * 0.08)
      } else {
        const connectionIndex = index - nodes.length
        const [a, b] = connections[connectionIndex]
        if (a < children.length && b < children.length) {
          const nodeA = children[a] as THREE.Mesh
          const nodeB = children[b] as THREE.Mesh
          const line = child as THREE.Line
          const positions = line.geometry.attributes.position.array as Float32Array
          positions[0] = nodeA.position.x
          positions[1] = nodeA.position.y
          positions[2] = nodeA.position.z
          positions[3] = nodeB.position.x
          positions[4] = nodeB.position.y
          positions[5] = nodeB.position.z
          line.geometry.attributes.position.needsUpdate = true
        }
      }
    })
  })

  return (
    <group ref={groupRef}>
      {nodes.map((node, index) => (
        <mesh key={index} position={node.pos}>
          <sphereGeometry args={[node.size, 16, 16]} />
          <meshBasicMaterial color={node.color} transparent opacity={0.8} />
        </mesh>
      ))}
      {connections.map(([a, b], index) => {
        const positionArray = new Float32Array([
          nodes[a].pos[0], nodes[a].pos[1], nodes[a].pos[2],
          nodes[b].pos[0], nodes[b].pos[1], nodes[b].pos[2],
        ])
        const attribute = new THREE.BufferAttribute(positionArray, 3)
        return (
          <line key={`conn-${index}`}>
            <bufferGeometry>
              <primitive attach="attributes-position" object={attribute} />
            </bufferGeometry>
            <lineBasicMaterial color="#c4a882" transparent opacity={0.2} blending={THREE.AdditiveBlending} />
          </line>
        )
      })}
    </group>
  )
}

function SystemCard({ system, index }: { system: (typeof SYSTEMS)[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!cardRef.current) return
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
        },
        delay: index * 0.06,
      },
    )
  }, { scope: cardRef })

  return (
    <div ref={cardRef} className="group relative overflow-hidden glass-dark rounded-xl p-6 md:p-8 opacity-0">
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at 50% 0%, ${system.accent}15, transparent 60%)` }}
      />

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/30">
            {system.id}
          </span>
          <div className="h-2 w-2 rounded-full" style={{ background: system.accent }} />
        </div>

        <h3 className="mb-3 font-display text-2xl font-bold text-paper md:text-3xl">
          {system.name}
        </h3>

        <p className="mb-6 font-sans text-sm font-light leading-relaxed text-paper/50">
          {system.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {system.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-paper/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-paper/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <SystemNodes />
    </>
  )
}

const SYSTEMS = [
  {
    id: 'SYS.01',
    name: 'Signal',
    description: 'Real-time data ingestion layer. Every event is a signal. Every signal becomes a thread in the computational tapestry.',
    tags: ['Stream', 'Event-driven', 'Reactive'],
    accent: '#c4a882',
  },
  {
    id: 'SYS.02',
    name: 'Memory',
    description: 'Persistent context engine. Not storage, memory. The system remembers, forgets strategically, and recalls with intent.',
    tags: ['Vector DB', 'Context', 'Recall'],
    accent: '#8b7355',
  },
  {
    id: 'SYS.03',
    name: 'Kanban',
    description: 'Shared work surfaces that route tasks through agents. Work flows like water, finding the path of least resistance.',
    tags: ['Routing', 'Surface', 'Flow'],
    accent: '#4a5d4e',
  },
  {
    id: 'SYS.04',
    name: 'Conductor',
    description: 'Orchestration layer that coordinates agent swarms. The conductor does not play, it enables the symphony.',
    tags: ['Orchestrate', 'Schedule', 'Coordinate'],
    accent: '#c9a96e',
  },
  {
    id: 'SYS.05',
    name: 'Swarm',
    description: 'Autonomous agent collective. Each agent is simple. Together, they produce emergent intelligence.',
    tags: ['Agents', 'Emergent', 'Collective'],
    accent: '#a08060',
  },
  {
    id: 'SYS.06',
    name: 'World',
    description: 'The visible layer. GCAP renders the invisible watchable. Data becomes atmosphere.',
    tags: ['Visualize', 'Render', 'World'],
    accent: '#d4a574',
  },
]

export default function Systems() {
  const sectionRef = useRef<HTMLElement>(null)
  const { translation } = useLanguage()

  useGSAP(() => {
    if (!sectionRef.current) return

    const header = sectionRef.current.querySelector('.systems-header')
    gsap.fromTo(
      header,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
        },
      },
    )
  }, { scope: sectionRef })

  return (
    <section
      id="systems"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-deep py-32 md:py-48"
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-14 lg:px-24">
        <div className="systems-header mb-16 opacity-0 md:mb-24">
          <span className="label mb-4 block text-paper/30">{translation.systems.eyebrow}</span>
          <h2 className="display-lg max-w-3xl text-paper">
            {translation.systems.title[0]}
            <br />
            {translation.systems.title[1]}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {translation.systems.items.map((system, index) => (
            <SystemCard key={system.id} system={{ ...system, accent: SYSTEMS[index].accent }} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
