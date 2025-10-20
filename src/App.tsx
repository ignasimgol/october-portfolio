import { useState, useRef, useEffect } from 'react'
import './App.css'
import Pics from './components/Pics'
import About from './components/About'

function App() {
  type Tab =  'personal' | 'commercials' | 'about' | 'photo'
  const [activeTab, setActiveTab] = useState<Tab>('commercials')
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
    category: 'personal' | 'commercials' | 'photo'
    cover: string
  }

  const videos: Video[] = [
    {
      id: 'a2',
      title: 'Inclusión - Banco Santander',
      src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Z2mwbsNRcZ30ow7GD2ILksnTq96u5dyfpz4Xg',
      category: 'commercials',
      cover: new URL('./assets/covers/santander.jpg', import.meta.url).href
    },
    {
      id: 'a3',
      title: 'Securitas Direct con cerradura inteligente - Securitas Direct',
      src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZV9Mmr8CuhYn70AJ2DZlT953KORFC6mikWe8o',
      category: 'commercials',
      cover: new URL('./assets/covers/securitas.jpg', import.meta.url).href
    },
    {
      id: 'a8',
      title: 'Cadet Pilot Program - Etihad Airways',
      src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Zrhw7mtiSzmJlgELyvNHfAPoKwc73r54QnqB1',
      category: 'commercials',
      cover: new URL('./assets/covers/airlines.jpg', import.meta.url).href
    },
     {
      id: 'a1',
      title: 'Rove Home - Dubai Marina',
      src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZEMjtROZglonH4wkj7WTqzFi8bDdG3tp2vVUc',
      category: 'commercials',
      cover: new URL('./assets/covers/rove.jpg', import.meta.url).href
    },
    {
      id: 'a5',
      title: 'UAE Union Day - The Crown Prince Court',
      src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Z1AqWbojPZc3mDwh6s4XzBMUYLg2Aix58oFt0',
      category: 'commercials',
      cover: new URL('./assets/covers/union.jpg', import.meta.url).href
    },
    {
      id: 'a6',
      title: 'Santander Bienestando -Banco Santander',
      src: 'https://www.youtube.com/watch?v=zGRJN3-KhSI',
      category: 'commercials',
      cover: new URL('./assets/covers/youtube.jpg', import.meta.url).href
    },
    {
      id: 'a7',
      title: 'MiZa Tenants: Ripple - MiZa Abu Dhabi',
      src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZbfonAiahc9oyKGWHFpJwSjug7ECl2OkV0sdX',
      category: 'commercials',
      cover: new URL('./assets/covers/ripple.jpg', import.meta.url).href
    },
     {
      id: 'p4',
      title: 'Els carrers i el Barça',
      src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZrxRrmRiSzmJlgELyvNHfAPoKwc73r54QnqB1',
      category: 'personal',
      cover: new URL('./assets/covers/barca.jpg', import.meta.url).href
    },
    {
      id: 'p1',
      title: 'UPS Spec Ad. Directed and Edited by Maria del Rio',
      src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZqfOZqkPb8f3zC7VlOi9SNTXEDsk5IvRGB40M',
      category: 'personal',
      cover: new URL('./assets/covers/ups.jpg', import.meta.url).href
    },
    {
      id: 'p3',
      title: 'Centelles',
      src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZcO6xZApIVJPvr8hDmW1HetyGF2bz7iaYLEsf',
      category: 'personal',
      cover: new URL('./assets/covers/centelles.jpg', import.meta.url).href
    },
    {
      id: 'p2',
      title: 'Abu Dhabi Streets',
      src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZIpAPSN9ifLgd8hMTA76owI0mJxEtuOpnrlD1',
      category: 'personal',
      cover: new URL('./assets/covers/personal1.jpg', import.meta.url).href
    },

  ]

  const filtered =
    activeTab === 'about'
      ? []
      : videos.filter((v) => v.category === activeTab)

  const heroGif = new URL('./assets/rove.gif', import.meta.url).href

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
          <h1 className="text-sm md:text-lg font-semibold">Maria del Río</h1>
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

        <div className="mt-6 md:mt-8">
          <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-md overflow-hidden">
            <img
              src={heroGif}
              alt="hero animation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="w-full max-w-3xl px-4 py-3 sm:px-6 sm:py-4 rounded">
                <p className="whitespace-nowrap text-center text-white text-xl sm:text-2xl md:text-4xl font-bold leading-tight">
                  Ready to create something new?
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav className="mt-6 grid grid-cols-3 gap-1 md:flex md:flex-nowrap md:gap-2 text-xs md:text-sm">
          {(['commercials', 'personal', 'photo', 'about'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full md:w-auto text-center px-2 py-0.5 md:px-3 md:py-1 border rounded-[5px] transition-colors ${
                activeTab === tab
                  ? 'bg-black text-white border-black'
                  : 'bg-transparent border-neutral-300 text-neutral-600 hover:border-black hover:text-black'
              }`}
            >
              {tab[0].toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      <main className="px-6 md:px-10 pb-20">
        {activeTab === 'about' ? (
          <About />
        ) : activeTab === 'photo' ? (
          <Pics />
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((v) => (
              <div key={v.id} className="flex flex-col">
                <VideoTile src={v.src} title={v.title} cover={v.cover} />
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
            <span className="font-semibold">Maria del Río. All rights reseved. 2025.</span>
            <button
              onClick={handleCopyEmail}
              className="underline hover:opacity-70"
              aria-label="Copy email to clipboard"
            >
              bymariadelrio@gmail.com
            </button>
            <span>Barcelona</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function VideoTile({ src, title, cover }: { src: string; title: string; cover?: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [, setIsPlaying] = useState(false) // eslint-disable-line @typescript-eslint/no-unused-vars
  const coverPoster = new URL('./assets/covers/bg.jpeg', import.meta.url).href
  const [open, setOpen] = useState(false)
  const [muted, setMuted] = useState(false) // start with sound ON
  const tileCover = cover ?? coverPoster

  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be')
  const buildYouTubeEmbed = (url: string, mute: boolean) => {
    try {
      const u = new URL(url)
      let id = ''
      if (u.hostname.includes('youtu.be')) {
        id = u.pathname.split('/').filter(Boolean).pop() || ''
      } else {
        id = u.searchParams.get('v') || ''
      }
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=${mute ? 1 : 0}&rel=0&playsinline=1`
    } catch {
      return url
    }
  }
  const embedUrl = isYouTube ? buildYouTubeEmbed(src, muted) : null

  useEffect(() => {
    if (!open || isYouTube) return
    const el = videoRef.current
    if (!el) return
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onEnded = () => setIsPlaying(false)
    el.addEventListener('play', onPlay)
    el.addEventListener('pause', onPause)
    el.addEventListener('ended', onEnded)
    return () => {
      el.removeEventListener('play', onPlay)
      el.removeEventListener('pause', onPause)
      el.removeEventListener('ended', onEnded)
    }
  }, [open, isYouTube])

  useEffect(() => {
    if (!open || isYouTube) return
    const v = videoRef.current
    if (!v) return
    v.muted = muted
    const attemptPlay = () => {
      const p = v.play()
      if (p && typeof p.catch === 'function') {
        p.catch(() => {
          // Autoplay with sound may be blocked by the browser; user can press play.
        })
      }
    }
    setTimeout(attemptPlay, 0)
  }, [open, muted, isYouTube])

  return (
    <>
      {/* Tile cover */}
      <figure className="group relative overflow-hidden rounded-md bg-neutral-100 aspect-[4/3]">
        <img
          src={tileCover}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover cursor-pointer"
          onClick={() => setOpen(true)}
        />
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="absolute inset-0 flex items-center justify-center"
          aria-label={`Open ${title}`}
        >
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-black/70 text-white text-xl transition-opacity opacity-0 group-hover:opacity-100">
            ▶
          </span>
        </button>
      </figure>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-0 sm:p-4"
          onClick={() => setOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-screen h-[85vh] sm:w-[65vw] sm:h-[75vh] bg-black rounded-none sm:rounded-lg overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {isYouTube ? (
              <iframe
                src={embedUrl ?? ''}
                title={title}
                className="w-full h-full bg-black"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                ref={videoRef}
                src={src}
                poster={tileCover}
                preload="metadata"
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain bg-black"
              />
            )}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute top-3 right-3 z-20 text-white bg-black/40 hover:bg-black/60 rounded px-4 py-2 text-xl sm:text-base"
            >
              ×
            </button>
            <button
              onClick={() => setMuted(!muted)}
              aria-label={muted ? 'Unmute' : 'Mute'}
              className="absolute top-3 left-3 z-20 text-white bg-black/40 hover:bg-black/60 rounded px-4 py-2 text-xs sm:text-sm"
            >
              {muted ? 'Unmute' : 'Mute'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
