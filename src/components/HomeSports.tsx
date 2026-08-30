import { useEffect, useRef, useState, type TouchEvent } from 'react'

import { homeSportsImages } from '../data/HomeSportsImages'

type GalleryImage = {
  src: string
  alt: string
}

function HomeSports() {
  const [isLandscapeBySrc, setIsLandscapeBySrc] = useState<Record<string, boolean>>({})
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const activeImage = activeIndex === null ? null : homeSportsImages[activeIndex]

  const closeLightbox = () => setActiveIndex(null)

  const goPrev = () => {
    if (activeIndex === null) return
    const next = (activeIndex - 1 + homeSportsImages.length) % homeSportsImages.length
    setActiveIndex(next)
  }

  const goNext = () => {
    if (activeIndex === null) return
    const next = (activeIndex + 1) % homeSportsImages.length
    setActiveIndex(next)
  }

  const touchStartRef = useRef<{ x: number; y: number } | null>(null)

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0]
    if (!t) return
    touchStartRef.current = { x: t.clientX, y: t.clientY }
  }

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current
    touchStartRef.current = null
    if (!start) return

    const t = e.changedTouches[0]
    if (!t) return

    const dx = t.clientX - start.x
    const dy = t.clientY - start.y

    if (Math.abs(dx) < 45) return
    if (Math.abs(dx) < Math.abs(dy) * 1.2) return

    if (dx < 0) goNext()
    else goPrev()
  }

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 grid-flow-dense">
        {homeSportsImages.map((image: GalleryImage, index: number) => {
          const isLandscape = isLandscapeBySrc[image.src]

          return (
            <figure
              key={image.src}
              className={`${isLandscape ? 'col-span-2 aspect-video' : 'col-span-1 aspect-[4/5]'} overflow-hidden rounded-md bg-neutral-100`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="block h-full w-full"
                aria-label={`Open image: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  onLoad={(e) => {
                    const el = e.currentTarget
                    const nextIsLandscape = el.naturalWidth > el.naturalHeight
                    setIsLandscapeBySrc((prev) =>
                      prev[image.src] === nextIsLandscape ? prev : { ...prev, [image.src]: nextIsLandscape },
                    )
                  }}
                />
              </button>
            </figure>
          )
        })}
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black">
          <button
            type="button"
            className="absolute inset-0 bg-black"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          />

          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-30 text-white/90 hover:text-white text-3xl leading-none"
            aria-label="Close"
          >
            ×
          </button>

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 top-0 z-20 h-full w-16 sm:w-24 flex items-center justify-center text-white/80 hover:text-white transition"
            aria-label="Previous image"
          >
            <span className="text-5xl leading-none">‹</span>
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 top-0 z-20 h-full w-16 sm:w-24 flex items-center justify-center text-white/80 hover:text-white transition"
            aria-label="Next image"
          >
            <span className="text-5xl leading-none">›</span>
          </button>

          <div
            className="relative z-10 flex h-full w-full items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[90vh] max-w-[92vw] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeSports