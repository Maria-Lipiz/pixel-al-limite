'use client'

import Link from 'next/link'
import { Mail, Phone} from 'lucide-react'
import {
  IconBrandWhatsapp
} from '@tabler/icons-react'

const Footer = () => {
  return (
    <footer className="text-white px-6 md:px-12 lg:px-24">
      <div className="justify-center items-center sm:items-start flex flex-col sm:flex-row gap-12 sm:gap-8 lg:gap-14 xl:gap-18 2xl:gap-24">

        {/* Logo y redes */}
        <div className="space-y-4 justify-center items-center text-center sm:text-start">
          {/*
          <img
            src="/logo.svg"
            alt="Pixel al Límite, agencia de marketing digital y diseño web"
            className="h-12 sm:h-14 lg:h-16 w-auto"
          />
          */}
          {/*<h3 className="text-base sm:text-lg lg:text-xl font-semibold mt-4" aria-hidden="true">¡Síguenos!</h3>*/}
          <div className="flex gap-4 mt-2 justify-center">
            {/*
          <a href="https://wa.me/34611733341" target="_blank" rel="noopener noreferrer" aria-label="Escribir WhatsApp a Pixel al Límite" title="Twitter">
              <IconBrandWhatsapp className="w-5 h-5 sm:w-7 sm:h-7 lg:w-9 lg:h-9 text-white opacity-80 hover:opacity-100 transition-transform hover:scale-125" />
            </a>
            <a href="mailto:hello@pixelallimite.com" target="_blank" rel="noopener noreferrer" aria-label="Enviar email a Pixel al Límite" title="Twitter">
              <Mail className="w-5 h-5 sm:w-7 sm:h-7 lg:w-9 lg:h-9 text-white opacity-80 hover:opacity-100 transition-transform hover:scale-125" />
            </a>
            <a href="tel:+34611733341" target="_blank" rel="noopener noreferrer" aria-label="llamar a Pixel al Límite" title="Twitter">
              <Phone className="w-5 h-5 sm:w-7 sm:h-7 lg:w-9 lg:h-9 text-white opacity-80 hover:opacity-100 transition-transform hover:scale-125" />
            </a>
            */}
            
          </div>
        </div>
      </div>

      {/* Legal */}
      <nav aria-label="Enlaces legales">
        <div className="w-screen text-[var(--color-silver)] bg-[var(--color-light)] py-2 -mx-6 md:-mx-12 lg:-mx-24 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[0.55rem] px-6 md:px-12 lg:px-24">
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#aviso">Aviso Legal</Link>
            <Link href="#privacidad">Política de Privacidad</Link>
            <Link href="#cookies">Política de Cookies</Link>
          </div>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
