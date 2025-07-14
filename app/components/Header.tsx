'use client'

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

    </header>
  )
}

export default Header;
