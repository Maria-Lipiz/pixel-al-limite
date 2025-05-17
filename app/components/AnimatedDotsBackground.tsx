'use client'

import { useEffect, useRef } from 'react'

type Dot = {
  x: number
  y: number
  currentBrightness: number
  currentRadius: number
  targetRadius: number
}

const AnimatedDotsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const dotSpacing = 30
    const baseRadius = 0.9
    const dots: Dot[] = []

    const numberOfDots = Math.floor((width * height) / 1600) // Ajusta densidad aquí

    for (let i = 0; i < numberOfDots; i++) {
      const x = Math.random() * width
      const y = Math.random() * height

      dots.push({
        x,
        y,
        currentBrightness: 100,
        currentRadius: baseRadius,
        targetRadius: baseRadius,
      })
    }


    const mouse = { x: -9999, y: -9999 }

    const updateMouse = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('mousemove', updateMouse)

    const handleClick = (e: MouseEvent) => {
      const clickX = e.clientX
      const clickY = e.clientY
      const maxDist = 120

      for (const dot of dots) {
        const dx = dot.x - clickX
        const dy = dot.y - clickY
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < maxDist) {
          const scale = 1 + (1 - dist / maxDist) * 2
          dot.targetRadius = baseRadius * scale

          // Volver al tamaño original después de un tiempo
          setTimeout(() => {
            dot.targetRadius = baseRadius
          }, 300)
        }
      }
    }

    window.addEventListener('click', handleClick)

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      for (const dot of dots) {
        const dx = dot.x - mouse.x
        const dy = dot.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = 150

        const targetBrightness =
          dist < maxDist
            ? Math.min(255, 100 + (1 - dist / maxDist) * 155)
            : 100

        dot.currentBrightness += (targetBrightness - dot.currentBrightness) * 0.05
        dot.currentRadius += (dot.targetRadius - dot.currentRadius) * 0.1

        const opacity = dist < maxDist ? 1 - dist / maxDist : 0.1
        const b = dot.currentBrightness.toFixed(0)

        // ✨ HALO AZUL DIFUMINADO
        if (dot.currentRadius > baseRadius + 0.1) {
          const glowStrength = Math.min(1, (dot.currentRadius - baseRadius) / baseRadius)
          ctx.save() // Guardamos el estado del canvas

          ctx.shadowBlur = 40
          ctx.shadowColor = 'rgba(255, 255, 255, 0.5)'

          ctx.beginPath()
          ctx.arc(dot.x, dot.y, dot.currentRadius + 2, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(255, 255, 255, 0.1)' // capa ligera
          ctx.fill()

          ctx.restore() // Restauramos para no afectar el resto
        }

        // 🌟 Punto normal
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${b}, ${b}, ${b}, ${opacity})`
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('mousemove', updateMouse)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  )
}

export default AnimatedDotsBackground
