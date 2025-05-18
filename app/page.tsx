import dynamic from 'next/dynamic'
import Head from 'next/head'
import Script from 'next/script'
import { ChartColumn, FolderCode , Search, Megaphone, Instagram, GitCompare } from 'lucide-react'
import {
  IconNumber1Small,
  IconNumber2Small,
  IconNumber3Small,
  IconNumber4Small,
  IconNumber5Small,
  IconNumber6Small
} from '@tabler/icons-react'

// ✅ Importaciones dinámicas optimizadas
const FloatingPixelsBackground = dynamic(() => import('./components/FloatingPixelsBackground'))
const AnimatedText = dynamic(() => import('./components/AnimatedText'))
const LaserGrid = dynamic(() => import('./components/LaserGrid'))
const FloatingWrapper = dynamic(() => import('./components/FloatingWrapper'))
const Hero = dynamic(() => import('./components/Hero'))
const GlowCard = dynamic(() => import('./components/GlowCardComponent'))
const PricingCard = dynamic(() => import('./components/Pricing'))
const DarkLightReveal = dynamic(() => import('./components/DarkLightReveal'))
const PixelButton = dynamic(() => import('./components/PixelButton'))
const Chart = dynamic(() => import('./components/SEO/Chart'))

export const metadata = {
  title: 'Pixel al Límite | Agencia de Marketing Digital para PyMEs',
  description:
    'Diseño web, desarrollo web, SEO, SEM, Publicidad Digital, Publicidad en Google y Meta, automatización de procesos y más. Creamos experiencias digitales que inspiran y venden.',
  keywords: [
    'Agencia de Marketing Digital para PyMEs',
    'Agencia Marketing Digital para PyMEs',
    'Agencia Marketing Digital para Empresas',
    'Agencia de Marketing para PyMEs',
    'Agencia de Marketing para empresas',
    'Agencia de Marketing para influencers',
    'Marketing para influencers',
  ],
  authors: [{ name: 'Pixel al Límite', url: 'https://pixelallimite.com' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Pixel al Límite | Agencia de Marketing Digital',
    description:
      'Impulsa las ventas de tu negocio con una agencia estratégica, tecnológica y atrevida. Diseño, datos y resultados en cada píxel.',
    url: 'https://pixelallimite.com',
    siteName: 'Pixel al Límite',
    images: [
      {
        url: 'https://pixelallimite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixel al Límite | Agencia de Marketing Digital en Madrid',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel al Límite',
    description: 'Diseño web, marketing digital y estrategias digitales que inspiran y convierten.',
    images: ['https://pixelallimite.com/og-image.jpg'],
    creator: '@pixelallimite',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.png',
  },
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Pixel al Límite",
    "url": "https://pixelallimite.com",
    "logo": "https://pixelallimite.com/logo.png",
    "description": "Agencia de Marketing Digital en España especializada en diseño web, desarrollo web, SEO, SEM y Social Media para PyMEs, empresas e influencers.",
    "email": "hello@pixelallimite.com",
    "telephone": "+34 611 733 341",
    "areaServed": {
      "@type": "Country",
      "name": "España"
    },
    "sameAs": [
      "https://www.facebook.com/pixelallimite",
      "https://www.linkedin.com/company/pixelallimite",
      "https://twitter.com/pixelallimite"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "offers": [
        {
          "@type": "Offer",
          "name": "Diseño Web",
          "description": "Diseño web para PyMEs y empresas"
        },
        {
          "@type": "Offer",
          "name": "Desarrollo Web",
          "description": "Desarrollo web para PyMEs y empresas"
        },
        {
          "@type": "Offer",
          "name": "Posicionamiento SEO",
          "description": "Posicionamiento SEO para PyMEs y empresas que buscan crecer"
        },
        {
          "@type": "Offer",
          "name": "Publicidad Digital, Publicidad en Google y Meta y SEM",
          "description": "Marketing Digital y Publicidad Online para PyMEs y empresas"
        },
        {
          "@type": "Offer",
          "name": "Gestión de redes sociales",
          "description": "Creación de contenido, campañas en redes sociales, estrategias de marketing en redes sociales y gestión de comunidades para PyMEs e influencers"
        },
        {
          "@type": "Offer",
          "name": "Automatizaciones para tu empresa",
          "description": "Automatizaciones para PyMEs y empresas"
        },
      ]
    }
  }

  return (
    <>
      <Script
        id="schema-dw"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="w-full">
        {/* SEO invisible */}
        <section className="sr-only">
          <p>Marketing Digital 360</p>
          <h1>Píxel al Límite: Tu Agencia de Marketing digital para PyMEs y empresas</h1>
          <p>
            Somos la Agencia de Marketing Digital para PyMEs que buscan crecer.
            ¿Quieres aumentar tus ventas?
          </p>
        </section>
        <section className="sr-only">
          <h2>¡Ofrecemos servicios de desarrollo web y marketing digital en toda España</h2>
          <p>En Pixel al Límite ofrecemos diseño web, SEO, SEM y estrategias digitales para autónomos, empresas y PyMEs en todo el país. Estas son algunas de las ciudades en las que trabajamos y lo que hacemos:</p>
          <ul>
            <li>Agencia de marketing digital en Albacete: SEO, SEM y diseño web para negocios locales</li>
            <li>Diseño web en Lugo: páginas profesionales optimizadas para SEO local</li>
            <li>Posicionamiento SEO en Huelva: visibilidad real para empresas en buscadores</li>
            <li>Marketing digital para PYMEs en Segovia: estrategias digitales efectivas</li>
            <li>Agencia de marketing digital en Ciudad Real: diseño web y estrategias SEM</li>
            <li>Diseño web en Soria: marketing digital completo para empresas que quieren crecer</li>
            <li>Automatización de procesos en Cuenca: digitaliza tu negocio con tecnología</li>
            <li>Marketing Digital para PyMEs en Ponferrada: impulsa tu negocio con estrategias modernas</li>
            <li>Consultoría de marketing en Ávila: estrategias de posicionamiento y conversión</li>
            <li>Diseño y desarrollo web en Teruel: soluciones digitales para pequeñas empresas</li>
            <li>SEO técnico en Burgos: mejora la velocidad, estructura y ranking de tu sitio</li>
            <li>Diseño web en León: presencia online sólida para negocios locales</li>
            <li>Marketing digital para influencers en Madrid: posiciona tu marca y amplía tu comunidad</li>
            <li>Diseño web para PYMEs en Valencia: páginas funcionales y enfocadas en ventas</li>
            <li>Posicionamiento SEO en Sevilla: sube posiciones en Google con una estrategia sólida</li>
            <li>Google Ads en Barcelona: campañas de publicidad digital orientadas a resultados</li>
            <li>Diseño web para empresas en Zaragoza: soluciones a medida con enfoque comercial</li>
            <li>Marketing digital para PYMEs en Granada: impulsa tu negocio con estrategias modernas</li>
          </ul>
        </section>

        {/* Hero visual interactivo */}
        <Hero
          title={<>Tu éxito digital comienza con un <span className="animated-gradient-text">píxel.</span></>}
          subtitle="Marketing digital para PyMEs y empresas que buscan crecer"
          primaryButtonText="Solicita presupuesto gratis"
          secondaryButtonText="Consulta nuestros servicios"
          gradientFrom="#00F0B5"
          gradientTo="#38BDF8"
          hoverGradientFrom="#FF4ECD"
          hoverGradientTo="#EEFF00"
          buttonLink='#servicios'
        />

        <section className="px-6 py-20 md:px-8 lg:px-12 justify-start items-start">
          {/* H1 principal SEO optimizado con animación de entrada */}
          <p className="text-[var(--color-silver)] font-mono z-1 mt-4 text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-left font-normal max-w-5xl">
            Diseño al pixel. Estrategia al límite
          </p>
        </section>

        {/* ¿Por qué lo necesitas ahora? */}
        <section className="relative overflow-hidden px-6 py-20 md:px-8 lg:px-12">
          {/* Círculo azul izquierdo */}
          <div className="absolute left-0 top-1/4 w-30 h-30 sm:w-40 sm:h-40 lg:w-50 lg:h-50 rounded-full bg-[var(--color-purple)] opacity-30 blur-3xl pointer-events-none" />

          {/* Círculo magenta derecho */}
          <div className="absolute right-0 top-1/4 w-30 h-30 sm:w-40 sm:h-40 lg:w-50 lg:h-50 rounded-full bg-[var(--color-lemon)] opacity-30 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <h2 className="px-6 md:px-12 lg:px-28 tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6">
            ¿Por qué tu empresa necesita una web increible y una estrategia digital que venda?
            </h2>

            <p className="sr-only">
              Hoy en día, tener una página web ya no es suficiente. Si tu empresa o PyME quiere crecer de verdad, necesitas una web rápida, optimizada, con arquitectura UX/UI y posicionamiento SEO desde el primer píxel. 
              Una buena estrategia de marketing digital empieza con un desarrollo web sólido, continúa con un SEO técnico bien hecho y se impulsa con campañas SEM y redes sociales gestionadas por profesionales. 
              En Pixel al Límite creamos sitios web pensados para atraer tráfico, posicionarse alto en Google y convertir visitas en ventas. 
              Combinamos diseño visual, desarrollo a medida y automatización inteligente para que cada detalle de tu presencia digital esté alineado con tus objetivos de negocio. 
              Si tu web no carga rápido, no aparece en buscadores o no comunica tu valor, estás perdiendo dinero. Nosotros te ayudamos a recuperarlo.
            </p>

            <AnimatedText
              as="p"
              text="Tu web, tu posicionaiento, tus campañas y tus redes son tu sistema de ventas. Si tu página no carga rápido, si no aparece en Google, si tus anuncios no convierten o si tus redes no reflejan profesionalidad, estás perdiendo oportunidades cada día, por lo que una publicidad bien hecha ya no es opcional, ¡Es supervivencia digital!"
              className="px-6 font-mono md:px-12 lg:px-28 text-sm sm:text-base lg:text-xl xl:text-2xl 2xl:text-3xl mb-3 text-[var(--color-silver)]"
            />
          </div>
        </section>

        {/* ¿Cómo ayudamos? */}
        <section 
          id="servicios"
          className="px-6 py-20 md:px-8 lg:px-12 flex flex-col gap-6">
          <div className="col-span-1 md:col-span-3">
            <h2 className="sr-only">
              Nuestros servicios de Marketing Digital y Diseño web para PyMEs y empresas
            </h2>
            <h2 className="tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6">
              Lo que podemos hacer por tu negocio
            </h2>
            <p className="text-gray-300 font-mono z-1 mb-12 text-sm sm:text-base lg:text-lg font-normal max-w-5xl">
              En nuestra agencia de marketing digital conocemos la importancia de una publicidad bien hecha.
              Por eso no seguimos esquemas ni fórmulas genéricas: creamos desde cero pensando en tu negocio, con estrategia, diseño y código de verdad. Ponemos todo nuestro conocimiento a tu servicio para ayudarte a <strong className="animated-gradient-text-greenblue">vender más y crecer sin límites.</strong>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Estrategias para vender más",
                desc: "Ideamos estrategias digitales para atraer más clientes y aumentar tus ventas. Además, ofrecemos asesoría personalizada para ayudarte a mejorar tu marca, tus embudos de venta y tu imagen.",
                icon: ChartColumn
              },
              {
                title: "Diseño y desarrollo web a medida",
                desc: "¿Necesitas una web o quieres mejorar la que ya tienes? Nosotros te ayudamos a crear una web a medida para tu negocio ajustada a tu presupuesto, con diseño y código de verdad.",
                icon: FolderCode
              },
              {
                title: "Posicionamiento SEO y optimización web",
                desc: "Ofrecemos todo lo necesario para que tu web sea la primera opción de los usuarios: SEO on Page, SEO off Page, investigación de keywords, redacción de textos y mucho más.",
                icon: Search
              },
              {
                title: "Publicidad en Google, Meta y ChatGPT",
                desc: "Gestionamos, analizamos y optimizamos de principio a fin tus campañas de Google y Meta para hacerte aparecer justo en el momento oportuno. Además implementamos lo necesario para que ChatGPT recomiende tu negocio.",
                icon: Megaphone
              },
              {
                title: "Gestión completa de Redes Sociales",
                desc: "Creamos contenido atractivo alineado con tu marca y estrategia, gestionamos tus redes sociales, analizamos resultados, implementamos mejoras y aumentamos tu comunidad de seguidores para que tu no tengas que hacerlo.",
                icon: Instagram
              },
              {
                title: "Hacemos que la IA trabaje para ti",
                desc: "Automatizamos procesos para que tu empresa sea más eficiente y tu vida más fácil. Con ayuda de la IA, puedes reducir costes, mejorar la calidad de tu servicio y aumentar la productividad de tu equipo.",
                icon: GitCompare
              },
            ].map(({ title, desc, icon: Icon }) => (
              <FloatingWrapper
                key={title}
                className="group bg-white/3 backdrop-blur-md rounded-4xl p-2 lg:p-4 transition-all duration-300 ease-out hover:-translate-y-2 shadow-md/30 shadow-white/15 hover:shadow-[#00F0B5]"
              >
                <div className="bg-white/4 p-6 rounded-3xl border-1 border-transparent group-hover:border-white/2">
                  {/* Icono */}
                  {Icon && (
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-electric mb-4 transition-transform group-hover:drop-shadow-[0_0_5px_var(--color-silver)]" />
                  )}
                  <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-white mb-2">{title}</h3>
                  <p className="font-mono text-gray-400 text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">{desc}</p>
                </div>
              </FloatingWrapper>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 md:px-8 lg:px-12 relative overflow-hidden">
          {/* Cabecera */}
          <div className="text-center mb-16">
            <h2 className="tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6">
              ¿Por qué elegir Píxel al Límite para aunmentar <span className="animated-gradient-text-pinkyellow">tus ventas?</span>
            </h2>
            <p className="sr-only">
              En nuestra Agencia de Marketing Digital para PyMEs y empresas creemos en el trabajo bien hecho, las decisiones basadas y en datos y nuestro mayor compromiso es proporcionarte las herramientas necesarias para hacer de tu negocio un referente en el mercado.
            </p>
            <p className="text-gray-300 font-mono z-1 mb-12 text-sm sm:text-base lg:text-lg">
              Porque no hacemos magia, hacemos conversiones. Elaboramos estrategias basadas en datos reales y elegimos siempre las soluciones más adecuadas para hacer crecer tu negocio.
            </p>
          </div>

          {/* Contenido en dos columnas */}
          <div className="flex flex-col w-full border-1 border-white/10 gap-4">
            {/* Fila 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full border-1 border-white/10 gap-4">
              <div className="flex flex-col">
                <div className="p-4 border-1 flex flex-col border-white/10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Transparencia absoluta</h3>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-500 font-medium mb-2">Conoce lo que hacemos y por qué</p>
                  <p className="text-sm sm:text-base font-mono text-gray-300 font-medium mb-2">Nada de humo ni promesas vagas. Te explicamos cada acción, cada euro invertido y cada resultado. Sabes qué se hace, por qué y con qué impacto. Lo que ves, es lo que hay.</p>
                </div>
                <div className="p-4 border-1 flex flex-col border-white/10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Toma de decisiones basada en datos</h3>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-500 font-medium mb-2">Los datos son la clave del éxito</p>
                  <p className="text-sm sm:text-base font-mono text-gray-300 font-medium mb-2">Cada estrategia parte de un análisis riguroso. Usamos datos reales para entender a tu audiencia, detectar oportunidades y optimizar cada paso para que todo sume.</p>
                </div>
              </div>
              <div className="flex justify-center items-center flex max-h-90 border-1 border-white/10">
                <DarkLightReveal />
              </div>
            </div>

            {/* Fila 2 */}
            <div className="p-4 border-1 border-white/10">
              <h3 className="sr-only">
                Nos enfocamos en aumentar el tráfico de tu web y tus ventas
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Enfoque en ventas</p>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-500 font-medium mb-2">Lo importante son las ventas, no los likes.</p>
              <p className="text-sm sm:text-base font-mono text-gray-300 font-medium mb-2">Aquí no medimos el éxito en visitas o seguidores, sino en conversión, clientes y facturación. Creamos sistemas digitales que venden, no solo que lucen bonitos.</p>
            </div>
            <div className="flex justify-center items-center flex max-h-90 border-1 border-white/10">
              <Chart />
            </div>

            <div className="p-4 border-1 border-white/10">
              <h3 className="sr-only">
                En nuestra agencia de diseño web para PyMEs y empresas, nos centramos en lo importante
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Nos centramos en lo importante</p>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-500 font-medium mb-2">Elegimos pocos proyectos para hacerlo excepcionalmente bien</p>
              <p className="text-sm sm:text-base font-mono text-gray-300 font-medium mb-2">Solo trabajamos con unos pocos clientes a la vez para volcarnos por completo en cada web. Nos implicamos a fondo para que el resultado final no sea simplemente profesional, sino extraordinario. Calidad antes que cantidad, siempre.</p>
            </div>

            {/* Fila 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
              <div className="p-4 border-1 border-white/10">
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Agencia joven e innovadora</h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-500 font-medium mb-2">No nos gusta hacer lo mismo que los demás</p>
                <p className="text-sm sm:text-base font-mono text-gray-300 font-regular mb-2">Somos un equipo joven, dinámico y siempre atento a las últimas tendencias y tecnologías. Nos encanta innovar y crear soluciones únicas para nuestros clientes.</p>
              </div>
              <div className="p-4 border-1 border-white/10">
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Usamos las mejores herramientas</h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-500 font-medium mb-2">Tecnología real en todo lo que hacemos</p>
                <p className="text-sm sm:text-base font-mono text-gray-300 font-regular mb-2">No usamos plantillas, ni campañas copiadas, ni atajos de manual. Cada web, estrategia SEO, campaña de Google o calendario de redes se crea desde cero, con herramientas profesionales y decisiones técnicas pensadas para rendir.</p>
                </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-8 lg:px-12 h-[80vh] justify-center items-center flex flex-col md:flex-row">
          {/* H1 principal SEO optimizado con animación de entrada */}
          <p className="tracking-tighter max-w-xl text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6">
            Solicita ahora tu presupuesto <span className="animated-gradient-text-purplepink">gratis</span>
          </p>
          
          <PixelButton
            href="/contacto"
            text="¡Quiero presupuesto!"
            ariaLabel="Botón para contactar"
            gradient="linear-gradient(to right, #8B5CF6,#FF4ECD )"
            hoverGradient="linear-gradient(to right, #FF4ECD,#8B5CF6)"
          />
        </section>

        {/* Proceso */}
        <section className="relative px-6 py-20 md:px-8 lg:px-12 gap-12 overflow-hidden flex flex-col lg:flex-row">
          {/* Fondo animado detrás de las tarjetas */}
          <LaserGrid />
          <div className="flex flex-col gap-6">
            {/* Título y subtítulo sobre el fondo */}
            <h2 className="sr-only">
              ¿Como es el proceso de diseño y desarrollo web?
            </h2>
            <p className="tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6 relative z-10">
              Nuestro proceso paso a paso
            </p>
            <p className="text-gray-300 font-mono z-10 mb-12 text-sm sm:text-base lg:text-lg font-normal max-w-5xl relative">
            En Pixel al Límite acompañamos a PYMEs y empresas en la creación de un sistema digital completo: diseño web, posicionamiento SEO, SEM, automatización y redes sociales.

No entregamos productos aislados: diseñamos estrategias que captan, posicionan y convierten. Analizamos tu negocio, definimos una hoja de ruta y la ejecutamos con precisión para generar resultados reales y sostenibles.
            </p>
          </div>

          {/* Tarjetas encima del fondo */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 relative z-10">
            <GlowCard
              title="Evaluación estratégica"
              text={`Analizamos tu negocio, tus objetivos y tu competencia. Establecemos una base clara sobre la que diseñar la estrategia digital más eficaz para ti.`}
              icon={<IconNumber1Small className="w-8 h-8" />}
            />
            <GlowCard
              title=" Planificación"
              text={`Definimos contigo la mejor combinación de servicios y preparamos la estructura, el software y el enfoque ideal para tu sector.`}
              icon={<IconNumber2Small className="w-8 h-8" />}
            />
            <GlowCard
              title=" Diseño y branding"
              text={`Creamos una identidad visual y experiencia digital alineada con tu marca. Diseñamos interfaces atractivas, modernas y enfocadas en conversión.`}
              icon={<IconNumber3Small className="w-8 h-8" />}
            />
            <GlowCard
              title="Desarrollo y despliegue técnico"
              text={`Desarrollamos tu web, configuramos analítica avanzada y preparamos campañas SEO/SEM y estructuras de contenido efectivas.`}
              icon={<IconNumber4Small className="w-8 h-8" />}
            />
            <GlowCard
              title="Activación de tráfico y visibilidad"
              text={`Lanzamos campañas en los canales escogidos. Optimizamos tu presencia en buscadores, plataformas y canales relevantes para atraer tráfico cualificado.`}
              icon={<IconNumber5Small className="w-8 h-8" />}
            />
            <GlowCard
              title="Medición, soporte y mejora continua"
              text={`No desaparecemos tras el lanzamiento. Acompañamos tu crecimiento con soporte técnico, ajustes de campaña, análisis de datos y mejoras constantes.`}
              icon={<IconNumber6Small className="w-8 h-8" />}
            />
          </div>
        </section>

        {/* Costes */}
        <section className="relative px-6 py-20 md:px-8 lg:px-12 gap-12">
          <h2 className="sr-only">
            ¿Cuanto cuesta una página web?
          </h2>
          <h2 className="tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6 relative z-10">
            Elige el plan que más se ajusta a tu negocio
          </h2>
          <p className="text-gray-300 font-mono z-10 mb-12 text-sm sm:text-base lg:text-lg font-normal max-w-5xl relative">
            Sabemos que cada proyecto es único. Sin embargo, ofrecemos packs completos orientativos según el nivel de presencia y posicionamiento que necesite tu negocio. Todos incluyen presupuesto personalizado -según si necesitas más o menos servicios- y asesoría profesional.
          </p>

          <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            <PricingCard
              title="Básico"
              price="850€"
              priceLabelColor="#A1A1AA"
              unit="/proyecto"
              features={['Diagnostico de Estrategia Digital', 'Sitio Web básico responsive', 'Configuración de Google Business', 'Posicionamiento SEO básico', 'Perfiles Sociales profesionales']}
              buttonLabel="¡Me interesa!"
              buttonHref="/contacto"
              highlight
              gradientFrom="transparent"
              gradientVia="#030712"
              gradientTo="transparent"
              backgroundColor="transparent"
              subUnitText="Para profesionles y pequeños negocios"
              subUnitTextColor="#ffffff"
              textColor="#ffffff"
              buttonTextColor="ffffff"
              buttonBgColor="#030712"
              buttonBorderColor="#ffffff"
              buttonBorderWidth="1px"
              footerText="*El precio del servicio podrá variar en función de la complejidad del proyecto"
              footerTextColor="#777C85"
            />
            <PricingCard
              title="Profesional"
              price="2100€"
              priceLabelText="desde"
              unit="/proyecto"
              priceLabelColor="#A1A1AA"
              features={['Web completa o rediseño', 'Posicionamiento SEO inicial', 'Campaña SEM inicial', 'Planificación de Redes Sociales', 'Embudo de captación y analítica']}
              buttonLabel="Solicitar presupuesto gratis"
              buttonHref="/contacto"
              highlight
              gradientFrom="#4A4A4F"
              gradientVia="transparent"
              gradientTo="#00F0B5"
              backgroundColor="transparent"
              subUnitText="Negocios y profesionales que quieren aumentar sus ventas"
              subUnitTextColor="#ffffff"
              textColor="#ffffff"
              buttonTextColor="#000000"
              buttonBgColor="#ffffff"
              buttonBorderColor="#ffffff"
              buttonBorderWidth="1px"
              footerText="*El precio del servicio se ajustará según la complejidad y el tiempo estimado"
              footerTextColor="#777C85"
            />
            <PricingCard
              title="Avanzado"
              price="▚"
              priceLabelText="Presupuesto personalizado"
              priceLabelColor="#A1A1AA"
              features={['Web a medida + Diseño UX/UI','SEO avanzado + campañas segmentadas', 'Embudos de ventas + CRM + Automatización', 'Gestión de redes profesional', 'Consultoría estrategica + Branding + Analíticas']}
              buttonLabel="Contacta con nosotros"
              buttonHref="/contacto"
              highlight
              gradientFrom="#A1A1AA"
              gradientVia="transparent"
              gradientTo="#00F0B5"
              backgroundColor="#030712"
              subUnitText="Ideal para PyMEs, startups y proyectos complejos"
              subUnitTextColor="#ffffff"
              textColor="#ffffff"
              buttonTextColor="#ffffff"
              buttonBgColor="#030712"
              buttonBorderColor="#ffffff"
              buttonBorderWidth="1px"
              footerText="*El precio del servicio se ajustará según la complejidad y el tiempo estimado"
              footerTextColor="#777C85"
            />
          </div>
        </section>

        {/* CTA final */}
        <section className="px-6 py-20 md:px-8 lg:px-12 h-[90vh] text-center flex flex-col gap-4 items-center justify-center">
          <p className="tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white">
            ¿Listo para transformar tu <span className="animated-gradient-text-greenblue">presencia online?</span>
          </p>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-500 font-medium mb-2">Cuentanos tu proyecto y te ayudaremos a hacerlo realidad</p>
          
          <PixelButton
            href="/contacto"
            text="¡Empezar ahora!"
            ariaLabel="Botón para contactar"
            gradient="linear-gradient(to right, #00F0B5,#38BDF8 )"
            hoverGradient="linear-gradient(to right, #38BDF8,#00F0B5)"
          />
        </section>

        {/* Fondo animado */}
        <FloatingPixelsBackground />
      </main>
    </>
  )
}
