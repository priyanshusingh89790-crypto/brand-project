import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const AppLayout = () => {
  const [open, setopen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const menuRef=useRef()
  useEffect(() => {
  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setopen();
    }
  }

  if (open) {
    document.addEventListener("mousedown", handleClickOutside);
  } else {
    document.removeEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [open]);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({
      behavior: 'smooth',
    })
  }
  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className="flex flex-col">
      {/* FULL WIDTH BACKGROUND HEADER */}
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 md:h-[6vh] lg:h-[7vh] ${scrolled ? 'border-black bg-amber-50 text-black shadow-2xl' : 'border-white/40 bg-black/50 text-white'} `}
      >
        {/* CONTENT CONTAINER */}
        <div className="relative mx-auto flex max-w-full items-center justify-between overflow-hidden px-4 py-4 md:max-w-[90%] md:py-8 lg:max-w-[70%] lg:py-4 xl:max-w-[70%]">
          {/* LOGO / CLICK HOME */}
          <div
            onClick={() => navigate('/')}
            className="flex cursor-pointer items-center"
          ></div>

          {/* TITLE CENTERED */}
          <h1
            className={`fixed text-lg font-bold transition-all duration-300 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${scrolled ? 'text-stone-800' : 'text-white'} `}
          >
            I Heart Cafe
          </h1>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center font-medium sm:text-sm md:text-base lg:flex lg:gap-10 lg:text-[14px] xl:text-[14px]">
            <a
              onClick={() => navigate('/')}
              className="font-lato cursor-pointer hover:border-b-2 hover:border-orange-500 hover:text-orange-500"
            >
              Home
            </a>
            <a
              onClick={scrollToAbout}
              className="font-lato cursor-pointer hover:border-b-2 text-[14px] hover:border-orange-500 hover:text-orange-500"
            >
              About
            </a>
            <a
              onClick={scrollToContact}
              className="font-lato cursor-pointer hover:border-b-2 text-[14px] hover:border-orange-500 hover:text-orange-500"
            >
              Contact
            </a>
            <a
              onClick={scrollToReservation}
              className={"font-lato cursor-pointer hover:border-b-2 text-[14px] hover:border-orange-500 hover:text-orange-500 "}
            >
              Reservation
            </a>
            <a
              onClick={scrollToServices}
              className="font-lato cursor-pointer text-black p-2  text-[14px] rounded-lg bg-amber-400 hover:bg-orange-200 hover:text-black"
            >
              Ways to Enjoy
            </a>
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
  onClick={() => setopen(!open)}
  className="flex cursor-pointer flex-col space-y-1 lg:hidden"
>
  {['top', 'middle', 'bottom'].map((pos, i) => (
    <span
      key={i}
      className={`
        block h-[2px] w-6 transition-all duration-300
        ${scrolled ? 'bg-black' : 'bg-white'}
        ${
          open
            ? pos === 'top'
              ? 'translate-y-[6px] rotate-45'
              : pos === 'middle'
              ? 'opacity-0'
              : '-translate-y-[6px] -rotate-45'
            : ''
        }
      `}
    ></span>
  ))}
</button>

          
          
        </div>
      </header>

      {/* MOBILE DROPDOWN NAV */}
      {open && (
        <nav ref={menuRef}
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
              onClick={() => (scrollToAbout(), setopen(false))}
              className="font-lato hover:text-orange-500"
            >
              About
            </a>
            <a
              onClick={() => (scrollToContact(), setopen(false))}
              className="font-lato hover:text-orange-500"
            >
              Contact
            </a>
            <a
              onClick={() => (scrollToServices(), setopen(false))}
              className="font-lato hover:text-orange-500"
            >
              Ways to Enjoy
            </a>
          </div>
        </nav>
      )}
      
    </div>
  )
}

export default AppLayout
