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
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZtTlAV08PKfT7J1mDe5bv8iRz3XohN2AlruOW',
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZyrVYhQC1s0hxKJVQYnFpReLTN86qcZDlioGH',
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZIy16YJz9ifLgd8hMTA76owI0mJxEtuOpnrlD',
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Z2ZwOKWRcZ30ow7GD2ILksnTq96u5dyfpz4Xg',
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZK7x2oVAOTNJsPaL2xq9me7t0Gh4CoukZ31WQ',
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZWI6nM4dwM62EqnuspVFR0a85iCLkJrmHXycG',
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Z8pk7kMnTwoMRPnVrEO1mkHjcLUZ6gAd0zXB4',
    alt: 'Street photography',
    category: 'street',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZX8afVSNlr4FZL6Qwtmsdfy5eNnG2V0aMBucK',
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
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZGILqwjg5P7eKumiMfCVo64tRTsIXaZr2Ol1n',
    alt: 'Sports photography',
    category: 'sports',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZkPCWJQs5cpAJ8UsG0IKWxZtiXDYzb9yBlEMm',
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
  // Events (ordered)
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZdF0R9IckVR3vTU8Pq6O1MAINYZC4cKlezywm',
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZXhGMYC7Nlr4FZL6Qwtmsdfy5eNnG2V0aMBuc',
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZJwHOrAE5W1i9svfeu7UmS3BF0ITbNQgVXMdC',
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZGi9TzYg5P7eKumiMfCVo64tRTsIXaZr2Ol1n',
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Zs0KQKlx3XZiABck94pfWJShwQVjM8m6T0F7b',
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZHe16oFXMOt69jEp5iJyP7QB2rLf3xSz0NeU4',
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZqrSNRkPb8f3zC7VlOi9SNTXEDsk5IvRGB40M',
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZPiYorZKd9DKlaMegp1VzXkUnctLRICHvhE6J',
    alt: 'Event photography',
    category: 'events',
  },
  {
    src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Z2Udo4wRcZ30ow7GD2ILksnTq96u5dyfpz4Xg',
    alt: 'Event photography',
    category: 'events',
  }
]

const abuDhabi: PicItem[] = [
  { src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Zj7FySjrVnyrCSgjcqJWdZufx87wUAlOXF4pk', alt: 'Abu Dhabi street', category: 'street' },
  { src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Zi95pSxkn1tXSFCjxbYgd8QcvUK0fGA5kJHVh', alt: 'Abu Dhabi street', category: 'street' },
  { src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZBuenPPhTSov2LDVwkHi8Z6ea7gmKqjus9OXW', alt: 'Abu Dhabi street', category: 'street' },
  { src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZiT1VRPkn1tXSFCjxbYgd8QcvUK0fGA5kJHVh', alt: 'Abu Dhabi street', category: 'street' },
  { src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9Zxd4xtP5GhpvSgs5yaJmncdDLYZ2wQF6UiqNo', alt: 'Abu Dhabi street', category: 'street' },
  { src: 'https://yjfzriagdd.ufs.sh/f/DM7CcnrlhW9ZUypUvImRBXhxoecZrtk3Izb1WUfaJLADdiq6', alt: 'Abu Dhabi street', category: 'street' },
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
