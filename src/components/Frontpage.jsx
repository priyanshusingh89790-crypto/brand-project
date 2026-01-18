import Cardsfrontpage from './Cardsfrontpage'
import Storyfrontpage from './Storyfrontpage'
import Reservetable from './Reservetable'
import Contact from './Contact'
import Footer from './Footer'
import Feedback from './Feedback/Feedback'
const Frontpage = () => {
  return (
    <div>
      <div className="relative lg:h-auto w-full text-white">
        <div className="relative min-h-[101vh] lg:min-h-[101vh] w-full text-white">
          {/* Background Video */}
          <div className="absolute inset-0 h-full w-full overflow-hidden">
            <img
              src="https://iheartcafeindia.com/images/about1.jpg"
              alt="front page image"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* MAIN CONTENT */}
          
          <div className="relative flex min-h-[90vh] flex-col items-center justify-center gap-4">
            <h1 className="font-lato rounded-full bg-stone-700/50 p-1 px-5 text-sm text-amber-500 md:text-base lg:text-base">
              EST.2016
            </h1>

            <b className="animate-slideUp text-center text-2xl font-bold text-white drop-shadow-lg md:text-4xl lg:text-6xl">
              Welcome to <b className="text-amber-500">I Heart Café</b>
            </b>

            <p className="w-[90%] lg:text-start text-center pb-3 md:w-[80%] md:p-3 lg:w-[40%] lg:p-5">
              <span className="font-lato text-base leading-snug font-[400px] text-white drop-shadow-lg delay-200 md:text-xl lg:text-[20px]">
                —your comfort spot in Haldwani & Bhimtal. Coffee, food, and
                great vibes. Work, relax, or meet friends — you’re welcome here.
              </span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-4">
              <button
                onClick={() =>
                  window.open(
                    'https://www.google.com/maps/reserve/v/dine/c/pri-JBkaSKo?...',
                  )
                }
                className="font-lato w-[120px] cursor-pointer rounded-lg bg-amber-400 p-2 text-[13px] text-black hover:bg-amber-200 hover:text-black md:w-[120px] lg:w-[140px] lg:text-base"
              >
                Reserve Now
              </button>

              <button className="font-lato w-[120px] cursor-pointer rounded-lg bg-black/60 p-2 text-[13px] text-white hover:bg-white/60 hover:text-black md:w-[120px] lg:w-[140px] lg:text-base">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div id="about">
          <Storyfrontpage />
        </div>
        <div id="reservation">
          <Reservetable />
        </div>

        <div id="services">
          <Cardsfrontpage />
        </div>
        <div id="feedback">
          <Feedback />
        </div>

        <div id="contact">
          <Contact />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Frontpage
