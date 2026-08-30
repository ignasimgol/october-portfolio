import { useState, useRef, useEffect } from 'react'

type Category = 'street' | 'sports' | 'events'

type PicItem = {
  src: string
  alt: string
  category: Category
}

const pics: PicItem[] = [
  // Street
   {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/street/helsinki-street-photography-2.jpg',
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/street/helsinki-street-photography-13.jpg',
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/street/helsinki-street-photography-4.jpg',
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/street/helsinki-street-photography-8.jpg',
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/street/helsinki-street-photography-12.jpg',
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/street/helsinki%20christmas%20market%205.jpg',
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/street/street_helsinki.jpg',
    alt: 'Street photography',
    category: 'street',
  },
  // Sports
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/sport/sport1.jpg',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/sport/sport2.jpg',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/sport/sport3.jpg',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/sport/sport4.jpg',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/sport/mk_new%20(1).jpg',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/sport/camiseta_new.jpg',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/sport/sport7.gif',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/sport/sport8.webp',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/sport/sport9.webp',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/sport/sport10.webp',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/sport/sport11.webp',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/sport/sport12.webp',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/sport/sport13.webp',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/sport/sport15.webp',
    alt: 'Sports photography',
    category: 'sports',
  },
  // Events (ordered)

  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/events/event_2.jpg',
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/events/event_3.jpg',
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/events/event_4.jpg',
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/events/event_5.jpg',
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/events/event_6.jpg',
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/events/event_8.jpg',
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/events/event_9.jpg',
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/events/event_10.jpg',
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: 'https://ik.imagekit.io/dhlq5fcy7w/events/event_11%20(1).jpg',
    alt: 'Event photography',
    category: 'events',
  },
]

const abuDhabi: PicItem[] = [
  { src: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/street_AD_1.jpg', alt: 'Abu Dhabi street', category: 'street' },
  { src: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/street_AD_2,6.jpg', alt: 'Abu Dhabi street', category: 'street' },
  { src: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/STREET_AD_5.jpg', alt: 'Abu Dhabi street', category: 'street' },
  { src: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/street_AD_4.jpg', alt: 'Abu Dhabi street', category: 'street' },
  { src: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/street_AD_3.png', alt: 'Abu Dhabi street', category: 'street' },
  { src: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/street_AD_2.jpg', alt: 'Abu Dhabi street', category: 'street' },
]

export default function Pics() {
  const [activeCategory, setActiveCategory] = useState<Category>('street')
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const helsinkiItemRefs = useRef<Array<HTMLElement | null>>([])
  const helsinkiRafRef = useRef<number | null>(null)

  const adScrollRef = useRef<HTMLDivElement | null>(null)
  const adItemRefs = useRef<Array<HTMLElement | null>>([])
  const adRafRef = useRef<number | null>(null)
  const [adIndex, setAdIndex] = useState(0)
  const [orientations, setOrientations] = useState<Record<number, boolean>>({})
  const [adOrientations, setAdOrientations] = useState<Record<number, boolean>>({})

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

  const onHelsinkiScroll = () => {
    const el = scrollContainerRef.current
    if (!el) return
    if (helsinkiRafRef.current !== null) return

    helsinkiRafRef.current = window.requestAnimationFrame(() => {
      helsinkiRafRef.current = null
      const idx = getClosestIndexToCenter(el, helsinkiItemRefs.current)
      setActiveIndex(clampIndex(idx, filteredPics.length))
    })
  }

  const onAbuDhabiScroll = () => {
    const el = adScrollRef.current
    if (!el) return
    if (adRafRef.current !== null) return

    adRafRef.current = window.requestAnimationFrame(() => {
      adRafRef.current = null
      const idx = getClosestIndexToCenter(el, adItemRefs.current)
      setAdIndex(clampIndex(idx, abuDhabi.length))
    })
  }

  const filteredPics = pics.filter((p) => p.category === activeCategory)

  useEffect(() => {
    setActiveIndex(0)
    helsinkiItemRefs.current = []
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0 })
    }
    setOrientations({})

    setAdIndex(0)
    adItemRefs.current = []
    if (adScrollRef.current) {
      adScrollRef.current.scrollTo({ left: 0 })
    }
    setAdOrientations({})
  }, [activeCategory])


  return (
    <div className="space-y-8">
      {/* Category Navigation */}
      <nav className="flex justify-start gap-2 text-xs">
        {(['street', 'sports', 'events'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 border rounded-full transition-colors ${
              activeCategory === cat
                ? 'bg-black text-white border-black'
                : 'bg-transparent border-neutral-300 text-neutral-600 hover:border-black hover:text-black'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </nav>

      {/* Carousel */}
      {activeCategory === 'street' && (
        <h3 className="text-left text-sm font-medium mb-2">Helsinki</h3>
      )}
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          onScroll={onHelsinkiScroll}
          className="mx-auto flex w-full max-w-5xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 scroll-smooth overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:px-0"
        >
          {filteredPics.map((pic, i) => {
            const isLandscape = orientations[i] ?? true

            return (
              <div
                key={i}
                ref={(node) => {
                  helsinkiItemRefs.current[i] = node
                }}
                className={`${
                  isLandscape
                    ? 'w-[88%] sm:w-[82%] md:w-[72%] lg:w-[62%]'
                    : 'w-[70%] sm:w-[60%] md:w-[46%] lg:w-[40%]'
                } shrink-0 snap-center [scroll-snap-stop:always] overflow-hidden rounded-md`}
              >
                <div className="flex h-[50vh] items-center justify-center md:h-[60vh]">
                  <img
                    src={pic.src}
                    alt={pic.alt}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                    onLoad={(e) => {
                      const img = e.currentTarget
                      const nextLandscape = img.naturalWidth >= img.naturalHeight
                      setOrientations((prev) => (prev[i] === nextLandscape ? prev : { ...prev, [i]: nextLandscape }))
                    }}
                  />
                </div>
              </div>
            )
          })}
          {filteredPics.length === 0 && (
            <div className="w-full text-center py-20 text-neutral-400">
              No photos in this category yet.
            </div>
          )}
        </div>

        {filteredPics.length > 0 && (
          <>
            <button
              type="button"
              onClick={() => scrollCarousel({ current: scrollContainerRef.current }, helsinkiItemRefs, -1)}
              className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-sm hover:bg-white transition"
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel({ current: scrollContainerRef.current }, helsinkiItemRefs, 1)}
              className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-sm hover:bg-white transition"
              aria-label="Next photo"
            >
              ›
            </button>

            <div className="mt-2 flex justify-center gap-1.5">
              {filteredPics.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToIndex({ current: scrollContainerRef.current }, helsinkiItemRefs, i)}
                  className={`h-1.5 w-1.5 rounded-full transition-opacity ${
                    i === activeIndex ? 'bg-black opacity-80' : 'bg-black opacity-20 hover:opacity-40'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {activeCategory === 'street' && (
        <div className="mt-8">
          <h3 className="text-left text-sm font-medium mb-2">Abu Dhabi</h3>
          <div className="relative w-full">
            <div
              ref={adScrollRef}
              onScroll={onAbuDhabiScroll}
              className="mx-auto flex w-full max-w-5xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 scroll-smooth overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:px-0"
            >
              {abuDhabi.map((pic, i) => {
                const isLandscape = adOrientations[i] ?? true

                return (
                  <div
                    key={i}
                    ref={(node) => {
                      adItemRefs.current[i] = node
                    }}
                    className={`${
                      isLandscape
                        ? 'w-[88%] sm:w-[82%] md:w-[72%] lg:w-[62%]'
                        : 'w-[70%] sm:w-[60%] md:w-[46%] lg:w-[40%]'
                    } shrink-0 snap-center [scroll-snap-stop:always] overflow-hidden rounded-md`}
                  >
                    <div className="flex h-[50vh] items-center justify-center md:h-[60vh]">
                      <img
                        src={pic.src}
                        alt={pic.alt}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                        onLoad={(e) => {
                          const img = e.currentTarget
                          const nextLandscape = img.naturalWidth >= img.naturalHeight
                          setAdOrientations((prev) =>
                            prev[i] === nextLandscape ? prev : { ...prev, [i]: nextLandscape },
                          )
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            {abuDhabi.length > 0 && (
              <>
                <button
                  type="button"
                  onClick={() => scrollCarousel({ current: adScrollRef.current }, adItemRefs, -1)}
                  className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-sm hover:bg-white transition"
                  aria-label="Previous photo"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel({ current: adScrollRef.current }, adItemRefs, 1)}
                  className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-sm hover:bg-white transition"
                  aria-label="Next photo"
                >
                  ›
                </button>

                <div className="mt-2 flex justify-center gap-1.5">
                  {abuDhabi.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => scrollToIndex({ current: adScrollRef.current }, adItemRefs, i)}
                      className={`h-1.5 w-1.5 rounded-full transition-opacity ${
                        i === adIndex ? 'bg-black opacity-80' : 'bg-black opacity-20 hover:opacity-40'
                      }`}
                      aria-label={`Go to AD image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
