import dynamic from 'next/dynamic'
import Script from 'next/script'
import { Dock, CodeXml, Palette, CircuitBoard, ShoppingCart, SearchCode } from 'lucide-react'
import {
  IconNumber1Small,
  IconNumber2Small,
  IconNumber3Small,
  IconNumber4Small,
  IconNumber5Small,
  IconNumber6Small
} from '@tabler/icons-react'

// ✅ Importaciones dinámicas optimizadas
const AnimatedText = dynamic(() => import('../../components/AnimatedText'))
const FloatingDesignWebPixels = dynamic(() => import('../../components/DisenoDesarrolloWeb/FloatingDesignWebPixels'))
const FloatingWrapper = dynamic(() => import('../../components/FloatingWrapper'))
const Hero = dynamic(() => import('../../components/Hero'))
const GlowCard = dynamic(() => import('../../components/GlowCardComponent'))
const PricingCard = dynamic(() => import('../../components/Pricing'))
const DarkLightReveal = dynamic(() => import('../../components/DarkLightReveal'))
const PixelButton = dynamic(() => import('../../components/PixelButton'))
const Chart = dynamic(() => import('../../components/SEO/Chart'))

export const metadata = {
  title: 'Diseño y Desarrollo Web | Pixel al Límite',
  description: 'Creamos webs a medida para aumentar tus ventas, optimizadas para SEO y totalmente personalizadas.',
  keywords: [
    'agencia de diseño web',
    'desarrollo web',
    'diseño web para empresas',
    'Pixel al Límite',
    'Diseño web para PyMEs',
    'Desarrollo web para PyMEs'
  ],
  robots: 'index, follow',
  authors: [{ name: 'Pixel al Límite', url: 'https://pixelallimite.com' }],
  openGraph: {
    title: 'Diseño y Desarrollo Web | Pixel al Límite',
    description: 'Creamos webs a medida para aumentar tus ventas, optimizadas para SEO y totalmente personalizadas.',
    url: 'https://pixelallimite.com/servicios/diseno-desarrollo-web',
    siteName: 'Pixel al Límite',
    images: [
      {
        url: 'https://pixelallimite.com/og-image-diseno-web.png',
        width: 1200,
        height: 630,
        alt: 'Diseño y Desarrollo Web'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño y Desarrollo Web | Pixel al Límite',
    description: 'Creamos webs a medida para aumentar tus ventas, optimizadas para SEO y totalmente personalizadas.',
    images: ['https://pixelallimite.com/og-image-diseno-web.png']
  }
}

export default function ServicioDisenoDesarrolloWeb() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Pixel al Límite",
    "url": "https://pixelallimite.com/servicios/diseno-desarrollo-web",
    "logo": "https://pixelallimite.com/logo.png",
    "description": "Agencia de diseño y desarrollo web para PyMEs. Creamos webs rápidas, optimizadas para SEO y personalizadas.",
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
        }
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
      {/* El resto del código permanece igual */}

      <main className="w-full ">
        <FloatingDesignWebPixels />
        <section className="sr-only">
        {/* H1 principal SEO optimizado con animación de entrada */}
          <h1 className="sr-only">
            Agencia de Diseño web para PyMEs y empresas
          </h1>
        </section>
          
        <Hero
          title={
            <>
            Creamos sitios web que convierten visitas{' '} <span className="animated-gradient-text-greenblue">en ventas.</span>
            </>
          }
          subtitle="En Píxel al Límite creamos páginas web para PyMEs y empresas que quieren crecer"
          primaryButtonText="Quiero una web increible"
          secondaryButtonText="¿Como te podemos ayudar?"
          gradientFrom="#00F0B5"
          gradientTo="transparent"
          hoverGradientFrom="transparent"
          hoverGradientTo="#00F0B5"
          buttonLink="#serviciosdiseñoweb"
        />

          
        <section className="px-6 py-20 md:px-8 lg:px-12 justify-start items-start">
        {/* H1 principal SEO optimizado con animación de entrada */}
          <p className="text-[var(--color-silver)] font-mono z-1 mt-4 text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-left font-normal max-w-5xl">
            Diseño al pixel. Desarrollo al límite
          </p>
          
        </section>


        {/* ¿Por qué lo necesitas ahora? */}
        <section className="relative overflow-hidden px-6 py-20 md:px-8 lg:px-12">
          {/* Círculo azul izquierdo */}
          <div className="absolute left-0 top-1/4 w-30 h-30 sm:w-40 sm:h-40 lg:w-50 lg:h-50 rounded-full bg-[var(--color-mint)] opacity-30 blur-3xl pointer-events-none" />

            {/* Círculo magenta derecho */}
          <div className="absolute right-0 top-1/4 w-30 h-30 sm:w-40 sm:h-40 lg:w-50 lg:h-50 rounded-full bg-[var(--color-silver)] opacity-30 blur-3xl pointer-events-none " />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <h2 className="px-6 md:px-12 lg:px-28 tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6">
            ¿Por qué tu empresa necesita una página web increible y rápida como un tiro?
            </h2>

            <p className="sr-only">
              La respuesta es sencilla: para vender más. Algo que nos dejó claro la pandemia es que, quién no tenga una web a día de hoy, no tiene un negocio sólido en Internet.
              En nuestra agencia sabemos lo importante que es tener una carta de presentación impecable, por eso en nuestra agencia de diseño web para PyMEs diseñamos y desarrollamos páginas que no solo se ven bien, sino que funcionan con un propósito claro: atraer, convencer y vender.
              Creamos webs personalizadas desde cero, pensadas para tu PyME, tus clientes y tus objetivos, por lo que nos enfocamos en experiencias fluidas y profesionales siguiendo, en todo momento, las pautas del diseño UX/UI. También creamos arquitecturas estratégicas para guiar a tus usuarios hacia la acción, y, además, hacemos que tu web sea rápida como un tiro, responsive y totalmente funcional.
              Diseñamos para que tu PyME tenga presencia real y profesional en internet, destacando frente a tu competencia y generando resultados medibles desde el primer día. 
              ¡Di adios a esperar a que cargue tu web!
            </p>

            <AnimatedText
              as="p"
              text="Tu web es tu escaparate, tu vendedor y tu primer impacto. Hoy en día, una página web que no carga rápido, no transmite confianza o no está pensada para el cliente, no vende. Los usuarios juzgan tu marca en 3 segundos, y por eso, si tu página web no enamora, simplemente se van. Y si no se quedan, no compran. Invertir en diseño web ya no es opcional, ¡Es supervivencia digital!"
              className="px-6 font-mono md:px-12 lg:px-28 text-sm sm:text-base lg:text-xl xl:text-2xl 2xl:text-3xl  mb-3 text-[var(--color-silver)]"
            />
          </div>
        </section>
       
        {/* ¿Cómo ayudamos? */}
        <section 
          id="serviciosdiseñoweb"
          className="px-6 py-20 md:px-8 lg:px-12 flex flex-col gap-6">
        
          
          <div className="col-span-1 md:col-span-3">
            <h2 className="sr-only">
              Nuestros servicios de Diseño y Desarrollo web para PyMEs y empresas
            </h2>
            <h2 className="tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6">
              Lo que podemos hacer por tu negocio
            </h2>
            <p className="text-gray-300 font-mono z-1 mb-12 text-sm sm:text-base lg:text-lg  font-normal max-w-5xl">
            En Píxel al Límite sabemos que tu web es ventana al mundo, y no vale cualquiera.
            Por eso no seguimos plantillas ni fórmulas genéricas: creamos desde cero, con estrategia, diseño y código de verdad. Ponemos todo nuestro conocimiento al servicio de tu negocio para ayudarte a destacar, vender más y crecer <strong className="text-italic">sin límites.</strong>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Estrategias para vender",
              desc: "Enfocamos tu web en la conversión y las ventas, además de en lo estético. Nuestro objetivo es claro: convertir a tus visitantes en clientes e incrementar tu facturación",
              icon: Dock
            },
            {
              title: "Te diferenciamos de tu competencia",
              desc: "No solo creamos webs páginas web, sinó también experiencias digitales increibles para diferenciarte de tus competidores y acercar clientes potenciales a tu marca.",
              icon: ShoppingCart
            },
            
            {
              title: "Posicionamiento desde el primer día",
              desc: "Hoy en día no bastá solo con tener una web. Que sea rápida, legible, accesible y que tenga autoridad es fundamental para aparecer en los primeros resultados de busqueda.",
              icon: SearchCode
            },
            {
              title: "Código limpio y escalable",
              desc: "Desarrollamos desde cero sin plantillas, rápido, seguro y optimizado para SEO. Además, creamos código escalable y testeable para que tu web crezca a la vez que lo hace tu empresa.",
              icon: CodeXml
            },
            {
              title: "Desarrollo multiplataforma",
              desc: "Cada empresa es diferente y nosotros lo sabemos, por eso creamos tu web en el CMS, lenguaje o framework que mas se adapte a ti y a las necesidades de tu negocio.",
              icon: CircuitBoard
            },
            {
              title: "Diseño UX/UI y responsividad",
              desc: "Todas nuestras web son 100% funcionales, acesibles, intuitivas y adaptadas a todo tipo de dispositivos y pantallas para hacer una experiencia de usuario óptima e increible.",
              icon: Palette
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
                <h3 className=" text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-white mb-2">{title}</h3>
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
              ¿Por qué elegir Píxel al Límite para crear <span className="animated-gradient-text-greenblue">tu página web?</span>
            </h2>
            <p className="text-gray-300 font-mono z-1 mb-12 text-sm sm:text-base lg:text-lg">
            Porque no hacemos magia, hacemos conversiones. Cada línea de código está pensada para vender. Entregamos resultados medibles ajustados a tu mercado, con desarrollo personalizado, obsesión por el detalle y tecnología de vanguardia.
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
                  <p className="text-sm sm:text-base font-mono text-gray-300 font-medium mb-2">Sabrás en todo momento qué hacemos, por qué lo hacemos y cómo afecta a tus resultados y a tu negocio.</p>
                </div>
                <div className="p-4 border-1 flex flex-col border-white/10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Pixel perfect</h3>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-500 font-medium mb-2">¡Que no se escape ningún detalle!</p>
                  <p className="text-sm sm:text-base font-mono text-gray-300 font-medium mb-2">Diseñamos nuestras webs asegurando una estética impecable, accesible y adaptada a todas las pantallas.</p>
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
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-500 font-medium mb-2">Posicionamos para aumentar el tráfico y las ventas</p>
              <p className="text-sm sm:text-base font-mono text-gray-300 font-medium mb-2">Creamos sitios web que, ademas de ser atractivos y user-friendly, posicionan tu negocio en los primeros resultados de busqueda y aumentan la tasa de ventas por cada visitante.</p>
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
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Ciberseguridad</h3>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-500 font-medium mb-2">Manten tus datos a salvo</p>
              <p className="text-sm sm:text-base font-mono text-gray-300 font-regular mb-2">Hacemos mantenimientos de seguridad y auditorías periodicas para que tu web y tus datos esté siempre a salvo de bots y atacantes</p>
            </div>
            <div className="p-4 border-1 border-white/10">
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Mantenimiento y soporte...</h3>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-500 font-medium mb-2">...Los 365 días del año</p>
              <p className="text-sm sm:text-base font-mono text-gray-300 font-regular mb-2">Ofrecemos mantenimiento mensual para que tu web siempre esté en perfecto estado y damos soporte los 365 días del año para segurar un correcto funcionamiento incluso en caso de ataques</p>
            </div>
            </div>
          </div>
        </section>

        <section 
        className="px-6 py-20 md:px-8 lg:px-12 h-[80vh] justify-center items-center flex flex-col md:flex-row ">
        {/* H1 principal SEO optimizado con animación de entrada */}
          <p className="tracking-tighter max-w-xl text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6">
            Solicita ahora tu presupuesto <span className="animated-gradient-text-greenblue">gratis</span>
          </p>
          
          <PixelButton
            href="#contacto"
            text="¡Quiero presupuesto!"
            ariaLabel="Botón para contactar"
            gradient="linear-gradient(to right, #00F0B5,transparent )"
            hoverGradient="linear-gradient(to right, transparent,#00F0B5)"
          />
          
        </section>
  
        {/* Proceso */}
        <section className="relative px-6 py-20 md:px-8 lg:px-12 gap-12 overflow-hidden flex flex-col lg:flex-row">
          {/* Fondo animado detrás de las tarjetas */}
          <div className="flex flex-col gap-6">
            {/* Título y subtítulo sobre el fondo */}
            <h2 className="sr-only">
              ¿Como es el proceso de diseño y desarrollo web?
            </h2>
            <p className="tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6 relative z-10">
              Nuestro proceso paso a paso
            </p>
            <p className="text-gray-300 font-mono z-10 mb-12 text-sm sm:text-base lg:text-lg font-normal max-w-5xl relative">
            
            En nuestra <strong className="text-italic">agencia de diseño y desarrollo web</strong> ofrecemos un servicio 360º pensado para PyMEs y empresas que quieren crecer online y aumentar sus ventas.<br />
            ¿Y qué significa esto realmente? Significa que cubrimos y te acompañamos en todos los aspectos clave del proceso: desde la elección del software más adecuado y la planificación estratégica,
            hasta el diseño responsive y atractivo, el desarrollo web, la implementación de SEO sólido, y por supuesto, el mantenimiento posterior para asegurar un funcionamiento óptimo.<br /><br />
            </p>
            <p className="sr-only">
            Además, cada proyecto se construye pensando en la velocidad, la escalabilidad y la conversión.<br />
            Por eso unificamos diseño, tecnología y posicionamiento para ofrecerte un servicio completo, coherente y de alta calidad, alineado con los objetivos reales de tu negocio.
            </p>
          </div>

          {/* Tarjetas encima del fondo */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 relative z-10">
            <GlowCard
              title="Evaluación inicial"
              text={`Analizamos tu negocio y tu competencia para establecer una base sólida sobre la que trabajar y ofrecerte lo que necesitas.`}
              icon={<IconNumber1Small className="w-8 h-8" />}
            />
            <GlowCard
              title="Dominio y hosting"
              text={`Escogemos el dominio y alojamos tu web en un servidor de alta calidad para garantizar un rendimiento óptimo.`}
              icon={<IconNumber2Small className="w-8 h-8" />}
            />
            <GlowCard
              title="Diseño y prototipo"
              text={`Creamos un diseño atractivo y enfocado en ventas, que validamos contigo antes de comenzar a desarrollar.`}
              icon={<IconNumber3Small className="w-8 h-8" />}
            />
            <GlowCard
              title="Desarrollo completo"
              text={`Construimos tu web desde cero y lanzamos en varias fases para probar, testear e implementar todo lo necesario.`}
              icon={<IconNumber4Small className="w-8 h-8" />}
            />
            <GlowCard
              title="Optimización SEO"
              text={`Preparamos tu web para los motores de búsqueda, asegurando visibilidad y posicionamiento en multiples navegadores.`}
              icon={<IconNumber5Small className="w-8 h-8" />}
            />
            <GlowCard
              title="Entrega y soporte"
              text={`Lanzamos tu web y te acompañamos con soporte mensual, corrección de errores y mejoras continuas.`}
              icon={<IconNumber6Small className="w-8 h-8" />}
            />
          </div>
        </section>


  
        {/* Costes */}
        <section className="relative px-6 py-20 md:px-8 lg:px-12 gap-12 ">
          <h2 className="sr-only">
            ¿Cuanto cuesta una página web?
          </h2>
          <h2 className="tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6 relative z-10">
            Elige el plan que más se ajusta a tu negocio
          </h2>
          <p className="text-gray-300 font-mono z-10 mb-12 text-sm sm:text-base lg:text-lg font-normal max-w-5xl relative">
            Sabemos que cada proyecto es único. Sin embargo, ofrecemos packs orientativos según el nivel de presencia y posicionamiento que necesite tu PyME. Todos incluyen presupuesto personalizado y soporte profesional.
          </p>
        

          <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            <PricingCard
              title="Básico"
              price="500€"
              priceLabelColor="#A1A1AA"
              unit="/proyecto"
              features={['Landing page + max. 3 páginas', 'Keywords + Estructura semantica', 'Diseño adaptado a todas las pantallas', 'Funcionalidades básicas y optimización de velocidad']}
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

              price="▚"
              
              priceLabelText="Presupuesto personalizado"
              priceLabelColor="#A1A1AA"
              features={['Web completa', 'Tienda online', 'Diseño personalizado y responsive', 'Posicionamiento SEO', 'Funcionalidades avanzadas, pasarela de pago, sistema de reservas...']}
              buttonLabel="Solicitar presupuesto gratis"
              buttonHref="/contacto"
              highlight
              gradientFrom="#A1A1AA"
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
              features={['Web a medida','Diseño UX/UI personalizado', 'SEO avanzado', 'Funcionalidades completamente a medida', 'Consultoría personalizada']}
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


        
  
        {/* Proyectos previos 
        <section className="px-6 py-20 md:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Proyectos anteriores y ejemplos visuales
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="aspect-video bg-gray-800 rounded-xl"></div>
            <div className="aspect-video bg-gray-800 rounded-xl"></div>
          </div>
        </section>
        */}
  
        {/* FAQs */}
        {/*
        <section className="px-6 py-20 md:px-8 lg:px-12 gap-10">
          <h2 className="tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-6">
            Preguntas frecuentes
          </h2>
          <div>
            <details className="border-b border-white/20 p-6">
              <summary className="text-white font-semibold cursor-pointer">¿Cuánto tardaría en tener mi web?</summary>
              <p className="text-gray-400 mt-4">El tiempo de desarrollo dependerá de la complejidad del proyecto</p>
            </details>
            <details className="border-b border-white/20 p-6">
              <summary className="text-white font-semibold cursor-pointer">¿Puedo pagarlo en fases o plazos?</summary>
              <p className="text-gray-400 mt-4">Sí, ofrecemos planes flexibles para adaptarnos a ti.</p>
            </details>
          </div>
        </section>
        */}
  
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
            gradient="linear-gradient(to right, #00F0B5,transparent )"
            hoverGradient="linear-gradient(to right, transparent,#00F0B5)"
          />
        </section>
      </main>
    </>
  );
}
  