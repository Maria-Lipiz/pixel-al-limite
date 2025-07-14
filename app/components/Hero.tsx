'use client'

import React, { ReactNode } from 'react'

interface HeroProps {
  title: ReactNode
  subtitle: string
  primaryButtonText?: string
  secondaryButtonText?: string
  gradientFrom?: string
  gradientTo?: string
  hoverGradientFrom?: string
  hoverGradientTo?: string
  buttonLink?: string
}

const Hero = ({
  title,
  subtitle,

}: HeroProps) => {
  return (
    <section className="w-full relative min-h-screen bg-transparent flex flex-col justify-center items-center lg:gap-2 xl:gap-6 px-6 py-20 md:px-8 lg:px-12">

      {/* Título visual */}
      <p className="text-white z-1 tracking-tighter text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center font-semibold mt-6 sm:mt-0">
        {title}
      </p>

      {/* Subtítulo */}
      <p
        
        className="text-gray-200 font-mono z-1 mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center font-normal max-w-5xl"
      >
        {subtitle}
      </p>
      
    </section>
  )
}

export default Hero
