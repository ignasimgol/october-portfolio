export type Tab =
  | 'home'
  | 'commercials'
  | 'about'
  | 'photo'
  | 'contact'
  | 'social_media'

type NavigationProps = {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

const tabs: readonly Tab[] = [
  'home',
  'commercials',
  'social_media',
  'photo',
  'about',
]

const labels: Record<Tab, string> = {
  home: 'Home',
  commercials: 'Commercials',
  social_media: 'Social Media',
  photo: 'Photo',
  about: 'About',
  contact: 'Contact',
}

function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <div className="mt-6 mb-8 md:mt-0 md:mb-12 md:sticky md:top-4 md:z-40">
      <div className="mx-auto w-full md:w-fit md:rounded-xl md:bg-white/60 md:backdrop-blur-md md:border md:border-black/5 md:shadow-[0_1px_12px_rgba(0,0,0,0.06)] md:px-3 md:py-3">
        <nav className="grid grid-cols-2 gap-2 text-xs md:text-sm md:flex md:flex-nowrap md:justify-center md:gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`w-full md:w-auto text-center px-2 py-1.5 md:px-3 md:py-1 border rounded-[5px] transition-colors ${
                tab === 'home' ? 'col-span-2 md:col-span-1' : ''
              } ${
                activeTab === tab
                  ? tab === 'home'
                    ? 'bg-[#FFDE59] text-black border-[#FFDE59]'
                    : 'bg-black text-white border-black'
                  : 'bg-transparent border-neutral-300 text-neutral-600 hover:border-black hover:text-black'
              }`}
            >
              {labels[tab]}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Navigation