import { useState } from 'react'

type Lang = 'ca' | 'es' | 'en'

const copy: Record<Lang, { title: string; paragraphs: string[] }> = {
  en: {
    title: 'Hi there!',
    paragraphs: [
      'I’m Maria del Río, a video editor, photographer and filmmaker. I’ve worked in Madrid (Serena), Abu Dhabi (She Films), and Dubai (Ninja Media Productions), editing high-end campaigns, corporate videos, and commercials for brands such as Banco Santander, Alsa, Securitas Direct, and Etihad Airways.',
    ],
  },
  es: {
    title: '¡Hola!',
    paragraphs: [
      'Soy María del Río, editora de video, fotógrafa y filmmaker. He trabajado en Madrid (Serena), Abu Dhabi (She Films) y Dubái (Ninja Media Productions), editando campañas, videos corporativos y comerciales de alto nivel para marcas como Banco Santander, Alsa, Securitas Direct y Etihad Airways.',
    ],
  },
  ca: {
    title: 'Hola!',
    paragraphs: [
      'Sóc la Maria del Rio, editora de vídeo, fotògrafa i filmmaker. He treballat a Madrid (Serena), Abu Dhabi (She Films) i Dubai (Ninja Media Productions), editant campanyes, vídeos corporatius i anuncis d’alt nivell per a marques com Banco Santander, Alsa, Securitas Direct i Etihad Airways.',
    ],
  },
}

export default function About() {
  const [lang, setLang] = useState<Lang>('en')
  const active = copy[lang]

  return (
    <section className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-4 items-left">
      <div className="flex justify-center md:justify-start">
        <div className="rounded-2xl bg-[#FFDE59] p-2 shadow-sm">
          <img
            src="/maria.jpg"
            alt="Maria del Rio"
            className="h-64 w-64 md:h-80 md:w-80 object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="md:col-span-2">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-left">{active.title}</h2>
        <div className="space-y-3">
          {active.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-black text-base md:text-m leading-7 max-w-xl text-left"
            >
              {p}
            </p>
          ))}
        </div>

        <nav className="mt-4 flex gap-2 text-xs md:text-xs">
          {[
            { id: 'ca', label: 'Català' },
            { id: 'es', label: 'Castellano' },
            { id: 'en', label: 'English' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setLang(t.id as Lang)}
              className={`px-3 py-1 border rounded-[5px] transition-colors ${
                lang === t.id
                  ? 'bg-black text-white border-black'
                  : 'bg-transparent border-neutral-300 text-neutral-600 hover:border-black hover:text-black'
              }`}
              aria-pressed={lang === t.id}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </div>
    </section>
  )
}