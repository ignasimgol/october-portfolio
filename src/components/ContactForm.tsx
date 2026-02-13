export default function ContactForm() {
  return (
    <div className="max-w-4xl mx-auto py-10 grid md:grid-cols-2 gap-8 items-start">
      {/* Image Column */}
      <div className="flex justify-center md:justify-start">
        <div className="rounded-2xl bg-[#FFDE59] p-2 shadow-sm">
          <img
            src="/maria.jpg"
            alt="Maria del Rio"
            className="h-64 w-64 md:h-80 md:w-80 object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Form Column */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-left">Contacto</h2>
        <form
          action="https://formsubmit.co/bymariadelrio@gmail.com"
          method="POST"
          className="space-y-4 text-left"
        >
          {/* Configuration for FormSubmit */}
          <input type="hidden" name="_subject" value="New message from Portfolio" />
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://www.bymariadelrio.com/?success=true" />
          
          {/* Fields */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">👋🏻 ¿Quien eres? De qué trata tu proyecto?</label>
            <textarea
              name="message"
              id="message"
              required
              rows={3}
              className="w-full px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:border-black transition-colors resize-none"
            />
          </div>

          <div>
            <label htmlFor="needs" className="block text-sm font-medium mb-1">✏️ ¿Qué necesitas?</label>
            <textarea
              name="needs"
              id="needs"
              required
              rows={3}
              className="w-full px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:border-black transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded font-medium hover:opacity-80 transition-opacity mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}