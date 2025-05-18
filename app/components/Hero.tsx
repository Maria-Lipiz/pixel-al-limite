'use client'

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

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
  primaryButtonText = 'Solicita presupuesto gratis',
  secondaryButtonText = 'Consulta nuestros servicios',
  gradientFrom = '#38BDF8',
  gradientTo = '#00F0B5',
  hoverGradientFrom = '#FF4ECD',
  hoverGradientTo = '#38BDF8',
  buttonLink = '/contacto'
}: HeroProps) => {
  return (
    <section className="w-full relative min-h-screen bg-transparent flex flex-col justify-center items-center lg:gap-2 xl:gap-6 px-6 py-20 md:px-8 lg:px-12">

      {/* Título visual */}
      <p className="text-white z-1 tracking-tighter text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center font-semibold mt-6 sm:mt-0">
        {title}
      </p>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-gray-300 font-mono z-1 mt-4 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center font-normal max-w-5xl"
      >
        {subtitle}
      </motion.p>

      {/* Botones */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <motion.a
          href="/contacto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="group font-mono flex z-1 items-center gap-2 sm:gap-4 rounded-full font-semibold text-white
          text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
          px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8 lg:py-4 xl:px-10 xl:py-4.5 2xl:px-12 2xl:py-5
          transition-all bg-gradient-to-r from-[var(--from)] to-[var(--to)] hover:from-[var(--hover-from)] hover:to-[var(--hover-to)]"
          style={{
            '--from': gradientFrom,
            '--to': gradientTo,
            '--hover-from': hoverGradientFrom,
            '--hover-to': hoverGradientTo,
          } as React.CSSProperties}
          aria-label={primaryButtonText}
        >
          <Image
            src="/icons/pixel.svg"
            alt=""
            role="presentation"
            width={32}
            height={32}
            className="w-3 h-3 sm:w-4 sm:h-4 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 rotate-90 transition-transform duration-300 group-hover:-translate-x-1"
          />

          {primaryButtonText}

          <Image
            src="/icons/pixel.svg"
            alt=""
            role="presentation"
            width={32}
            height={32}
            className="w-3 h-3 sm:w-4 sm:h-4 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.a>

        <motion.a
          href={buttonLink}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="group font-mono flex z-1 items-center gap-2 sm:gap-4 rounded-full font-semibold text-white bg-transparent border border-[#2C2C2E] transition-all
          text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
          px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8 lg:py-4 xl:px-10 xl:py-4.5 2xl:px-12 2xl:py-5 hover:bg-[#020617]"
          aria-label={secondaryButtonText}
        >
          {secondaryButtonText}
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 transition-transform duration-300 group-hover:rotate-135" />
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
