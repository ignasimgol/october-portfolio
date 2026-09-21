import { useState, useRef, useEffect } from 'react'

export default function VideoTile({
  src,
  title,
  cover,
  aspect = 'aspect-[4/3]',
  className = '',
}: {
  src: string
  title: string
  cover?: string
  aspect?: string
  className?: string
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [, setIsPlaying] = useState(false) // eslint-disable-line @typescript-eslint/no-unused-vars
  const coverPoster = 'https://ik.imagekit.io/dhlq5fcy7w/covers/bg.jpeg'
  const [open, setOpen] = useState(false)
  const [muted, setMuted] = useState(false) // start with sound ON
  const tileCover = cover ?? coverPoster

  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be')
  const isVimeo = src.includes('vimeo.com')
  const isCloudflareStream = src.includes('cloudflarestream.com')
  const isMediaDelivery = src.includes('mediadelivery.net')
  const buildYouTubeEmbed = (url: string, mute: boolean) => {
    try {
      const u = new URL(url)
      let id = ''
      if (u.hostname.includes('youtu.be')) {
        id = u.pathname.split('/').filter(Boolean).pop() || ''
      } else {
        id = u.searchParams.get('v') || ''
      }
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=${mute ? 1 : 0}&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3&controls=0`
    } catch {
      return url
    }
  }

  const buildVimeoEmbed = (url: string, mute: boolean) => {
    try {
      const u = new URL(url)

      if (u.hostname.includes('player.vimeo.com')) {
        u.searchParams.set('autoplay', '1')
        u.searchParams.set('muted', mute ? '1' : '0')
        u.searchParams.set('title', '0')
        u.searchParams.set('byline', '0')
        u.searchParams.set('portrait', '0')
        return u.toString()
      }

      const match = u.pathname.match(/\/(\d+)(?:$|\/)/)
      const id = match?.[1] ?? ''
      return `https://player.vimeo.com/video/${id}?autoplay=1&muted=${mute ? 1 : 0}&title=0&byline=0&portrait=0`
    } catch {
      return url
    }
  }

  const buildMediaDeliveryEmbed = (url: string, mute: boolean) => {
    const newUrl = url.replace('/play/', '/embed/')
    const hasParams = newUrl.includes('?')
    const params = `autoplay=true&loop=false&muted=${mute}&preload=true&responsive=true`
    return `${newUrl}${hasParams ? '&' : '?'}${params}`
  }

  const embedUrl = isYouTube
    ? buildYouTubeEmbed(src, muted)
    : isVimeo
    ? buildVimeoEmbed(src, muted)
    : isMediaDelivery
    ? buildMediaDeliveryEmbed(src, muted)
    : null

  useEffect(() => {
    if (!open || isYouTube || isVimeo || isCloudflareStream || isMediaDelivery) return
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
  }, [open, isYouTube, isVimeo, isCloudflareStream, isMediaDelivery])

  useEffect(() => {
    if (!open || isYouTube || isVimeo || isCloudflareStream || isMediaDelivery) return
    const v = videoRef.current
    if (!v) return
    v.muted = muted
    const attemptPlay = () => {
      const p = v.play()
      if (p && typeof p.catch === 'function') {
        p.catch(() => {})
      }
    }
    setTimeout(attemptPlay, 0)
  }, [open, muted, isYouTube, isVimeo, isCloudflareStream, isMediaDelivery])

  return (
    <>
      {/* Tile cover */}
      <figure className={`group relative overflow-hidden rounded-md bg-neutral-100 ${aspect} ${className}`}>
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
            className="relative bg-black rounded-none sm:rounded-lg overflow-hidden shadow-xl w-screen h-[85vh] sm:w-[65vw] sm:h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {isYouTube || isVimeo ? (
              <iframe
                src={embedUrl ?? ''}
                title={title}
                className="w-full h-full bg-black"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : isCloudflareStream || isMediaDelivery ? (
              <div className="relative w-full h-full">
                <iframe
                  src={isMediaDelivery && embedUrl ? embedUrl : src}
                  title={title}
                  className="absolute top-0 left-0 w-full h-full bg-black"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                />
              </div>
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
