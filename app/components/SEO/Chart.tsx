'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const data = [
  { label: 'Day 1', views: 502, clicks: 138 },
  { label: 'Day 2', views: 865, clicks: 436 },
  { label: 'Day 3', views: 889, clicks: 550 },
  { label: 'Day 4', views: 601, clicks: 180 },
  { label: 'Day 5', views: 1093, clicks: 675 },
  { label: 'Day 6', views: 1093, clicks: 675 },
  { label: 'Day 7', views: 1552, clicks: 925 },
  { label: 'Day 8', views: 1436, clicks: 899 },
  { label: 'Day 9', views: 1874, clicks: 1118 },
  { label: 'Day 10', views: 2495, clicks: 2038 }
]

const Chart = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const xMotion = useMotionValue(0)
  const padding = 24
  const [containerSize, setContainerSize] = useState({ width: 800, height: 300 })
  const width = containerSize.width - padding * 2
  const height = containerSize.height - padding * 2
  const maxViews = Math.max(...data.map(d => d.views))

  const springViews = useSpring(0, { stiffness: 100, damping: 20 })
  const springClicks = useSpring(0, { stiffness: 100, damping: 20 })
  const pointRadius = height * 0.02
  const yViews = useTransform(springViews, v => padding + height - (v / maxViews) * height - pointRadius*1.5)
  const yClicks = useTransform(springClicks, v => padding + height - (v / maxViews) * height - pointRadius*1.5)

  const [viewsValue, setViewsValue] = useState(0)
  const [clicksValue, setClicksValue] = useState(0)
  useEffect(() => {
    const unsubViews = springViews.on('change', (v) => setViewsValue(Math.round(v)))
    const unsubClicks = springClicks.on('change', (v) => setClicksValue(Math.round(v)))
    return () => {
      unsubViews()
      unsubClicks()
    }
  }, [springViews, springClicks])

  const [tooltipOffsetX, setTooltipOffsetX] = useState(32)
  const tooltipOffsetSpringX = useSpring(32, { stiffness: 200, damping: 30 })
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [tooltipWidth, setTooltipWidth] = useState(0)

  useEffect(() => {
    if (tooltipRef.current) setTooltipWidth(tooltipRef.current.offsetWidth)
  }, [viewsValue, clicksValue])

  useEffect(() => {
    const unsub = xMotion.on('change', (x) => {
      const leftBound = padding + width * 0.3
      const rightBound = padding + width * 0.7
      if (x < leftBound) setTooltipOffsetX(32)
      else if (x > rightBound) setTooltipOffsetX(-(tooltipWidth + 16))
      else setTooltipOffsetX(32)
    })
    return () => unsub()
  }, [xMotion, tooltipWidth, width])

  useEffect(() => {
    tooltipOffsetSpringX.set(tooltipOffsetX)
  }, [tooltipOffsetX])

  const interpolateValue = (xRatio: number, key: 'views' | 'clicks'): number => {
    const index = xRatio * (data.length - 1)
    const i = Math.floor(index)
    const t = index - i
    if (i >= data.length - 1) return data[data.length - 1][key]
    return data[i][key] * (1 - t) + data[i + 1][key] * t
  }

  const [mouseInside, setMouseInside] = useState(false)
  const [lastX, setLastX] = useState(padding + width / 2)

  useEffect(() => {
    if (!mouseInside) return
    let raf: number
    const handle = (e: MouseEvent) => {
      if (!containerRef.current) return
      const bounds = containerRef.current.getBoundingClientRect()
      let x = e.clientX - bounds.left
      const edge = 40
      const realWidth = width
      if (x < padding + edge) {
        x = padding + edge - (padding + edge - x) * 0.2
        if (x < padding) x = padding
      } else if (x > padding + realWidth - edge) {
        x = padding + realWidth - edge + (x - (padding + realWidth - edge)) * 0.2
        if (x > padding + realWidth) x = padding + realWidth
      }
      setLastX(x)
      const xRatio = Math.max(0, Math.min(1, (x - padding) / width))
      springViews.set(interpolateValue(xRatio, 'views'))
      springClicks.set(interpolateValue(xRatio, 'clicks'))
      xMotion.set(x)
    }
    const onMove = (e: MouseEvent) => {
      raf = requestAnimationFrame(() => handle(e))
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [mouseInside, width, padding, springViews, springClicks])

  const handleMouseEnter = () => setMouseInside(true)
  const handleMouseLeave = () => setMouseInside(false)

  const gridStep = 1000
  const maxGrid = Math.ceil(maxViews / gridStep) * gridStep
  const gridValues = Array.from({ length: Math.floor(maxGrid / gridStep) + 1 }, (_, i) => i * gridStep)

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return
      setContainerSize({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      })
    }
  
    // Espera un frame para asegurarte de que el elemento existe
    const raf = requestAnimationFrame(() => {
      handleResize()
      if (containerRef.current) {
        const ro = new ResizeObserver(handleResize)
        ro.observe(containerRef.current)
        // Cleanup
        return () => ro.disconnect()
      }
    })
  
    return () => cancelAnimationFrame(raf)
  }, [])
  

  return (
    <div
      ref={containerRef}
      className="relative w-full h-75 bg-[#030712]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        width={containerSize.width}
        height={containerSize.height}
        viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="line-gradient-views" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4A4A4F" stopOpacity="0" />
            <stop offset="10%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="90%" stopColor="#EEFF00" stopOpacity="1" />
            <stop offset="100%" stopColor="#EEFF00" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line-gradient-clicks" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4A4A4F" stopOpacity="0" />
            <stop offset="10%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="90%" stopColor="#FF4ECD" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF4ECD" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline
          fill="none"
          stroke="url(#line-gradient-views)"
          strokeWidth="2"
          points={data.map((d, i) => {
            const x = padding + (i / (data.length - 1)) * width
            const y = padding + height - (d.views / maxViews) * height
            return `${x},${y}`
          }).join(' ')}
          strokeLinecap="round"
        />
        <polyline
          fill="none"
          stroke="url(#line-gradient-clicks)"
          strokeWidth="2"
          points={data.map((d, i) => {
            const x = padding + (i / (data.length - 1)) * width
            const y = padding + height - (d.clicks / maxViews) * height
            return `${x},${y}`
          }).join(' ')}
          strokeLinecap="round"
        />
        {gridValues.map(v => {
          const y = padding + height - (v / maxGrid) * height
          return (
            <g key={v}>
              <line x1={0} x2={containerSize.width} y1={y} y2={y} stroke="#fff" strokeOpacity={0.08} strokeWidth={1} />
              <text
                x={8}
                y={y - Math.max(12, height * 0.04)}
                fill="#fff"
                fillOpacity={0.25}
                fontSize={Math.max(14, height * 0.01)}
                fontFamily="var(--font-primary), sans-serif"
                alignmentBaseline="middle"
              >
                {v.toLocaleString('es-ES')}
              </text>
            </g>
          )
        })}
      </svg>

      {(mouseInside || lastX !== null) && (
        <>
          <motion.div className="absolute top-0 bottom-0 w-px bg-white/30" style={{ x: lastX }} />
          <motion.div
            className="absolute w-3 h-3 rounded-full border-2 border-white bg-[#EEFF00]"
            style={{ x: lastX, y: yViews }}
          />
          <motion.div
            className="absolute w-3 h-3 rounded-full border-2 border-white bg-[#FF4ECD]"
            style={{ x: lastX, y: yClicks }}
          />
          <motion.div
            ref={tooltipRef}
            className="absolute top-0 bg-black/80 rounded-full px-6 py-3 border border-white/10 text-white text-sm pointer-events-none"
            style={{ x: lastX, y: yViews, translateX: tooltipOffsetSpringX }}
            initial={false}
            animate={{ left: 'unset', right: 'unset' }}
          >
            <div className="text-zinc-400">Visitas: <span> {viewsValue}</span></div>
            <div className="font-semibold">Ventas: <span className="font-bold"> {clicksValue}</span></div>
          </motion.div>
        </>
      )}
    </div>
  )
}

export default Chart;
