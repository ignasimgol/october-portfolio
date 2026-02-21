import { useEffect } from 'react'

export default function ContactForm() {
  useEffect(() => {
    const d = document
    const w = 'https://tally.so/widgets/embed.js'
    const v = () => {
      const anyWindow = window as typeof window & { Tally?: { loadEmbeds: () => void } }
      if (anyWindow.Tally) {
        anyWindow.Tally.loadEmbeds()
      } else {
        d
          .querySelectorAll<HTMLIFrameElement>('iframe[data-tally-src]:not([src])')
          .forEach((el) => {
            if (!el.src) {
              el.src = el.dataset.tallySrc || ''
            }
          })
      }
    }

    const anyWindow = window as typeof window & { Tally?: { loadEmbeds: () => void } }
    if (anyWindow.Tally) v()
    else if (!d.querySelector(`script[src="${w}"]`)) {
      const s = d.createElement('script')
      s.src = w
      s.onload = v
      s.onerror = v
      d.body.appendChild(s)
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto py-10 grid md:grid-cols-2 gap-8 items-start">
      {/* Image Column */}
      <div className="flex justify-center md:justify-start">
        <div className="rounded-2xl bg-[#FFDE59] p-2 shadow-sm">
          <img
            src="https://ik.imagekit.io/dhlq5fcy7w/profile/contactme%20(1).jpg"
            alt="Maria del Rio"
            className="w-64 md:w-80 h-auto object-contain rounded-xl"
          />
        </div>
      </div>

      {/* Form Column */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-left">Contacto</h2>
        <div className="space-y-4 text-left">
          <iframe
            data-tally-src="https://tally.so/embed/WON2qe?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="612"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact Me"
          />
        </div>
      </div>
    </div>
  )
}