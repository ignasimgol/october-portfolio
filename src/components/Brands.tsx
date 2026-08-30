const logos = [
  {
    name: 'Veuve Clicquot',
    src: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/logos/logo_cliquot.webp',
    size: 'brand-carousel__item--large',
  },
  {
    name: 'Santander',
    src: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/logos/logo_santander.webp',
    size: 'brand-carousel__item--small scale-[0.75] md:scale-[0.7]',
  },
  {
    name: 'Bulgari',
    src: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/logos/logo_bulgari.webp',
    size: 'brand-carousel__item--small scale-[0.65] md:scale-[0.6]',
  },
  {
    name: 'Gin MG',
    src: 'https://ik.imagekit.io/dhlq5fcy7w/abu%20dhabi/logos/logo-gin-mg.webp',
    size: 'brand-carousel__item--large',
  },
]

const duplicatedLogos = [...logos, ...logos]

function Brands() {
  return (
    <section className="pb-10 pt-2">
      <div
        className="brand-carousel rounded-md py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        aria-label="Featured brands"
      >
        <div className="brand-carousel__track">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className={`brand-carousel__item ${logo.size} flex items-center justify-center px-6 md:px-10`}
              aria-hidden={index >= logos.length}
            >
              <img src={logo.src} alt={logo.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands