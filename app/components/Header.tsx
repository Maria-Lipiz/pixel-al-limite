'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image';


const Header = () => {

  return (
    <header
      className="absolute /*fixed*/ top-0 left-0 right-0 z-50 mx-2 my-0 px-4 py-4 lg:px-6 lg:py-4 rounded-full flex items-center justify-between transition-colors duration-300">

        <Link href="/" className="flex items-center" aria-label="Inicio">
            <Image
                src="/logo.svg"
                alt="Logo de Pixel al Límite"
                width={100} // Puedes ajustar el tamaño exacto
                height={50}
                className="z-2"
                priority
            />
        </Link>

        <nav className="flex items-center gap-0.5 relative"> {/*Aquí poner un hidden cuando haga menú en movil*/}
        <Link href="/contacto" className="px-4 py-2 ml-2 font-semibold xl:font-bold text-base lg:text-lg xl:text-xl rounded-full bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-electric)] transition-all duration-300 hover:from-[var(--color-electric)] hover:to-[var(--color-mint)]">¿Hablamos?</Link>
      </nav>


    </header>
  )
}

export default Header;
