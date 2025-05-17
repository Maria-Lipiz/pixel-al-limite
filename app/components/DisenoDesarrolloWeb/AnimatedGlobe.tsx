// Requisitos:
// npm install three @react-three/fiber @react-three/drei

'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const GlobeLines = () => {
  const groupRef = useRef<THREE.Group>(null)

  // Crear geometría de líneas tipo meridianos y paralelos
  const lines = useMemo(() => {
    const group = new THREE.Group()
    const material = new THREE.LineBasicMaterial({ color: '#00f0b5', transparent: true, opacity: 0.4 })

    // Meridianos
    for (let i = 0; i < 24; i++) {
      const geometry = new THREE.BufferGeometry()
      const points = []
      for (let j = 0; j <= 180; j++) {
        const theta = (j * Math.PI) / 180
        const phi = (i * Math.PI * 2) / 24
        const x = Math.sin(theta) * Math.cos(phi)
        const y = Math.cos(theta)
        const z = Math.sin(theta) * Math.sin(phi)
        points.push(new THREE.Vector3(x, y, z))
      }
      geometry.setFromPoints(points)
      group.add(new THREE.Line(geometry, material))
    }

    // Paralelos
    for (let i = 1; i < 12; i++) {
      const geometry = new THREE.BufferGeometry()
      const points = []
      const theta = (i * Math.PI) / 12
      for (let j = 0; j <= 360; j++) {
        const phi = (j * Math.PI) / 180
        const x = Math.sin(theta) * Math.cos(phi)
        const y = Math.cos(theta)
        const z = Math.sin(theta) * Math.sin(phi)
        points.push(new THREE.Vector3(x, y, z))
      }
      geometry.setFromPoints(points)
      group.add(new THREE.Line(geometry, material))
    }

    return group
  }, [])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2
    }
  })

  return <primitive object={lines} ref={groupRef} />
}

const AnimatedGlobe = () => {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <GlobeLines />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}

export default AnimatedGlobe