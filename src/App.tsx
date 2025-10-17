import { useState } from 'react'
import './App.css'

function App() {
  type Tab = 'all' | 'personal' | 'ads' | 'about'
  const [activeTab, setActiveTab] = useState<Tab>('all')

  type Video = {
    id: string
    title: string
    src: string
    category: 'personal' | 'ads'
  }

  const videos: Video[] = [
    { id: 'p1', title: 'Offline + Online editor. ROVE HOME - Dubai Marina', src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZEMjtROZglonH4wkj7WTqzFi8bDdG3tp2vVUc', category: 'ads' },
    { id: 'p2', title: 'Offline editor. Etihad Airways - Cadet Pilot Program', src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Zrhw7mtiSzmJlgELyvNHfAPoKwc73r54QnqB1', category: 'ads' },
    { id: 'a1', title: 'Offline + Online editor. MiZa Tenants - Ripple', src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZbfonAiahc9oyKGWHFpJwSjug7ECl2OkV0sdX', category: 'ads' },
    { id: 'a2', title: 'Offline + Online editor. MiZa Tenants - Wai Wiz', src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZrJyJVgiSzmJlgELyvNHfAPoKwc73r54QnqB1', category: 'ads' },
    { id: 'a3', title: 'Offline Editor. UAE Union Day', src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Z1AqWbojPZc3mDwh6s4XzBMUYLg2Aix58oFt0', category: 'ads' },
    { id: 'a4', title: 'UPS Spec Ad. Directed and Edited by Maria del Rio', src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZqfOZqkPb8f3zC7VlOi9SNTXEDsk5IvRGB40M', category: 'ads' },
  ]

  const filtered =
    activeTab === 'all'
      ? videos
      : activeTab === 'personal'
      ? videos.filter((v) => v.category === 'personal')
      : activeTab === 'ads'
      ? videos.filter((v) => v.category === 'ads')
      : []

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="px-6 md:px-10 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Maria del Rio</h1>
          <div className="flex items-center gap-4 text-sm">
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
            <button className="border border-black px-3 py-1 rounded hover:bg-black hover:text-white transition">
              Contact Me
            </button>
          </div>
        </div>

        <div className="mt-8 text-left">
          <p className="text-3xl md:text-4xl font-bold leading-tight">
            Passionate about challenging opportunities to create a new
          </p>
          <p className="text-3xl md:text-4xl font-bold leading-tight">
            postproduction
          </p>
        </div>

        <nav className="mt-6 flex gap-4 text-sm">
          {(['all', 'personal', 'ads', 'about'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 border-b-2 transition ${
                activeTab === tab
                  ? 'border-black'
                  : 'border-transparent text-neutral-500 hover:text-black'
              }`}
            >
              {tab === 'all' ? 'Show all' : tab[0].toUpperCase() + tab.slice(1)}
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
    </div>
  )
}

export default App
