import { useState, useRef, useEffect } from 'react'

type Category = 'events' | 'street' | 'sports'

type PicItem = {
  src: string
  alt: string
  category: Category
}

const pics: PicItem[] = [
  // Street
  {
    src: new URL('../assets/pics/helsinki-street-photography-2.jpg', import.meta.url).href,
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: new URL('../assets/pics/helsinki-street-photography-1.jpg', import.meta.url).href,
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: new URL('../assets/pics/helsinki-street-photography-4.jpg', import.meta.url).href,
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: new URL('../assets/pics/helsinki-street-photography-13.jpg', import.meta.url).href,
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: new URL('../assets/pics/helsinki-street-photography-12.jpg', import.meta.url).href,
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: new URL('../assets/pics/helsinki-street-photography-8.jpg', import.meta.url).href,
    alt: 'Street photography',
    category: 'street',
  },
  // Sports
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZPpbWUIKd9DKlaMegp1VzXkUnctLRICHvhE6J',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZVENRVCuhYn70AJ2DZlT953KORFC6mikWe8og',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Z8PKf4DGnTwoMRPnVrEO1mkHjcLUZ6gAd0zXB',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Z1fHc6JjPZc3mDwh6s4XzBMUYLg2Aix58oFt0',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZPjpyv9Kd9DKlaMegp1VzXkUnctLRICHvhE6J',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZxzB4He5GhpvSgs5yaJmncdDLYZ2wQF6UiqNo',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Z1SwhbjPZc3mDwh6s4XzBMUYLg2Aix58oFt07',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZQ8f2XEVeDCBVMG6LYgvc4QXSK53d7laJxTzO',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Z91Zwjg7ZNjycYJWlBUEMrdAt1TKGf2k7miQL',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZyLlXsT1s0hxKJVQYnFpReLTN86qcZDlioGHy',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZNZg0dEBVGMp1OyuW6wUeBzKQc4tsISmaAD2h',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZiZDrvgkn1tXSFCjxbYgd8QcvUK0fGA5kJHVh',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZNHRi9cBVGMp1OyuW6wUeBzKQc4tsISmaAD2h',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZZDeHbG1zVpI42HAsox3raXMSFvdTDYOfnc7B',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Zd88GCLckVR3vTU8Pq6O1MAINYZC4cKlezywm',
    alt: 'Sports photography',
    category: 'sports',
  },
  // Events
  {
    src: new URL('../assets/covers/union.jpg', import.meta.url).href,
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: new URL('../assets/covers/securitas.jpg', import.meta.url).href,
    alt: 'Event photography',
    category: 'events',
  },
]

export default function Pics() {
  const [activeCategory, setActiveCategory] = useState<Category>('street')
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const filteredPics = pics.filter((p) => p.category === activeCategory)

  useEffect(() => {
    setActiveIndex(0)
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0 })
    }
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

  return (
    <div className="space-y-8">
      {/* Category Navigation */}
      <nav className="flex justify-start gap-2 text-xs">
        {(['events', 'street', 'sports'] as const).map((cat) => (
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
      <div className="relative w-full">
        <div 
          ref={scrollContainerRef}
          className="flex w-full overflow-x-auto snap-x snap-mandatory gap-4 pb-6 px-4 md:px-0 scrollbar-hide"
        >
          {filteredPics.map((pic, i) => (
            <div
              key={i}
              className="snap-center shrink-0 h-[50vh] md:h-[60vh] w-auto relative rounded-none overflow-hidden bg-neutral-100"
            >
              <img
                src={pic.src}
                alt={pic.alt}
                loading="lazy"
                className="h-full w-auto max-w-none"
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
    </div>
  )
}
