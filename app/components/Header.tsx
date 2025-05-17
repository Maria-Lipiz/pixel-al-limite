'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  AlignRight,
  X,
  ChevronDown,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircleMore,
  Briefcase,
  ShoppingBag,
  Code2,
  Settings,
  Search,
  Megaphone,
  Share2,
  Brain,
  Citrus,
  BookOpenText,
  GraduationCap
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isServiciosMobileOpen, setIsServiciosMobileOpen] = useState(false)
  const [isSectoresMobileOpen, setIsSectoresMobileOpen] = useState(false)
  const [isServiciosOpen, setIsServiciosOpen] = useState(false)
  const [isSectoresOpen, setIsSectoresOpen] = useState(false)


  /*useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])*/

  const servicios = [
    { href: "/servicios/diseno-desarrollo-web", icon: <Code2 className="w-4 h-4" />, title: "Diseño y Desarrollo Web", desc: "Webs a medida para aumentar tus ventas" },
    { href: "/servicios/posicionamiento-seo", icon: <Search className="w-4 h-4" />, title: "Posicionamiento SEO", desc: "Rendimiento óptimo para visibilizar tu negocio" },
    { href: "/servicios/sem-publicidad-digital", icon: <Megaphone className="w-4 h-4" />, title: "SEM y Publicidad Digital", desc: "Campañas de marketing efectivas para resultados rápidos" }
    /*{ href: "/servicios/gestion-redes-sociales", icon: <Share2 className="w-4 h-4" />, title: "Gestión de Redes Sociales", desc: "Presencia profesional en todas las plataformas" }*/
    /*{ href: "/servicios/automatizaciones-para-empresas", icon: <Settings className="w-4 h-4" />, title: "Automatizaciones", desc: "Automatiza tareas y ahorra tiempo y dinero" }*/
  ]

  const sectores = [
    { href: "/servicios-por-sector/tiendas-online", icon: <ShoppingBag className="w-4 h-4" />, title: "Tiendas Online", desc: "Multiplica tus ventas y automatiza tu e-commerce. Adiós a la facturación y al recuento manual del inventario" },
    { href: "/servicios-por-sector/restaurantes", icon: <Citrus className="w-4 h-4" />, title: "Restaurantes", desc: "Ten una web y una carta increíbles. Agiliza reservas, pedidos y posiciona tu restaurante en tu ciudad" },
    { href: "/servicios-por-sector/clinicas-centros-belleza", icon: <BookOpenText className="w-4 h-4" />, title: "Clínicas y Centros de Belleza", desc: "Publicidad estética y efectiva" },
    { href: "/servicios-por-sector/academias-y-plataformas-e-learning", icon: <GraduationCap className="w-4 h-4" />, title: "Academias y Plataformas de E-Learning", desc: "Plataformas educativas modernas para facilitar el aprendizaje" },
    { href: "/servicios-por-sector/psicologos", icon: <Brain className="w-4 h-4" />, title: "Psicólogos", desc: "Atrae más pacientes, facilita las reservas y haz que tus redes sean un espacio seguro para tus seguidores" },
    { href: "/servicios-por-sector/gestorias-asesorias-y-despachos", icon: <Briefcase className="w-4 h-4" />, title: "Gestorías, asesorías y abogados", desc: "Destaca tu negocio entre la competencia. Agiliza el papeleo, la comunicación con los clientes y las gestiones" }
  ]

  return (
    <header
      className={`absolute /*fixed*/ top-0 left-0 right-0 z-50 mx-2 my-0 px-4 py-4 lg:px-6 lg:py-4 rounded-full flex items-center justify-between transition-colors duration-300 ${
        hasScrolled
          ? 'bg-[#030712] mt-2 shadow-md shadow-white/10 border-[0.5px] border-[var(--color-slate)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >

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
        {/* Servicios
        <div
          className="relative"
          onMouseEnter={() => setIsServiciosOpen(true)}
          onMouseLeave={() => setIsServiciosOpen(false)}
        >
          <button className="flex items-center font-normal xl:font-medium text-sm xl:text-lg gap-1 px-4 py-2 rounded-full hover:text-[var(--color-electric)] hover:bg-white/10 transition-all duration-300">
            ¿Qué ofrecemos?
            <motion.span
              animate={{ rotate: isServiciosOpen ? -180 : 0 }}
              transition={{ duration: 0.3 }}
              className="origin-center inline-block"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.span>
          </button>

          <AnimatePresence>
            {isServiciosOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ 
                  opacity: 0, 
                  y: -10,
                  transition: {duration:0.4, delay: 0.2} 
                }}
                transition={{ duration: 0.4 }}
                className="absolute left-0 top-full mt-3 flex flex-col bg-black text-white p-2 rounded-lg shadow-xl min-w-125"
              >
                {[
                  {
                    href: "/servicios/diseno-desarrollo-web",
                    icon: <Code2 className="w-6 h-6" />,
                    title: "Diseño y Desarrollo Web",
                    desc: "Webs a medida para aumentar tus ventas"
                  },
                  {
                    href: "/servicios/posicionamiento-seo",
                    icon: <Search className="w-6 h-6" />,
                    title: "Posicionamiento SEO",
                    desc: "Rendimiento óptimo para visibilizar tu negocio"
                  },
                  {
                    href: "/servicios/sem-publicidad-digital",
                    icon: <Megaphone className="w-6 h-6" />,
                    title: "SEM y Publicidad Digital",
                    desc: "Campañas de marketing efectivas para resultados rápidos"
                  }
                  /*{
                    href: "/servicios/gestion-redes-sociales",
                    icon: <Share2 className="w-6 h-6" />,
                    title: "Gestión de Redes Sociales",
                    desc: "Presencia profesional en todas las plataformas"
                  },
                  {
                    href: "/servicios/automatizaciones-para-empresas",
                    icon: <Settings className="w-6 h-6" />,
                    title: "Automatizaciones",
                    desc: "Automatiza tareas y ahorra tiempo y dinero"
                  
                ].map(({ href, icon, title, desc }, i) => (
                  <Link
                    key={i}
                    href={href}
                    className="group flex items-center gap-4 w-full rounded-md px-3 py-2 transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="flex items-center justify-center px-2 py-2 rounded-lg bg-white/10 text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[var(--color-magenta)] group-hover:to-[var(--color-mint)]">
                      {icon}
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold text-base xl:text-lg text-white">{title}</span>
                      <span className="text-sm xl:text-base text-gray-400">{desc}</span>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

         Sectores
        <div
          className="relative"
          onMouseEnter={() => setIsSectoresOpen(true)}
          onMouseLeave={() => setIsSectoresOpen(false)}
        >
          <button className="flex items-center font-normal xl:font-medium text-sm xl:text-lg gap-1 px-4 py-2 rounded-full hover:text-[var(--color-magenta)] hover:bg-white/10 transition-all duration-300">
            Servicios por sector
            <motion.span
              animate={{ rotate: isSectoresOpen ? -180 : 0 }}
              transition={{ duration: 0.3 }}
              className="origin-center inline-block"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.span>
          </button>

          <AnimatePresence>
            {isSectoresOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ 
                  opacity: 0, 
                  y: -10,
                  transition: {duration:0.4, delay: 0.2} 
                }}
                transition={{ duration: 0.4 }}
                className="absolute left-0 top-full mt-3 flex flex-col bg-black/97 text-white p-2 rounded-lg shadow-xl min-w-140"
              >
                {[
                  {
                    href: "/servicios-por-sector/tiendas-online",
                    icon: <ShoppingBag className="w-6 h-6" />,
                    title: "Tiendas Online",
                    desc: "Multiplica tus ventas y automatiza tu e-commerce. Adios a la facturación y al recuento manual del inventario"
                  },
                  {
                    href: "/servicios-por-sector/restaurantes",
                    icon: <Citrus className="w-6 h-6" />,
                    title: "Restaurantes",
                    desc: "Ten una web y una carta increibles. Agiliza reservas, pedidos y posiciona tu restaurante en tu ciudad"
                  },
                  {
                    href: "/servicios-por-sector/clinicas-centros-belleza",
                    icon: <BookOpenText className="w-6 h-6" />,
                    title: "Clínicas y Centros de Belleza",
                    desc: "Publicidad estética y efectiva"
                  },
                  {
                    href: "/servicios-por-sector/academias-y-plataformas-e-learning",
                    icon: <GraduationCap className="w-6 h-6" />,
                    title: "Academias y Plataformas de E-Learning",
                    desc: "Plataformas educativas modernas para facilitar el aprendizaje"
                  },
                  {
                    href: "/servicios-por-sector/psicologos",
                    icon: <Brain className="w-6 h-6" />,
                    title: "Psicólogos",
                    desc: "Atrae más pacientes, facilita las reservas y haz que tus redes sean un espacio seguro para tus seguidores"
                  },
                  {
                    href: "/servicios-por-sector/gestorias-asesorias-y-despachos",
                    icon: <Briefcase className="w-6 h-6" />,
                    title: "Gestorías, asesorías y abogados",
                    desc: "Destaca tu negocio entre la competencia. Agiliza el papeleo, la comunicación con los clientes y las gestiones"
                  }
                ].map(({ href, icon, title, desc }, i) => (
                  <Link
                    key={i}
                    href={href}
                    className="group flex items-center gap-4 w-full rounded-md px-3 py-2 transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="flex items-center justify-center px-2 py-2 rounded-lg bg-white/10 text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[var(--color-mint)] group-hover:to-[var(--color-electric)]">
                      {icon}
                    </div>
                    <div className="flex flex-col items-start">
                    <span className="font-semibold text-base xl:text-lg text-white">{title}</span>
                    <span className="text-sm xl:text-base text-gray-400">{desc}</span>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>*/}

        {/*<Link href="/marketing-para-startups" className="flex items-center font-normal xl:font-medium text-sm xl:text-lg gap-1 px-4 py-2 rounded-full hover:text-[var(--color-mint)] hover:bg-white/10 transition-all duration-300">Para Startups</Link>
        <Link href="/sobre-nosotros" className="flex items-center font-normal xl:font-medium text-sm xl:text-lg gap-1 px-4 py-2 rounded-full hover:text-[var(--color-mint)] hover:bg-white/10 transition-all duration-300">Nosotros</Link>
        <Link href="/blog" className="flex items-center font-normal xl:font-medium text-sm xl:text-lg gap-1 px-4 py-2 rounded-full hover:text-[var(--color-mint)] hover:bg-white/10 transition-all duration-300">Blog</Link>
        */}
        <Link href="/contacto" className="px-4 py-2 ml-2 font-semibold xl:font-bold text-base lg:text-lg xl:text-xl rounded-full bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-electric)] transition-all duration-300 hover:from-[var(--color-electric)] hover:to-[var(--color-mint)]">¿Hablamos?</Link>
      </nav>

      {/* MOBILE NAVIGATION 
      <div className="flex lg:hidden">
        <button
          className="text-white z-50 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir o cerrar menú"
        >
          {isOpen ? (
            <X className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          ) : (
            <AlignRight className="w-10 h-10 sm:w-12 sm:h-12" />
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-full h-screen bg-black/99 flex flex-col items-center justify-start pt-28 px-6 gap-6 overflow-y-auto text-white"
              aria-label="Menú principal móvil"
            >
              <button onClick={() => setIsServiciosMobileOpen(!isServiciosMobileOpen)} className="flex items-center justify-between w-full text-lg font-medium hover:text-[var(--color-mint)]">
                ¿Qué ofrecemos?
                <ChevronDown className={`transition-transform ${isServiciosMobileOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isServiciosMobileOpen && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex flex-col w-full gap-2">
                    {servicios.map(({ href, icon, title, desc }, i) => (
                      <Link key={i} href={href} onClick={() => setIsOpen(false)} className="group flex items-center gap-4 w-full rounded-md px-3 py-2 transition-all duration-300 hover:bg-white/10">
                        <div className="flex items-center justify-center px-2 py-2 rounded-lg bg-white/10 text-white transition-all duration-300 
                        group-hover:bg-gradient-to-r group-hover:from-[var(--color-magenta)] group-hover:to-[var(--color-mint)]">{icon}</div>
                        <div className="flex flex-col items-start">
                          <span className="font-semibold text-sm text-white">{title}</span>
                          <span className="text-xs text-gray-400">{desc}</span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <button onClick={() => setIsSectoresMobileOpen(!isSectoresMobileOpen)} className="flex items-center justify-between w-full text-lg font-medium hover:text-[var(--color-mint)] mt-1">
                Servicios por sector
                <ChevronDown className={`transition-transform ${isSectoresMobileOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isSectoresMobileOpen && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex flex-col w-full gap-2">
                    {sectores.map(({ href, icon, title, desc }, i) => (
                      <Link key={i} href={href} onClick={() => setIsOpen(false)} className="group flex items-center gap-4 w-full rounded-md px-3 py-2 transition-all duration-300 hover:bg-white/10">
                      <div className="flex items-center justify-center px-2 py-2 rounded-lg bg-white/10 text-white transition-all duration-300 
                      group-hover:bg-gradient-to-r group-hover:from-[var(--color-electric)] group-hover:to-[var(--color-mint)]">{icon}</div>
                      <div className="flex flex-col items-start">
                        <span className="font-semibold text-sm text-white">{title}</span>
                        <span className="text-xs text-gray-400">{desc}</span>
                      </div>
                    </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/marketing-para-startups" className="flex items-center justify-between w-full text-lg font-medium hover:text-[var(--color-mint)] mt-1">Para Startups</Link>
              <Link href="/sobre-nosotros" className="flex items-center justify-between w-full text-lg font-medium hover:text-[var(--color-mint)] mt-1">Nosotros</Link>
              <Link href="/blog" className="flex items-center justify-between w-full text-lg font-medium hover:text-[var(--color-mint)] mt-1">Blog</Link>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-12 sm:mt-6 mt-auto mb-10">
                <div className="flex gap-4 sm:gap-6">
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-80 hover:opacity-100 transition-transform hover:scale-125" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-80 hover:opacity-100 transition-transform hover:scale-125" />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-80 hover:opacity-100 transition-transform hover:scale-125" />
                  </a>
                </div>
                <Link href="/contacto" onClick={() => setIsOpen(false)} className="group flex items-center font-normal rounded-full px-4 py-2 gap-2 text-xl bg-gradient-to-r from-[var(--color-magenta)] to-[var(--color-electric)] opacity-80 hover:opacity-100 transition-transform hover:scale-105">
                  Hablamos?
                  <MessageCircleMore className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>*/}

    </header>
  )
}

export default Header;
