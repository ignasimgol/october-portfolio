import { useState } from 'react'

type Lang = 'ca' | 'es' | 'en'

type AboutProps = {
  onContactClick?: () => void
  onContactHoverChange?: (hovered: boolean) => void
}

const copy: Record<Lang, { title: string; paragraphs: string[] }> = {
  en: {
    title: 'Hi there!',
    paragraphs: [
      'I’m María del Río. I grew up with cinema always present, and with a camera never far away.',
      'Video editor, photographer and filmmaker ✂️ 📷 🎥',
      'I have worked with production companies such as Serena (Madrid) and She Films (Abu Dhabi), taking part in advertising and cultural campaigns, as well as projects for brands like Banco Santander, Alsa and Securitas Direct, and collaborating on productions in Dubai.',
      '🌍 My international experience has allowed me to work in multicultural environments and adapt to different ways of producing.',
      '📍 Currently freelancing in Barcelona. Available for projects and collaborations.',
    ],
  },
  es: {
    title: '¡Hola!',
    paragraphs: [
      'Soy María del Río. Crecí con el cine muy presente y con una cámara siempre cerca.',
      'Editora de vídeo, fotógrafa y filmmaker ✂️ 📷 🎥',
      'He trabajado en productoras como Serena (Madrid) y She Films (Abu Dhabi), participando en campañas publicitarias y culturales, así como en proyectos para marcas como Banco Santander, Alsa y Securitas Direct, además de colaborar en producciones en Dubái.',
      '🌍 La experiencia internacional me ha permitido trabajar en entornos multiculturales y adaptarme a distintas formas de producir.',
      '📍 Actualmente freelance en Barcelona. Disponible para proyectos y colaboraciones.',
    ],
  },
  ca: {
    title: 'Hola!',
    paragraphs: [
      'Sóc la María del Río. Vaig créixer amb el cinema molt present i amb una càmera sempre a prop.',
      'Editora de vídeo, fotògrafa i filmmaker ✂️ 📷 🎥',
      'He treballat en productores com Serena (Madrid) i She Films (Abu Dhabi), participant en campanyes publicitàries i culturals, així com en projectes per a marques com Banco Santander, Alsa i Securitas Direct, a més de col·laborar en produccions a Dubai.',
      '🌍 L’experiència internacional m’ha permès treballar en entorns multiculturals i adaptar-me a diferents maneres de produir.',
      '📍 Actualment freelance a Barcelona. Disponible per a projectes i col·laboracions.',
    ],
  },
}

export default function About({ onContactClick, onContactHoverChange }: AboutProps) {
  const [lang, setLang] = useState<Lang>('en')
  const active = copy[lang]

  return (
    <section className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-4 items-left">
      <div className="flex justify-center md:justify-start">
        <div className="inline-block overflow-hidden">
          <img
            src="/maria.jpg"
            alt="Maria del Rio"
            className="block w-64 md:w-80 h-auto border-[#FFDE59] border-8 rounded-2xl"
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

        <div className="mt-4 flex flex-wrap items-center gap-2 md:gap-3">
          <nav className="flex gap-2 text-xs md:text-xs">
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
                    ? 'bg-[#FFDE59] text-black border-[#FFDE59]'
                    : 'bg-transparent border-neutral-300 text-neutral-600 hover:border-black hover:text-black'
                }`}
                aria-pressed={lang === t.id}
              >
                {t.label}
              </button>
            ))}
          </nav>
          <button
            className="cta-button border border-black px-3 py-1 rounded hover:bg-black hover:text-white transition text-xs md:text-xs ml-3 md:ml-4"
            onClick={() => {
              onContactHoverChange?.(false)
              onContactClick?.()
            }}
            onMouseEnter={() => onContactHoverChange?.(true)}
            onMouseLeave={() => onContactHoverChange?.(false)}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}