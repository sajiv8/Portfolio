import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function OrbitalMesh() {
  const mesh = useRef()

  useFrame((state, delta) => {
    if (!mesh.current) {
      return
    }

    mesh.current.rotation.x += delta * 0.12
    mesh.current.rotation.y += delta * 0.18
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.08
  })

  return (
    <mesh ref={mesh} scale={1.2}>
      <icosahedronGeometry args={[1.35, 1]} />
      <meshStandardMaterial color="#3B5BDB" wireframe transparent opacity={0.12} />
    </mesh>
  )
}

export function ThreeBackdrop() {
  return (
    <div className="three-backdrop" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 3, 5]} intensity={1.2} color="#6C8CFF" />
        <directionalLight position={[-3, -2, 4]} intensity={0.6} color="#ffffff" />
        <OrbitalMesh />
      </Canvas>
    </div>
  )
}
