import { useState, useRef, useEffect } from 'react'
import './App.css'
import Pics from './components/Pics'
import About from './components/About'
import ContactForm from './components/ContactForm'

function App() {
  type Tab =  'personal' | 'commercials' | 'about' | 'photo' | 'contact'
  const [activeTab, setActiveTab] = useState<Tab>('commercials')
  // Notificación (toast)
  const [toast, setToast] = useState<string | null>(null)
  const [isContactHovered, setIsContactHovered] = useState(false)

  const handleCopyEmail = async () => {
    const email = 'bymariadelrio@gmail.com'
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email)
      } else {
        const ta = document.createElement('textarea')
        ta.value = email
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setToast('Email Copied')
      setTimeout(() => setToast(null), 2000)
    } catch {
      setToast('Email Copied')
      setTimeout(() => setToast(null), 2000)
    }
  }

  type Video = {
    id: string
    title: string
    src: string
    category: 'personal' | 'commercials' | 'photo'
    cover: string
  }

  const videos: Video[] = [
    {
      id: 'a33',
      title: 'Experience Abu Dhabi - GTS',
      src: 'https://customer-dspxeeqa8b06vkql.cloudflarestream.com/956b6850ea2fc292b21ef96f2e7cd801/iframe?autoplay=true&poster=https%3A%2F%2Fcustomer-dspxeeqa8b06vkql.cloudflarestream.com%2F956b6850ea2fc292b21ef96f2e7cd801%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600',
      category: 'commercials',
      cover: 'https://ik.imagekit.io/dhlq5fcy7w/covers/barca.png'
    },
    {
      id: 'a7',
      title: 'MiZa Tenants: Ripple - MiZa Abu Dhabi',
      src: 'https://customer-dspxeeqa8b06vkql.cloudflarestream.com/a4ddc6bb65322d1491fffff7b4c7ef43/iframe?autoplay=true&poster=https%3A%2F%2Fcustomer-dspxeeqa8b06vkql.cloudflarestream.com%2Fa4ddc6bb65322d1491fffff7b4c7ef43%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600',
      category: 'commercials',
      cover: 'https://ik.imagekit.io/dhlq5fcy7w/covers/ripple.jpg'
    },
       {
      id: 'a2',
      title: 'Inclusión - Banco Santander',
      src: 'https://customer-dspxeeqa8b06vkql.cloudflarestream.com/3938e8041b92ab389f02784fd4f58d70/iframe?autoplay=true&poster=https%3A%2F%2Fcustomer-dspxeeqa8b06vkql.cloudflarestream.com%2F3938e8041b92ab389f02784fd4f58d70%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600',
      category: 'commercials',
      cover: 'https://ik.imagekit.io/dhlq5fcy7w/covers/santander.jpg'
    },
    {
      id: 'a8',
      title: 'Cadet Pilot Program - Etihad Airways',
      src: 'https://customer-dspxeeqa8b06vkql.cloudflarestream.com/faa886ad9db6fc0bbe2694f154ce17c7/iframe?autoplay=true&poster=https%3A%2F%2Fcustomer-dspxeeqa8b06vkql.cloudflarestream.com%2Ffaa886ad9db6fc0bbe2694f154ce17c7%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600',
      category: 'commercials',
      cover: 'https://ik.imagekit.io/dhlq5fcy7w/covers/airlines.jpg'
    },
     {
      id: 'a1',
      title: 'Rove Home - Dubai Marina',
      src: 'https://customer-dspxeeqa8b06vkql.cloudflarestream.com/70cbb5aa5e94642e3beec40693f1afaa/iframe?autoplay=true&poster=https%3A%2F%2Fcustomer-dspxeeqa8b06vkql.cloudflarestream.com%2F70cbb5aa5e94642e3beec40693f1afaa%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600',
      category: 'commercials',
      cover: 'https://ik.imagekit.io/dhlq5fcy7w/covers/rove.jpg'
    },
    {
      id: 'a5',
      title: 'UAE Union Day - The Crown Prince Court',
      src: 'https://customer-dspxeeqa8b06vkql.cloudflarestream.com/92547e3c7b0580651a09b45df877810b/iframe?autoplay=true&poster=https%3A%2F%2Fcustomer-dspxeeqa8b06vkql.cloudflarestream.com%2F92547e3c7b0580651a09b45df877810b%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600',
      category: 'commercials',
      cover: 'https://ik.imagekit.io/dhlq5fcy7w/covers/union.jpg'
    },
    {
      id: 'a6',
      title: 'Santander Bienestando - Banco Santander',
      src: 'https://www.youtube.com/watch?v=zGRJN3-KhSI',
      category: 'commercials',
      cover: 'https://ik.imagekit.io/dhlq5fcy7w/covers/youtube.jpg'
    },

     {
      id: 'p4',
      title: 'Els carrers i el Barça',
      src: 'https://customer-dspxeeqa8b06vkql.cloudflarestream.com/7fe4760220be7d9eecc7442ec3e6476a/iframe?autoplay=true&poster=https%3A%2F%2Fcustomer-dspxeeqa8b06vkql.cloudflarestream.com%2F7fe4760220be7d9eecc7442ec3e6476a%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600',
      category: 'personal',
      cover: 'https://ik.imagekit.io/dhlq5fcy7w/covers/barca.jpg'
    },
    {
      id: 'p1',
      title: 'UPS Spec Ad. Directed and Edited by Maria del Rio',
      src: 'https://customer-dspxeeqa8b06vkql.cloudflarestream.com/4550ad0d8df644eea0f5b96b35123c69/iframe?autoplay=true&poster=https%3A%2F%2Fcustomer-dspxeeqa8b06vkql.cloudflarestream.com%2F4550ad0d8df644eea0f5b96b35123c69%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600',
      category: 'personal',
      cover: 'https://ik.imagekit.io/dhlq5fcy7w/covers/ups.jpg'
    },
    {
      id: 'p3',
      title: 'Centelles',
      src: 'https://customer-dspxeeqa8b06vkql.cloudflarestream.com/8e1ea9704be451041da759b7574af2c4/iframe?autoplay=true&poster=https%3A%2F%2Fcustomer-dspxeeqa8b06vkql.cloudflarestream.com%2F8e1ea9704be451041da759b7574af2c4%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600',
      category: 'personal',
      cover: 'https://ik.imagekit.io/dhlq5fcy7w/covers/centelles.jpg'
    },
    {
      id: 'p2',
      title: 'Abu Dhabi Streets',
      src: 'https://customer-dspxeeqa8b06vkql.cloudflarestream.com/5be8be8cf17665e49742ddb2059b8640/iframe?autoplay=true&poster=https%3A%2F%2Fcustomer-dspxeeqa8b06vkql.cloudflarestream.com%2F5be8be8cf17665e49742ddb2059b8640%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600',
      category: 'personal',
      cover: 'https://ik.imagekit.io/dhlq5fcy7w/covers/personal1.jpg'
    },
    {
      id: 'p5',
      title: 'Hoops Sant Adrià',
      src: 'https://customer-dspxeeqa8b06vkql.cloudflarestream.com/9dce6c9eb9557d2f7634296dba169fdf/iframe?autoplay=true&poster=https%3A%2F%2Fcustomer-dspxeeqa8b06vkql.cloudflarestream.com%2F9dce6c9eb9557d2f7634296dba169fdf%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600',
      category: 'personal',
      cover: 'https://ik.imagekit.io/dhlq5fcy7w/covers/hoops.jpeg'
    },
        {
      id: 'a3',
      title: 'Securitas Direct con cerradura inteligente - Securitas Direct',
      src: 'https://customer-dspxeeqa8b06vkql.cloudflarestream.com/22367a42832deb2bcfd46dda88d67716/iframe?autoplay=true&poster=https%3A%2F%2Fcustomer-dspxeeqa8b06vkql.cloudflarestream.com%2F22367a42832deb2bcfd46dda88d67716%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600',
      category: 'commercials',
      cover: 'https://ik.imagekit.io/dhlq5fcy7w/covers/securitas.jpg'
      }
  ]

  const filtered =
    activeTab === 'about'
      ? []
      : videos.filter((v) => v.category === activeTab)

  const heroGif = 'https://ik.imagekit.io/dhlq5fcy7w/covers/rove-2.gif'

  useEffect(() => {
    document.body.style.backgroundColor = isContactHovered ? '#FFDE59' : ''
    document.body.style.transition = 'background-color 300ms'
    return () => {
      document.body.style.backgroundColor = ''
      document.body.style.transition = ''
    }
  }, [isContactHovered])

  // Basic media protection: disable right-click and image drag (can be bypassed, but raises the bar)
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null
      if (target && target.tagName === 'IMG') {
        e.preventDefault()
      }
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('dragstart', handleDragStart)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('dragstart', handleDragStart)
    }
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('success') === 'true') {
      setToast('Message sent successfully!')
      setTimeout(() => setToast(null), 3000)
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [])

  return (
    <div className={`min-h-screen text-black transition-colors duration-300 ${isContactHovered ? 'bg-[#FFDE59]' : 'bg-white'}`}>
      {toast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-black text-white max-w-md w-11/12 rounded-md shadow-lg px-5 py-4">
            <p className="text-base md:text-lg font-semibold text-center">
              {toast}
            </p>
          </div>
        </div>
      )}
      <header className="px-6 md:px-10 py-6">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-sm md:text-xl font-semibold text-left leading-tight">Maria del Río - Filmmaker, fotógrafa y editora de vídeo</h1>
          <div className="flex items-center gap-3 text-sm shrink-0">
            <a
              href="https://www.instagram.com/bymariadelrio"
              className="hidden md:inline-block text-black hover:text-[#013C88] hover:scale-125 transition-all duration-300"
              aria-label="Instagram"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="currentColor"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/maria-del-rio-/"
              className="hidden md:inline-block text-black hover:text-[#013C88] hover:scale-125 transition-all duration-300"
              aria-label="LinkedIn"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
              >
                <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="currentColor"/>
              </svg>
            </a>
            <button
              className="cta-button border border-black px-3 py-1 rounded hover:bg-black hover:text-white transition"
              onClick={() => setActiveTab('contact')}
              onMouseEnter={() => setIsContactHovered(true)}
              onMouseLeave={() => setIsContactHovered(false)}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="mt-6 md:mt-8">
          <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-md overflow-hidden">
            <img
              src={heroGif}
              alt="hero image"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="w-full max-w-3xl px-4 py-3 sm:px-6 sm:py-4 rounded">
                <p className="whitespace-nowrap text-center text-white text-sm sm:text-2xl md:text-4xl font-bold leading-tight">
                  
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav className="mt-6 grid grid-cols-2 gap-2 md:flex md:flex-nowrap md:gap-2 text-xs md:text-sm">
          {(['commercials', 'personal', 'photo', 'about'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full md:w-auto text-center px-2 py-0.5 md:px-3 md:py-1 border rounded-[5px] transition-colors ${
                activeTab === tab
                  ? 'bg-black text-white border-black'
                  : 'bg-transparent border-neutral-300 text-neutral-600 hover:border-black hover:text-black'
              }`}
            >
              {tab[0].toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      <main className="px-6 md:px-10 pb-20">
        {activeTab === 'about' ? (
          <About
            onContactClick={() => setActiveTab('contact')}
            onContactHoverChange={setIsContactHovered}
          />
        ) : activeTab === 'photo' ? (
          <Pics />
        ) : activeTab === 'contact' ? (
          <ContactForm />
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((v) => (
              <div key={v.id} className="flex flex-col">
                <VideoTile src={v.src} title={v.title} cover={v.cover} />
                <div className="mt-2 text-xs text-black">
                  {v.title}
                </div>
              </div>
            ))}
          </section>
        )}
      </main>
      <footer className="border-t border-neutral-200 px-6 md:px-10 py-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm">
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/bymariadelrio"
              className="inline-block text-black hover:text-[#013C88] hover:scale-125 transition-all duration-300"
              aria-label="Instagram"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="currentColor"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/maria-del-rio-/"
              className="inline-block text-black hover:text-[#013C88] hover:scale-125 transition-all duration-300"
              aria-label="LinkedIn"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
              >
                <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
          <div className="flex items-end gap-3 flex-col">
            <span className="font-semibold">Maria del Río. All rights reserved. 2025.</span>
            <button
              onClick={handleCopyEmail}
              className="underline hover:opacity-70"
              aria-label="Copy email to clipboard"
            >
              bymariadelrio@gmail.com
            </button>
            <span>Barcelona</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function VideoTile({ src, title, cover }: { src: string; title: string; cover?: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [, setIsPlaying] = useState(false) // eslint-disable-line @typescript-eslint/no-unused-vars
  const coverPoster = 'https://ik.imagekit.io/dhlq5fcy7w/covers/bg.jpeg'
  const [open, setOpen] = useState(false)
  const [muted, setMuted] = useState(false) // start with sound ON
  const tileCover = cover ?? coverPoster

  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be')
  const isCloudflareStream = src.includes('cloudflarestream.com')
  const buildYouTubeEmbed = (url: string, mute: boolean) => {
    try {
      const u = new URL(url)
      let id = ''
      if (u.hostname.includes('youtu.be')) {
        id = u.pathname.split('/').filter(Boolean).pop() || ''
      } else {
        id = u.searchParams.get('v') || ''
      }
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=${mute ? 1 : 0}&rel=0&playsinline=1`
    } catch {
      return url
    }
  }
  const embedUrl = isYouTube ? buildYouTubeEmbed(src, muted) : null

  useEffect(() => {
    if (!open || isYouTube || isCloudflareStream) return
    const el = videoRef.current
    if (!el) return
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onEnded = () => setIsPlaying(false)
    el.addEventListener('play', onPlay)
    el.addEventListener('pause', onPause)
    el.addEventListener('ended', onEnded)
    return () => {
      el.removeEventListener('play', onPlay)
      el.removeEventListener('pause', onPause)
      el.removeEventListener('ended', onEnded)
    }
  }, [open, isYouTube])

  useEffect(() => {
    if (!open || isYouTube || isCloudflareStream) return
    const v = videoRef.current
    if (!v) return
    v.muted = muted
    const attemptPlay = () => {
      const p = v.play()
      if (p && typeof p.catch === 'function') {
        p.catch(() => {
          // Autoplay with sound may be blocked by the browser; user can press play.
        })
      }
    }
    setTimeout(attemptPlay, 0)
  }, [open, muted, isYouTube])

  return (
    <>
      {/* Tile cover */}
      <figure className="group relative overflow-hidden rounded-md bg-neutral-100 aspect-[4/3]">
        <img
          src={tileCover}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover cursor-pointer"
          onClick={() => setOpen(true)}
        />
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="absolute inset-0 flex items-center justify-center"
          aria-label={`Open ${title}`}
        >
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-black/70 text-white text-xl transition-opacity opacity-0 group-hover:opacity-100">
            ▶
          </span>
        </button>
      </figure>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-0 sm:p-4"
          onClick={() => setOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-screen h-[85vh] sm:w-[65vw] sm:h-[75vh] bg-black rounded-none sm:rounded-lg overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {isYouTube ? (
              <iframe
                src={embedUrl ?? ''}
                title={title}
                className="w-full h-full bg-black"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : isCloudflareStream ? (
              <iframe
                src={src}
                title={title}
                className="w-full h-full bg-black"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                ref={videoRef}
                src={src}
                poster={tileCover}
                preload="metadata"
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain bg-black"
              />
            )}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute top-3 right-3 z-20 text-white bg-black/40 hover:bg-black/60 rounded px-4 py-2 text-xl sm:text-base"
            >
              ×
            </button>
            <button
              onClick={() => setMuted(!muted)}
              aria-label={muted ? 'Unmute' : 'Mute'}
              className="absolute top-3 left-3 z-20 text-white bg-black/40 hover:bg-black/60 rounded px-4 py-2 text-xs sm:text-sm"
            >
              {muted ? 'Unmute' : 'Mute'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
