'use client'

import React, { useRef, useEffect } from 'react'

const colors = [
  'rgba(0, 240, 181, 0.5)',
  'rgba(56, 189, 248, 0.5)',
  'rgba(255, 78, 205, 0.5)',
  'rgba(255, 255, 255, 0.2)',
  'rgba(238, 255, 0, 0.2)',
  'rgba(139, 92, 246, 0.5)'
]

const glowColors = [
  'rgba(0, 240, 181, 0.8)',
  'rgba(56, 189, 248, 0.8)',
  'rgba(255, 78, 205, 0.8)',
  'rgba(255, 255, 255, 0.5)',
  'rgba(238, 255, 0, 0.5)',
  'rgba(139, 92, 246, 0.8)'
]

type Pixel = {
  x: number
  y: number
  size: number
  dx: number
  dy: number
  color: string
  glow: boolean
  glowTimer: number
  glowDuration: number
  originalColor: string
}

const getPixelCountByScreenSize = () => {
  const width = window.innerWidth
  if (width < 640) return 25     // sm
  if (width < 768) return 35     // md
  if (width < 1024) return 45    // lg
  return 70                      // xl y más
}

const FloatingPixelsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let animationFrameId: number

    let pixelCount = getPixelCountByScreenSize()

    const pixels: Pixel[] = new Array(pixelCount).fill(null).map(() => {
      const size = Math.random() * 7 + 4  // 🔧 tamaños más suaves: 4px–11px
      const color = colors[Math.floor(Math.random() * colors.length)]
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        dx: (Math.random() - 0.5) * 0.4,  // 🔧 movimiento más lento
        dy: (Math.random() - 0.5) * 0.4,
        color,
        originalColor: color,
        glow: Math.random() < 0.3,
        glowTimer: Math.random() * 100,
        glowDuration: 50 + Math.random() * 100,
      }
    })

    const update = () => {
      ctx.clearRect(0, 0, width, height)
      pixels.forEach(p => {
        p.x += p.dx
        p.y += p.dy

        if (p.x < 0 || p.x > width) p.dx *= -1
        if (p.y < 0 || p.y > height) p.dy *= -1

        if (p.glow) {
          p.glowTimer--
          if (p.glowTimer <= 0) {
            if (p.color === p.originalColor) {
              p.color = glowColors[colors.indexOf(p.originalColor)]
              p.glowTimer = p.glowDuration
            } else {
              p.color = p.originalColor
              p.glowTimer = 50 + Math.random() * 100
            }
          }
        }

        ctx.beginPath()
        ctx.fillStyle = p.color
        ctx.shadowBlur = p.color !== p.originalColor ? 12 : 0
        ctx.shadowColor = p.color
        ctx.fillRect(p.x, p.y, p.size, p.size)
        ctx.closePath()
      })
      animationFrameId = requestAnimationFrame(update)
    }

    update()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  )
}

export default FloatingPixelsBackground
