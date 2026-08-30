import { useRef, useState } from 'react'

import { adsCarouselHorizontalImages, adsCarouselVerticalImages } from '../data/AdsImages'

type HomeVideo = {
  title: string
  src: string
  cover: string
}

const adVideos: HomeVideo[] = [
  {
    title: 'Brisa - Gin MG',
    src: 'https://iframe.mediadelivery.net/play/609765/0720ec93-c516-4ff0-8af0-4fa6c9076939',
    cover: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/anuncis5.jpg?updatedAt=1782027291268',
  },
  {
    title: 'Le Picnic - Veuve Clicquot',
    src: 'https://iframe.mediadelivery.net/play/609765/fc7e1541-151f-4e9a-b42f-bfbc1a58184f',
    cover: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/anuncis3.jpg?updatedAt=1782027291275',
  },
]

function buildMediaDeliveryEmbed(url: string) {
  const embedUrl = url.replace('/play/', '/embed/')
  const separator = embedUrl.includes('?') ? '&' : '?'
  return `${embedUrl}${separator}autoplay=false&loop=false&muted=false&preload=true&responsive=true`
}

function HomeAds() {
  const horizontalRef = useRef<HTMLDivElement | null>(null)
  const verticalRef = useRef<HTMLDivElement | null>(null)
  const [openedVideosByTitle, setOpenedVideosByTitle] = useState<Record<string, boolean>>({})
  const [horizontalIndex, setHorizontalIndex] = useState(0)
  const [verticalIndex, setVerticalIndex] = useState(0)
  const horizontalRafRef = useRef<number | null>(null)
  const verticalRafRef = useRef<number | null>(null)
  const horizontalItemRefs = useRef<Array<HTMLElement | null>>([])
  const verticalItemRefs = useRef<Array<HTMLElement | null>>([])

  const clampIndex = (index: number, length: number) => Math.max(0, Math.min(length - 1, index))

  const getClosestIndexToCenter = (el: HTMLDivElement, items: Array<HTMLElement | null>) => {
    const centerX = el.scrollLeft + el.clientWidth / 2
    let bestIndex = 0
    let bestDist = Number.POSITIVE_INFINITY

    items.forEach((item, index) => {
      if (!item) return
      const itemCenter = item.offsetLeft + item.clientWidth / 2
      const dist = Math.abs(centerX - itemCenter)
      if (dist < bestDist) {
        bestDist = dist
        bestIndex = index
      }
    })

    return bestIndex
  }

  const scrollToIndex = (
    ref: { current: HTMLDivElement | null },
    itemsRef: { current: Array<HTMLElement | null> },
    index: number,
  ) => {
    const el = ref.current
    if (!el) return
    const idx = clampIndex(index, itemsRef.current.length)
    const item = itemsRef.current[idx]
    if (!item) return

    const targetLeft = item.offsetLeft - (el.clientWidth - item.clientWidth) / 2
    el.scrollTo({ left: targetLeft, behavior: 'smooth' })
  }

  const scrollCarousel = (
    ref: { current: HTMLDivElement | null },
    itemsRef: { current: Array<HTMLElement | null> },
    direction: -1 | 1,
  ) => {
    const el = ref.current
    if (!el) return
    const current = getClosestIndexToCenter(el, itemsRef.current)
    scrollToIndex(ref, itemsRef, current + direction)
  }

  const onHorizontalScroll = () => {
    const el = horizontalRef.current
    if (!el) return
    if (horizontalRafRef.current !== null) return
    horizontalRafRef.current = window.requestAnimationFrame(() => {
      horizontalRafRef.current = null
      const idx = getClosestIndexToCenter(el, horizontalItemRefs.current)
      setHorizontalIndex(clampIndex(idx, adsCarouselHorizontalImages.length))
    })
  }

  const onVerticalScroll = () => {
    const el = verticalRef.current
    if (!el) return
    if (verticalRafRef.current !== null) return
    verticalRafRef.current = window.requestAnimationFrame(() => {
      verticalRafRef.current = null
      const idx = getClosestIndexToCenter(el, verticalItemRefs.current)
      setVerticalIndex(clampIndex(idx, adsCarouselVerticalImages.length))
    })
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <div
          ref={horizontalRef}
          onScroll={onHorizontalScroll}
          className="mx-auto flex w-full max-w-5xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 py-2 scroll-smooth overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:px-6"
        >
          {adsCarouselHorizontalImages.map((image, index) => (
            <article
              key={image.src}
              ref={(node) => {
                horizontalItemRefs.current[index] = node
              }}
              className="w-[88%] flex-none snap-center [scroll-snap-stop:always] overflow-hidden rounded-md bg-white sm:w-[82%] md:w-[72%] lg:w-[62%]"
            >
              <div className="flex h-[45vh] items-center justify-center sm:h-[50vh] lg:h-[52vh]">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollCarousel(horizontalRef, horizontalItemRefs, -1)}
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-sm hover:bg-white transition"
          aria-label="Previous images"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => scrollCarousel(horizontalRef, horizontalItemRefs, 1)}
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-sm hover:bg-white transition"
          aria-label="Next images"
        >
          ›
        </button>

        <div className="mt-2 flex items-center justify-center gap-1.5">
          {adsCarouselHorizontalImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(horizontalRef, horizontalItemRefs, index)}
              className={`h-1.5 w-1.5 rounded-full transition-opacity ${
                index === horizontalIndex ? 'bg-black opacity-80' : 'bg-black opacity-20 hover:opacity-40'
              }`}
              aria-label={`Go to image ${index + 1} of ${adsCarouselHorizontalImages.length}`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {adVideos.map((video) => {
          const isOpen = Boolean(openedVideosByTitle[video.title])

          return (
            <article key={video.title} className="mx-auto w-full max-w-3xl space-y-3">
              <div className="aspect-video overflow-hidden rounded-md bg-black">
                {isOpen ? (
                  <iframe
                    src={buildMediaDeliveryEmbed(video.src)}
                    title={video.title}
                    className="h-full w-full"
                    allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      setOpenedVideosByTitle((prev) => ({
                        ...prev,
                        [video.title]: true,
                      }))
                    }
                    className="relative h-full w-full"
                    aria-label={`Play ${video.title}`}
                  >
                    <img
                      src={video.cover}
                      alt={video.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/25" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/85 text-black backdrop-blur-md shadow-sm">
                        <span className="text-2xl leading-none">▶</span>
                      </div>
                    </div>
                  </button>
                )}
              </div>
              <p className="text-left text-sm text-neutral-700">{video.title}</p>
            </article>
          )
        })}
      </div>

      <div className="relative">
        <div
          ref={verticalRef}
          onScroll={onVerticalScroll}
          className="mx-auto flex w-full max-w-3xl snap-x snap-mandatory gap-2 overflow-x-auto px-4 py-2 scroll-smooth overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:px-6"
        >
          {adsCarouselVerticalImages.map((image, index) => (
            <article
              key={image.src}
              ref={(node) => {
                verticalItemRefs.current[index] = node
              }}
              className="w-[84%] flex-none snap-center [scroll-snap-stop:always] overflow-hidden rounded-md bg-white sm:w-[76%] md:w-[60%] lg:w-[46%]"
            >
              <div className="flex h-[60vh] items-center justify-center px-2 sm:h-[65vh] lg:h-[68vh]">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollCarousel(verticalRef, verticalItemRefs, -1)}
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-sm hover:bg-white transition"
          aria-label="Previous images"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => scrollCarousel(verticalRef, verticalItemRefs, 1)}
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-sm hover:bg-white transition"
          aria-label="Next images"
        >
          ›
        </button>

        <div className="mt-2 flex items-center justify-center gap-1.5">
          {adsCarouselVerticalImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(verticalRef, verticalItemRefs, index)}
              className={`h-1.5 w-1.5 rounded-full transition-opacity ${
                index === verticalIndex ? 'bg-black opacity-80' : 'bg-black opacity-20 hover:opacity-40'
              }`}
              aria-label={`Go to image ${index + 1} of ${adsCarouselVerticalImages.length}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeAds