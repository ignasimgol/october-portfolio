import { useEffect, useState } from 'react'
import LogosWhatsappIcon from './LogosWhatsappIcon'
import SelfhstGmail from './SelfhstGmail'

export default function ContactForm() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    const email = 'bymariadelrio@gmail.com'
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch (e) {
      const el = document.createElement('textarea')
      el.value = email
      document.body.appendChild(el)
      el.select()
      try {
        document.execCommand('copy')
        setCopied(true)
      } finally {
        document.body.removeChild(el)
      }
    }
  }

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 3000)
    return () => clearTimeout(t)
  }, [copied])

  return (
    <div className="max-w-4xl mx-auto py-10 grid md:grid-cols-2 gap-8 items-start relative">
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

      {/* Contact Column */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-left">Contacto</h2>
        <div className="space-y-4 text-left">
          <p className="text-base">¿Trabajamos juntos?</p>
          <p className="text-base">Puedes escribirme por WhatsApp o por correo electónico:</p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
            <a
              href="https://wa.me/34669473325"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-[#25D366] text-white rounded-lg shadow-sm hover:text-[#013C88] hover:scale-105 transition-all duration-300"
              aria-label="Open WhatsApp chat"
            >
              <LogosWhatsappIcon className="w-5 h-5 text-white" aria-hidden />
              <span className="ml-2">WhatsApp</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center px-4 py-2 bg-transparent border border-gray-300 rounded-lg hover:text-[#013C88] hover:scale-105 transition-all duration-300"
              aria-label="Copy email to clipboard"
            >
              <SelfhstGmail className="w-5 h-5" aria-hidden />
              <span className="ml-2">bymariadelrio@gmail.com</span>
            </button>
          </div>
        </div>
      </div>

      {copied && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-black bg-opacity-80 text-white px-6 py-3 rounded-xl text-center">
            Email copiado
          </div>
        </div>
      )}
    </div>
  )
}