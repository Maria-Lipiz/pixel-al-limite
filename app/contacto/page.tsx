'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaWhatsapp } from 'react-icons/fa'


export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
  
    const honeypotValue = (form.current?.honeypot?.value || '').trim()
  
    // Si el campo está relleno: es un bot ❌
    if (honeypotValue !== '') {
      console.warn('Formulario bloqueado por honeypot 🐝')
      setLoading(false)
      return
    }
  
    emailjs
      .sendForm(
        'service_8zmgd8r',
        'template_8ptx6va',
        form.current!,
        'geK0DTHl_BSde7s2F'
      )
      .then(
        () => {
          setSent(true)
          setLoading(false)
          form.current?.reset()
        },
        (error) => {
          console.error('Error al enviar el formulario:', error)
          alert('Error al enviar el formulario: ' + (error.text || JSON.stringify(error)))
          setLoading(false)
        }
      )
  }
  
  

  return (
    <section className="relative px-6 py-20 md:px-8 lg:px-12 relative min-h-screen bg-transparent flex flex-col justify-center items-center">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* 🟣 Columna izquierda */}
    <div className="space-y-8">
      <h1 className="text-white z-1 tracking-tighter text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold mt-6 sm:mt-0">
        Contacto
      </h1>

      <p className="text-gray-300 font-mono text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal">
        ¿Tienes un proyecto en mente? ¡Contacta con nosotros! En menos de 12 horas nos pondremos en contacto contigo y concertaremos una reunión. Si podemos ayudarte, te haremos una propuesta en el momento
      </p>

      <div className="space-y-4 text-white font-mono text-xl sm:text-2xl flex flex-col justify-center">
      <a
        href="https://wa.me/34611733341"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-white font-mono hover:text-[#00F0B5] transition-colors"
      >
        <FaWhatsapp className="w-10 h-10" />
        ¡Escríbenos por WhatsApp!
      </a>
        <div>
          <span className="text-gray-300 text-lg sm:text-xl">¿Prefieres llamarnos?</span><br />
          <a href="tel:+34611733341" className="hover:text-[var(--color-lemon)] transition-colors text-xl sm:text-2xl">+34 611 733 341</a>

        </div>
        <div>
          <span className="text-gray-300 text-lg sm:text-xl">¿Un correo?</span><br />
          <a href="mailto:hello@pixelallimite.com" className="hover:text-[var(--color-magenta)] transition-colors text-xl sm:text-2xl">hello@pixelallimite.com</a>
        </div>
      </div>
    </div>

    {/* 🟢 Columna derecha: el formulario */}
    <div>
      

        <form ref={form} onSubmit={sendEmail} className="space-y-5 mt-10 justify-center ">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div>
      <label className="sr-only">Nombre completo*</label>
      <input 
        name="user_name" 
        placeholder="Nombre completo"
        required
        className="w-full py-2 border-b border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-b-white valid:border-b-[#38BDF8] transition-all duration-200"
      />
    </div>
    <div >
      <label className="sr-only">Correo electrónico*</label>
      <input 
        type="email"
        placeholder="Correo electrónico" 
        name="user_email"
        required
        className="w-full py-2 border-b border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-b-white valid:border-b-[#00F0B5] transition-all duration-200"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div>
      <label className="sr-only">Teléfono</label>
      <input
        type="tel"
        name="user_phone"
        placeholder="Teléfono"
        className="w-full py-2 border-b border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-b-white valid:border-b-[#FF4ECD] transition-all duration-200"
      />
    </div>
    <div>
      <label className="sr-only">Nombre de empresa</label>
      <input 
        name="user_company"
        placeholder="Empresa"
        className="w-full py-2 border-b border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-b-white valid:border-b-[#A1A1AA] transition-all duration-200"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div>
      <label className="sr-only">Presupuesto estimado</label>
      <select
        name="user_budget"
        className="w-full py-2 border-b border-gray-500 text-white placeholder-gray-400 bg-[#030712] focus:outline-none focus:border-b-white valid:border-b-[#8B5CF6] transition-all duration-200"
      >
        <option value="">Presupuesto estimado</option>
        <option value="menos_1000">Menos de 1.000 €</option>
        <option value="1000_3000">1.000 € - 3.000 €</option>
        <option value="3000_6000">3.000 € - 6.000 €</option>
        <option value="6000_10000">6.000 € - 10.000 €</option>
        <option value="10000_mas">Más de 10.000 €</option>
      </select>
    </div>
    <div>
      <select
        name="user_service"
        className="w-full py-2 border-b border-gray-500 text-white placeholder-gray-400 bg-[#030712] focus:outline-none focus:border-b-white valid:border-b-[#EEFF00] transition-all duration-200"
      >
        <option value="">Servicios</option>
        <option value="diseno_web">Diseño y desarrollo web</option>
        <option value="seo">Posicionamiento SEO</option>
        <option value="sem">Publicidad en Google y Meta (SEM)</option>
        <option value="rrss">Gestión de redes sociales</option>
        <option value="automatizaciones">Automatizaciones para tu empresa</option>
        <option value="automatizaciones">Branding</option>
        <option value="otros">Pack de servicios</option>
      </select>
    </div>
  </div>

  <div>
    <label className="sr-only">Mensaje*</label>
    <textarea
      name="message"
      placeholder="¡Cuéntanos con detalle tu proyecto!"
      required
      rows={5}
      className="w-full py-2 border-b border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-b-white valid:border-b-white transition-all duration-200"
    />
  </div>
  <div className="flex flex-row justify-between gap-6">
  <div className="flex items-center space-x-2">
    <input type="checkbox" required className="accent-[white]" />
    <label className="text-sm">Acepto la política de privacidad</label>
  </div>

  {/* Honeypot invisible para bots */}
  <div className="hidden">
    <label>Pais</label>
    <input
      type="text"
      name="honeypot"
      autoComplete="off"
      className="w-full px-5 py-3 rounded-full border border-gray-300 bg-zinc-900 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white valid:border-mint transition-all duration-200"
    />
  </div>

  <button
    type="submit"
    disabled={loading}
    className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/80 hover:cursor-pointer transition-all"
  >
    {loading ? 'Enviando...' : 'Enviar'}
  </button>
  </div>
  </form>
  {sent && <p className="mb-4 mt-4 font-mono text-green-400">¡Formulario enviado correctamente! En breves nos pondremos en contacto contigo</p>}
    </div>
  </div>
</section>
  )
}
