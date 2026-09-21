import { useState } from 'react'
import VideoTile from './VideoTile'

export default function VideoEditing() {
  const [copied, setCopied] = useState(false)
  const email = "bymariadelrio@gmail.com"

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Lista de proyectos utilizando los vídeos de Cloudinary
  const projects = [
    {
      id: 1,
      videoUrl: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985893/1-reels.mp4',
      cover: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985893/1-reels.jpg'
    },
    {
      id: 2,
      videoUrl: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985900/2-reels.mp4',
      cover: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985900/2-reels.jpg'
    },
    {
      id: 3,
      videoUrl: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985903/3-reels.mp4',
      cover: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985903/3-reels.jpg'
    },
    {
      id: 4,
      videoUrl: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985894/4-reels.mp4',
      cover: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985894/4-reels.jpg'
    },
    {
      id: 5,
      videoUrl: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985895/5-reels.mp4',
      cover: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985895/5-reels.jpg'
    },
    {
      id: 6,
      videoUrl: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985909/6-reels.mp4',
      cover: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985909/6-reels.jpg'
    },
    {
      id: 7,
      videoUrl: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985896/7-reels.mp4',
      cover: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985896/7-reels.jpg'
    },
    {
      id: 8,
      videoUrl: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985897/8-reels.mp4',
      cover: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985897/8-reels.jpg'
    },
    {
      id: 9,
      videoUrl: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985900/9-reels.mp4',
      cover: 'https://res.cloudinary.com/dwu8zidoo/video/upload/v1789985900/9-reels.jpg'
    }
  ]

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white text-black font-sans min-h-screen relative">
      {/* NAVEGACIÓN SUPERIOR */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center border-b border-black/10">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-wider text-sm text-black">Maria del Río - Video Editor</span>
        </div>
        <a 
          href="https://wa.me/34669473325?" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-black hover:bg-neutral-800 text-white font-semibold text-xs uppercase px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Contactar
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        {/* Banner Status */}
        <div className="inline-flex items-center gap-2 bg-neutral-100 border border-black/10 rounded-full px-4 py-1.5 text-xs text-neutral-700 mb-8">
          Disponible para proyectos freelance y agencias
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.15] mb-8 text-black">
          Convierte tu material bruto <br className="hidden sm:inline" />
          <span className="inline-flex items-center gap-2 align-middle mx-2">
            <span className="bg-neutral-100 text-black px-3 py-1 rounded-xl text-2xl md:text-4xl border border-black/10">🎬</span>
          </span>
          en vídeos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-neutral-800 to-neutral-600">alto impacto</span>
        </h1>

        <p className="max-w-2xl mx-auto text-neutral-600 text-lg md:text-xl font-light mb-10 leading-relaxed">
          Edición de vídeo de alto impacto, color grading y ritmo dinámico diseñado para marcas, agencias y creadores que buscan destacar.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/34669473325?" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-black hover:bg-neutral-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-black/10 text-center"
          >
            Pedir Presupuesto por WhatsApp
          </a>
          <a 
            href="#work"
            className="w-full sm:w-auto bg-white hover:bg-neutral-50 text-black font-medium px-8 py-4 rounded-full border border-black/15 transition-all duration-300 text-center"
          >
            Ver Trabajos
          </a>
        </div>
      </section>

      {/* MÉTRICAS / IMPACTO */}
      <section className="border-y border-black/10 bg-neutral-50 py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-black mb-1">+100</p>
            <p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Vídeos Editados</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-black mb-1">24-48h</p>
            <p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Primer Borrador</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-black mb-1">4K / 9:16</p>
            <p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Formatos Optimizados</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-black mb-1">100%</p>
            <p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Clientes Satisfechos</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN SOBRE MÍ / PROPUESTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold text-neutral-500 tracking-widest uppercase mb-2 block">
              Sobre el servicio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-black">
              Edición enfocada en retener la atención y transmitir emoción
            </h2>
            <p className="text-neutral-600 mb-4 leading-relaxed">
              No se trata solo de cortar clips. Cada corte, transición y ajuste de color está pensado para mantener al espectador enganchado desde el primer segundo.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Trabajo con flujos eficientes para garantizar entregas rápidas sin comprometer la calidad estética ni narrativa.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="group bg-white border border-black/10 p-6 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-black/30 cursor-default">
              <h3 className="text-lg font-bold text-black mb-2 flex items-center gap-2">
                <span className="inline-block transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">⚡</span> 
                Edición Dinámica & Social Media
              </h3>
              <p className="text-sm text-neutral-600">Reels, TikToks y YouTube Shorts con subtítulos animados, efectos de sonido y ritmo acelerado.</p>
            </div>

            <div className="group bg-white border border-black/10 p-6 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-black/30 cursor-default">
              <h3 className="text-lg font-bold text-black mb-2 flex items-center gap-2">
                <span className="inline-block transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12">🎨</span> 
                Color Grading & Estética
              </h3>
              <p className="text-sm text-neutral-600">Corrección de color profesional para darle un aspecto de cine o estilo de marca homogéneo.</p>
            </div>

            <div className="group bg-white border border-black/10 p-6 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-black/30 cursor-default">
              <h3 className="text-lg font-bold text-black mb-2 flex items-center gap-2">
                <span className="inline-block transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">💼</span> 
                Vídeo Corporativo e Interno
              </h3>
              <p className="text-sm text-neutral-600">Píldoras formativas, eventos, testimoniales y onboarding institucional con acabado limpio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA DE TRABAJOS (REELS VERTICALES SIN FILTROS NI TÍTULOS) */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-20 border-t border-black/10">
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-bold text-neutral-500 tracking-widest uppercase mb-2 block">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Trabajos Destacados</h2>
        </div>

        {/* Grid de vídeos con el mismo reproductor que App.tsx */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-black/10 shadow-sm transition-all hover:border-black/30 hover:shadow-md"
            >
              <VideoTile
                src={project.videoUrl}
                title={`Reel ${project.id}`}
                cover={project.cover}
                aspect="aspect-[9/16]"
                className="!rounded-none"
              />
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO DE TRABAJO */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-black/10">
        <span className="text-xs font-bold text-neutral-500 tracking-widest uppercase mb-2 block text-center">
          Metodología
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-black">¿Cómo trabajamos?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white border border-black/10 p-8 rounded-2xl relative shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-black/30 cursor-default">
            <div className="w-8 h-1 bg-neutral-200 rounded-full mb-6 transition-all duration-300 group-hover:w-16 group-hover:bg-black" />
            <span className="text-5xl font-black text-black/10 absolute top-6 right-6 transition-colors duration-300 group-hover:text-black/25">
              01
            </span>
            <h3 className="text-xl font-bold mb-3 text-black">Briefing & Material</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Subes tu bruto a Drive/WeTransfer y me compartes el objetivo, referencias y formato deseado.
            </p>
          </div>

          <div className="group bg-white border border-black/10 p-8 rounded-2xl relative shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-black/30 cursor-default">
            <div className="w-8 h-1 bg-neutral-200 rounded-full mb-6 transition-all duration-300 group-hover:w-16 group-hover:bg-black" />
            <span className="text-5xl font-black text-black/10 absolute top-6 right-6 transition-colors duration-300 group-hover:text-black/25">
              02
            </span>
            <h3 className="text-xl font-bold mb-3 text-black">Edición & V1</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Monto la narrativa, aplico ritmo, diseño de sonido y ajuste de color. Recibes la primera versión para revisión.
            </p>
          </div>

          <div className="group bg-white border border-black/10 p-8 rounded-2xl relative shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-black/30 cursor-default">
            <div className="w-8 h-1 bg-neutral-200 rounded-full mb-6 transition-all duration-300 group-hover:w-16 group-hover:bg-black" />
            <span className="text-5xl font-black text-black/10 absolute top-6 right-6 transition-colors duration-300 group-hover:text-black/25">
              03
            </span>
            <h3 className="text-xl font-bold mb-3 text-black">Ajustes & Entrega</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Aplicamos tus comentarios y te entrego los archivos finales exportados en máxima calidad listos para publicar.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="border-t border-black/10 py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-black">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-neutral-600 mb-8">
            Hablemos sobre tu idea y preparemos una propuesta a medida.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4">
            <a 
              href="https://wa.me/34669473325?"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-neutral-800 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-xl shadow-black/10"
            >
              Escríbeme por WhatsApp
            </a>

            <div className="text-neutral-600 text-sm md:text-base">
              <span>o mándame un email a </span>
              <button
                onClick={handleCopyEmail}
                className="text-black font-semibold underline underline-offset-4 hover:text-neutral-600 transition-colors cursor-pointer"
              >
                {email}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* NOTIFICACIÓN FLOTANTE */}
      {copied && (
        <div className="fixed bottom-6 right-6 bg-black text-white px-5 py-3 rounded-full text-sm font-medium shadow-2xl transition-all duration-300 z-50">
          ¡Email copiado al portapapeles!
        </div>
      )}
    </div>
  )
}