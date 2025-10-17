import { useState } from 'react'
import './App.css'

function App() {
  type Tab = 'all' | 'personal' | 'ads' | 'about' | 'interviews'
  const [activeTab, setActiveTab] = useState<Tab>('all')
  // Notificación (toast)
  const [toast, setToast] = useState<string | null>(null)

  const handleCopyEmail = async () => {
    const email = 'bymariadelrio@gmail.com'
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email)
      } else {
        const ta = document.createElement('textarea')
        ta.value = email
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setToast('Email Copied')
      setTimeout(() => setToast(null), 2000)
    } catch {
      setToast('Email Copied')
      setTimeout(() => setToast(null), 2000)
    }
  }

  type Video = {
    id: string
    title: string
    src: string
    category: 'personal' | 'ads' | 'interviews'
  }

  const videos: Video[] = [
    { id: 'a1', title: 'Offline + Online editor. ROVE HOME - Dubai Marina', src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZEMjtROZglonH4wkj7WTqzFi8bDdG3tp2vVUc', category: 'ads' },
    { id: 'a2', title: 'Offline editor. Banco Santander', src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Z2mwbsNRcZ30ow7GD2ILksnTq96u5dyfpz4Xg', category: 'ads' },
    { id: 'a3', title: 'Offline editor. Securitas Direct', src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZV9Mmr8CuhYn70AJ2DZlT953KORFC6mikWe8o', category: 'ads' },
    { id: 'a4', title: 'Offline editor. Mahou', src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Z7k5V3cyipkDrQuhS0qbYLnPlG2tOAxcmEdH6', category: 'ads' },
    { id: 'a5', title: 'Offline Editor. UAE Union Day', src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Z1AqWbojPZc3mDwh6s4XzBMUYLg2Aix58oFt0', category: 'ads' },
    { id: 'a6', title: 'UPS Spec Ad. Directed and Edited by Maria del Rio', src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZqfOZqkPb8f3zC7VlOi9SNTXEDsk5IvRGB40M', category: 'ads' },
    { id: 'i1', title: 'Offline + Online editor. MiZa Tenants - Ripple', src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZbfonAiahc9oyKGWHFpJwSjug7ECl2OkV0sdX', category: 'interviews' },
    { id: 'i2', title: 'Offline + Online editor. MiZa Tenants - Wai Wiz', src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZrJyJVgiSzmJlgELyvNHfAPoKwc73r54QnqB1', category: 'interviews' },
  ]

  const filtered =
    activeTab === 'all'
      ? videos
      : activeTab === 'personal'
      ? videos.filter((v) => v.category === 'personal')
      : activeTab === 'ads'
      ? videos.filter((v) => v.category === 'ads')
      : activeTab === 'interviews'
      ? videos.filter((v) => v.category === 'interviews')
      : []

  return (
    <div className="min-h-screen bg-white text-black">
      {toast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-black text-white max-w-md w-11/12 rounded-md shadow-lg px-5 py-4">
            <p className="text-base md:text-lg font-semibold text-center">
              {toast}
            </p>
          </div>
        </div>
      )}
      <header className="px-6 md:px-10 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-sm md:text-lg font-semibold">Maria del Rio</h1>
          <div className="flex items-center gap-3 text-xs md:text-sm">
            <a
              href="https://www.instagram.com/bymariadelrio"
              className="text-black hover:opacity-70"
              aria-label="Instagram"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/insta.svg" alt="Instagram" className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/maria-del-rio-/"
              className="text-black hover:opacity-70"
              aria-label="LinkedIn"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="h-7 w-7" />
            </a>
            <button
              className="border border-black px-3 py-1 rounded hover:bg-black hover:text-white transition"
              onClick={handleCopyEmail}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="mt-6 md:mt-8 text-left">
          <p className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight">
            Passionate about challenging opportunities to create a new
          </p>
          <p className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight">
            postproduction
          </p>
        </div>

        <nav className="mt-6 flex gap-1 md:gap-2 text-xs md:text-sm">
          {(['all', 'personal', 'ads', 'interviews', 'about'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 py-0.5 md:px-3 md:py-1 border rounded-[5px] transition-colors ${
                activeTab === tab
                  ? 'bg-black text-white border-black'
                  : 'bg-transparent border-neutral-300 text-neutral-600 hover:border-black hover:text-black'
              }`}
            >
              {tab === 'all' ? 'All' : tab[0].toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      <main className="px-6 md:px-10 pb-20">
        {activeTab === 'about' ? (
          <section className="max-w-3xl text-base leading-relaxed text-left">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p>
              Add your bio, capabilities, and contact details here. Replace this copy with your own content.
            </p>
          </section>
        ) : (
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((v) => (
              <div key={v.id} className="flex flex-col">
                <figure className="relative overflow-hidden rounded-md bg-neutral-100 aspect-[4/3]">
                  <video
                    src={v.src}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                </figure>
                <div className="mt-2 text-xs text-black">
                  {v.title}
                </div>
              </div>
            ))}
          </section>
        )}
      </main>
      <footer className="border-t border-neutral-200 px-6 md:px-10 py-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm">
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/bymariadelrio"
              className="text-black hover:opacity-70"
              aria-label="Instagram"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/insta.svg" alt="Instagram" className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/maria-del-rio-/"
              className="text-black hover:opacity-70"
              aria-label="LinkedIn"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
            </a>
          </div>
          <div className="flex items-end gap-3 flex-col">
            <span className="font-semibold">Maria del Rio. All rights reseved. 2025.</span>
            <button
              onClick={handleCopyEmail}
              className="underline hover:opacity-70"
              aria-label="Copy email to clipboard"
            >
              bymariadelrio@gmail.com
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
