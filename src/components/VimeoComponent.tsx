import { useEffect, useState } from 'react'

type VimeoComponentProps = {
  vimeoId: string
  title?: string
  coverSrc?: string
}

export default function VimeoComponent({ vimeoId, title, coverSrc }: VimeoComponentProps) {
  const [open, setOpen] = useState(false)

  // Use an MP4 cover from src/assets with a bundler-safe URL
  const defaultCoverSrc = new URL('../assets/covers/santander.mp4', import.meta.url).href
  const resolvedCover = coverSrc ?? defaultCoverSrc

  // Prevent background scroll when modal is open
  useEffect(() => {
    const prev = document.body.style.overflow
    if (open) document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <figure className="relative overflow-hidden rounded-md bg-neutral-100 aspect-[4/3]">
        <video
          src={resolvedCover}
          className="h-full w-full object-cover cursor-pointer"
          autoPlay
          muted
          loop
          playsInline
          onClick={() => setOpen(true)}
        />
      </figure>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={() => setOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-[75vw] h-[75vh] bg-black rounded-lg overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute top-3 right-3 text-white bg-black/40 hover:bg-black/60 rounded px-3 py-1"
            >
              ×
            </button>
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1`}
              title={title ?? 'Vimeo video'}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}