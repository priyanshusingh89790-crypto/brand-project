import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const AppLayout = () => {
  const [open, setopen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToFooterSection = () => {
    document.getElementById('footer-section')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className="flex flex-col">
      {/* FULL WIDTH BACKGROUND HEADER */}
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 md:h-[6vh] lg:h-[10vh] ${scrolled ? 'border-black bg-amber-50 text-black shadow-2xl' : 'border-white/40 bg-black/50 text-white'} `}
      >
        {/* CONTENT CONTAINER */}
        <div className="relative mx-auto flex max-w-full items-center justify-between overflow-hidden px-4 py-4 md:max-w-[90%] md:py-8 lg:max-w-[70%] lg:py-10 xl:max-w-[70%]">
          {/* LOGO / CLICK HOME */}
          <div
            onClick={() => navigate('/')}
            className="flex cursor-pointer items-center"
          ></div>

          {/* TITLE CENTERED */}
          <h1
            className={`absolute text-lg font-bold transition-all duration-300 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${scrolled ? 'text-black' : 'text-white'} `}
          >
            I Heart Cafe
          </h1>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center text-xs font-medium sm:text-sm md:text-base lg:flex lg:gap-10 lg:text-base xl:text-base">
            <a
              onClick={() => navigate('/')}
              className="font-lato cursor-pointer hover:border-b-2 hover:border-orange-500 hover:text-orange-500"
            >
              Home
            </a>
            <a
              onClick={scrollToFooterSection}
              className="font-lato cursor-pointer hover:border-b-2 hover:border-orange-500 hover:text-orange-500"
            >
              About
            </a>
            <a
              onClick={scrollToFooterSection}
              className="font-lato cursor-pointer hover:border-b-2 hover:border-orange-500 hover:text-orange-500"
            >
              Contact
            </a>
            <a
              onClick={() => navigate('/cart')}
              className="font-lato cursor-pointer hover:border-b-2 hover:border-orange-500 hover:text-orange-500"
            >
              Cart
            </a>
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setopen(!open)}
            className="flex cursor-pointer flex-col space-y-1 lg:hidden"
          >
            {['', '', ''].map((_, i) => (
              <span
                key={i}
                className={`block h-[2px] w-6 transition-all duration-300 ${
                  scrolled ? 'bg-black' : 'bg-white'
                }`}
              ></span>
            ))}
          </button>
        </div>
      </header>

      {/* MOBILE DROPDOWN NAV */}
      {open && (
        <nav
          className={`fixed left-0 z-40 flex w-full flex-col gap-4 p-4 pt-[70px] text-lg transition-all duration-300 lg:hidden ${
            scrolled
              ? 'border-black bg-amber-50 text-black'
              : 'border-white/40 bg-black/70 text-white'
          } `}
        >
          <div className="flex flex-col gap-10 p-2 md:p-5 lg:p-10">
            <a
              onClick={() => (navigate('/'), setopen(false))}
              className="font-lato hover:text-orange-500"
            >
              Home
            </a>
            <a
              onClick={() => (scrollToFooterSection(), setopen(false))}
              className="font-lato hover:text-orange-500"
            >
              About
            </a>
            <a
              onClick={() => (scrollToFooterSection(), setopen(false))}
              className="font-lato hover:text-orange-500"
            >
              Contact
            </a>
            <a
              onClick={() => (navigate('/cart'), setopen(false))}
              className="font-lato hover:text-orange-500"
            >
              Cart
            </a>
          </div>
        </nav>
      )}
    </div>
  )
}

export default AppLayout
