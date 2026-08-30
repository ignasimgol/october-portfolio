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

  const scrollCarousel = (ref: { current: HTMLDivElement | null }, direction: -1 | 1) => {
    const el = ref.current
    if (!el) return
    const amount = Math.round(el.clientWidth * 0.9)
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <div
          ref={horizontalRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 py-2 [scroll-padding-left:1rem] [scroll-padding-right:1rem] scroll-smooth overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:px-6 sm:[scroll-padding-left:1.5rem] sm:[scroll-padding-right:1.5rem]"
        >
          {adsCarouselHorizontalImages.map((image) => (
            <article
              key={image.src}
              className="w-[85%] max-w-[900px] flex-none snap-center overflow-hidden rounded-md bg-white sm:w-[75%] lg:w-[60%]"
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
          onClick={() => scrollCarousel(horizontalRef, -1)}
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-sm hover:bg-white transition"
          aria-label="Previous images"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => scrollCarousel(horizontalRef, 1)}
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-sm hover:bg-white transition"
          aria-label="Next images"
        >
          ›
        </button>
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
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 py-2 [scroll-padding-left:1rem] [scroll-padding-right:1rem] scroll-smooth overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:px-6 sm:[scroll-padding-left:1.5rem] sm:[scroll-padding-right:1.5rem]"
        >
          {adsCarouselVerticalImages.map((image) => (
            <article
              key={image.src}
              className="w-[92%] max-w-[480px] flex-none snap-center overflow-hidden rounded-md bg-white sm:w-[82%] lg:w-[40%]"
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
          onClick={() => scrollCarousel(verticalRef, -1)}
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-sm hover:bg-white transition"
          aria-label="Previous images"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => scrollCarousel(verticalRef, 1)}
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-sm hover:bg-white transition"
          aria-label="Next images"
        >
          ›
        </button>
      </div>
    </div>
  )
}

export default HomeAds