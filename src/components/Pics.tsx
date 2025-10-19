type PicItem = { src: string; alt: string }

const pics: PicItem[] = [
  { src: new URL('../assets/pics/helsinki-street-photography-2.jpg', import.meta.url).href, alt: 'photography' },
  { src: new URL('../assets/pics/helsinki-street-photography-1.jpg', import.meta.url).href, alt: 'photography' },
  { src: new URL('../assets/pics/helsinki-street-photography-4.jpg', import.meta.url).href, alt: 'photography' },
  { src: new URL('../assets/pics/helsinki-street-photography-13.jpg', import.meta.url).href, alt: 'photography' },
  { src: new URL('../assets/pics/helsinki-street-photography-12.jpg', import.meta.url).href, alt: 'photography' },
  { src: new URL('../assets/pics/helsinki-street-photography-8.jpg', import.meta.url).href, alt: 'photography' },
]

export default function Pics() {
  // short = landscape-ish; large = portrait-ish
  const shapeClass = (shape: 'short' | 'large') =>
    shape === 'short' ? 'aspect-[4/3]' : 'aspect-[3/4]'

  const rows: [PicItem, PicItem][] = [
    [pics[0], pics[1]],
    [pics[2], pics[3]],
    [pics[4], pics[5]],
  ]

  const pattern: Array<['short', 'large'] | ['large', 'short']> = [
    ['large', 'short'],
    ['short', 'large'],
    ['large', 'short'],
  ]

  const gridColsFor = (left: 'short' | 'large', right: 'short' | 'large') =>
    left === 'short' && right === 'large'
      ? 'sm:grid-cols-[16fr_9fr]'
      : 'sm:grid-cols-[9fr_16fr]'

  return (
    <div className="mx-auto max-w-6xl space-y-6 sm:space-y-8">
      {rows.map(([left, right], i) => {
        const [leftShape, rightShape] = pattern[i]
        const cols = gridColsFor(leftShape, rightShape)
        return (
          <div key={i} className={`grid grid-cols-1 ${cols} gap-4 sm:gap-6`}>
            <figure
              className={`relative overflow-hidden rounded-xl bg-neutral-100 ${shapeClass(
                leftShape
              )}`}
            >
              <img
                src={left.src}
                alt={left.alt}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </figure>

            <figure
              className={`relative overflow-hidden rounded-xl bg-neutral-100 ${shapeClass(
                rightShape
              )}`}
            >
              <img
                src={right.src}
                alt={right.alt}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        )
      })}
    </div>
  )
}