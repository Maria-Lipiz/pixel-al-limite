'use client'

import { useEffect, useMemo, useState } from 'react'

interface Pulse {
  id: number
  top: string
  left: string
  type: 'x' | 'y'
  delay: string
  color: string
}

interface LaserGridProps {
  colors?: string[]
  intensity?: number
}

const LaserGrid = ({ colors = ['#00F0B5','#38BDF8','#FF4ECD','#EEFF00','#8B5CF6'], intensity = 0.8 }: LaserGridProps) => {
  const [mounted, setMounted] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(1920) // valor por defecto hasta montar

  useEffect(() => {
    setMounted(true)
    setViewportWidth(window.innerWidth)
  }, [])

  const pulses: Pulse[] = useMemo(() => {
    if (!mounted) return []

    const numLines =
      viewportWidth < 480
        ? 6
        : viewportWidth < 768
        ? 8
        : viewportWidth < 1024
        ? 10
        : 12

    const generatePulse = (id: number): Pulse => {
      const type = Math.random() > 0.5 ? 'x' : 'y'
      const top = `${Math.floor(Math.random() * 100)}%`
      const left = `${Math.floor(Math.random() * 100)}%`
      const delay = `${Math.random() * 5}s`
      const color = colors[Math.floor(Math.random() * colors.length)]
      return { id, top, left, type, delay, color }
    }

    return Array.from({ length: numLines }, (_, i) => generatePulse(i))
  }, [mounted, colors, viewportWidth])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 pointer-events-none z-0 grid-bg-animated will-change-transform">
      {pulses.map(pulse => (
        <div
          key={pulse.id}
          className={`laser-glow laser-glow-${pulse.type}`}
          style={{
            top: pulse.top,
            left: pulse.left,
            animationDelay: pulse.delay,
            background: `radial-gradient(circle, ${pulse.color}${Math.floor(
              intensity * 255
            ).toString(16)}, transparent 40%)`,
            filter: `blur(0.6px)`
          }}
        />
      ))}
    </div>
  )
}

export default LaserGrid
