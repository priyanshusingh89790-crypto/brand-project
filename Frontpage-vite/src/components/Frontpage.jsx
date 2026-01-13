import { useNavigate } from 'react-router-dom'
import Cardsfrontpage from './Cardsfrontpage'
import Storyfrontpage from './Storyfrontpage'
import Reservetable from './Reservetable'
import Contact from './Contact'

const Frontpage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="relative min-h-screen w-full text-white">
        <div className="relative h-screen w-full text-white">
          {/* Background Video */}
          <div className="absolute inset-0 h-[95vh] w-full overflow-hidden">
            <img
              src="https://iheartcafeindia.com/images/about1.jpg"
              alt="front page image"
              className="h-screen w-screen object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* MAIN CONTENT */}
         {/* OUTER BORDER BOX */}
<div className="absolute inset-0 mr-10 mb-20 ml-10 border-[1px] border-white/30 pointer-events-none"></div>

{/* INNER CONTENT (free + centered) */}
<div className="relative flex flex-col items-center justify-center p-80 pb-10 gap-4">
  
  <h1 className="rounded-full bg-stone-700/50 p-1 px-5 text-xl text-amber-500 md:text-2xl lg:text-base font-lato">
    EST.2016
  </h1>

  <b className="animate-slideUp text-lg font-bold text-white drop-shadow-lg md:text-xl lg:text-6xl text-center">
    Welcome to <b className="text-amber-500">I Heart Café</b>
  </b>

  <p className="w-[80%] md:w-[80%] lg:p-5 lg:w-[70%]">
    <span className=" text-base font-lato font-[400px] leading-0.5 text-white drop-shadow-lg delay-200 md:text-xl lg:text-[20px]">
      —your comfort spot in Haldwani & Bhimtal. Coffee, food, and great vibes.  
      Work, relax, or meet friends — you’re welcome here.
    </span>
  </p>

  <div className="flex items-center gap-4">
  <button
    onClick={() =>
      window.open('https://www.google.com/maps/reserve/v/dine/c/pri-JBkaSKo?...')
    }
    className="cursor-pointer rounded-lg bg-amber-400 p-2 w-[140px] text-lg lg:text-base font-lato text-black hover:bg-amber-200 hover:text-black"
  >
    Reserve Now
  </button>

  <button className="cursor-pointer rounded-lg bg-black/60 p-2 font-lato text-[16px] text-white hover:bg-white/60 hover:text-black">
    View Menu
  </button>
</div>


</div>

        </div>
      </div>

      <div className="flex flex-col items-center justify-center pb-10">
        <Storyfrontpage />

        <Reservetable />
        <Cardsfrontpage />
        <Contact />
      </div>
    </div>
  )
}

export default Frontpage
