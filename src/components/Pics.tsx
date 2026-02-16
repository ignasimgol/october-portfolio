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
    src: 'https://ik.imagekit.io/dhlq5fcy7w/events/event_11%20(1).jpg',
    alt: 'Event photography',
    category: 'events',
  },
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
  }
]

const abuDhabi: PicItem[] = [
  { src: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/street_AD_2.jpg', alt: 'Abu Dhabi street', category: 'street' },
  { src: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/street_AD_3.png', alt: 'Abu Dhabi street', category: 'street' },
  { src: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/street_AD_4.jpg', alt: 'Abu Dhabi street', category: 'street' },
  { src: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/STREET_AD_5.jpg', alt: 'Abu Dhabi street', category: 'street' },
  { src: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/street_AD_2,6.jpg', alt: 'Abu Dhabi street', category: 'street' },
  { src: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/street_AD_1.jpg', alt: 'Abu Dhabi street', category: 'street' },
]

export default function Pics() {
  const [activeCategory, setActiveCategory] = useState<Category>('street')
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const adScrollRef = useRef<HTMLDivElement>(null)
  const [adIndex, setAdIndex] = useState(0)
  const [orientations, setOrientations] = useState<Record<number, boolean>>({})
  const [adOrientations, setAdOrientations] = useState<Record<number, boolean>>({})

  const filteredPics = pics.filter((p) => p.category === activeCategory)

  useEffect(() => {
    setActiveIndex(0)
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0 })
    }
    setAdIndex(0)
    if (adScrollRef.current) {
      adScrollRef.current.scrollTo({ left: 0 })
    }
    setOrientations({})
    setAdOrientations({})
  }, [activeCategory])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect()
      const containerCenter = containerRect.left + containerRect.width / 2
      
      let closestIndex = 0
      let minDistance = Number.MAX_VALUE

      Array.from(container.children).forEach((child, index) => {
        if (index >= filteredPics.length) return // Skip non-pic children if any
        
        const childRect = child.getBoundingClientRect()
        const childCenter = childRect.left + childRect.width / 2
        const distance = Math.abs(childCenter - containerCenter)
        
        if (distance < minDistance) {
          minDistance = distance
          closestIndex = index
        }
      })
      
      setActiveIndex(closestIndex)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [filteredPics])

  useEffect(() => {
    const container = adScrollRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const center = rect.left + rect.width / 2
      let closestIndex = 0
      let minDistance = Number.MAX_VALUE

      Array.from(container.children).forEach((child, index) => {
        const childRect = (child as HTMLElement).getBoundingClientRect()
        const childCenter = childRect.left + childRect.width / 2
        const distance = Math.abs(childCenter - center)
        if (distance < minDistance) {
          minDistance = distance
          closestIndex = index
        }
      })

      setAdIndex(closestIndex)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
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
        <h3 className="text-sm font-medium mb-2">Helsinki</h3>
      )}
      <div className="relative w-full">
        <div 
          ref={scrollContainerRef}
          className="flex w-full overflow-x-auto snap-x snap-mandatory gap-4 pb-6 px-4 md:px-0 scrollbar-hide"
        >
          {filteredPics.map((pic, i) => (
            <div
              key={i}
              className={`snap-center shrink-0 ${orientations[i] ? 'h-[38vh] w-full' : 'h-[50vh] w-auto'} md:h-[60vh] md:w-auto md:max-w-[85vw] relative rounded-none overflow-hidden bg-transparent md:bg-neutral-100`}
            >
              <img
                src={pic.src}
                alt={pic.alt}
                loading="lazy"
                className={orientations[i] ? 'h-full w-full object-contain md:w-auto md:max-w-[85vw] md:mx-auto' : 'h-full w-auto max-w-none md:object-contain md:max-w-[85vw] md:mx-auto'}
                onLoad={(e) => {
                  const img = e.currentTarget
                  const landscape = img.naturalWidth >= img.naturalHeight
                  setOrientations((prev) => (prev[i] === landscape ? prev : { ...prev, [i]: landscape }))
                }}
              />
            </div>
          ))}
          {filteredPics.length === 0 && (
            <div className="w-full text-center py-20 text-neutral-400">
              No photos in this category yet.
            </div>
          )}
        </div>
        
        {/* Dots Navigation */}
        {filteredPics.length > 0 && (
          <div className="flex justify-center gap-1.5 mt-2">
            {filteredPics.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const container = scrollContainerRef.current
                  if (container) {
                    const child = container.children[i] as HTMLElement
                    if (child) {
                      const scrollLeft = child.offsetLeft - (container.clientWidth - child.clientWidth) / 2
                      container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
                    }
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-1.5 bg-black' : 'w-1.5 bg-neutral-300'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {activeCategory === 'street' && (
        <div className="mt-8">
          <h3 className="text-sm font-medium mb-2">Abu Dhabi</h3>
          <div className="relative w-full">
            <div
              ref={adScrollRef}
              className="flex w-full overflow-x-auto snap-x snap-mandatory gap-4 pb-6 px-4 md:px-0 scrollbar-hide"
            >
              {abuDhabi.map((pic, i) => (
                <div
                  key={i}
                  className={`snap-center shrink-0 ${adOrientations[i] ? 'h-[38vh] w-full' : 'h-[50vh] w-auto'} md:h-[60vh] md:w-auto md:max-w-[85vw] relative rounded-none overflow-hidden bg-transparent md:bg-neutral-100`}
                >
                  <img
                    src={pic.src}
                    alt={pic.alt}
                    loading="lazy"
                    className={adOrientations[i] ? 'h-full w-full object-contain md:w-auto md:max-w-[85vw] md:mx-auto' : 'h-full w-auto max-w-none md:object-contain md:max-w-[85vw] md:mx-auto'}
                    onLoad={(e) => {
                      const img = e.currentTarget
                      const landscape = img.naturalWidth >= img.naturalHeight
                      setAdOrientations((prev) => (prev[i] === landscape ? prev : { ...prev, [i]: landscape }))
                    }}
                  />
                </div>
              ))}
            </div>
            {abuDhabi.length > 0 && (
              <div className="flex justify-center gap-1.5 mt-2">
                {abuDhabi.map((_, i) => (
                  <button
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === adIndex ? 'w-1.5 bg-black' : 'w-1.5 bg-neutral-300'}`}
                    aria-label={`Go to AD image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
