import { useNavigate } from 'react-router-dom'
const Cardsfrontpage = () => {
  const navigate = useNavigate()
  return (
    <div className="relative lg:h-[90vh] pt-30">
      <div className="flex flex-col items-center lg:pb-10 justify-center">
        <h1 className="text-xl text-amber-500 md:text-xl font-lato lg:text-base">
          WHAT WE OFFER
        </h1>
        <h2 className="text-3xl font-medium text-black md:text-4xl lg:p-1 lg:text-6xl lg:font-semibold">
          Our Services
        </h2>
        <p className="flex text-center item-center lg: lg:p-3 lg:w-[50%]">
          <span className="text-base text-stone-500 font-lato md:text-base lg:text-lg leading-6">
            Whether you prefer dining in or ordering
          
            online, we bring the same exceptional
          
            quality to every experience.
          </span>
        </p>
      </div>
      {/* CARDS SECTION */}
      <div className="grid max-w-[1200px] items-center justify-center gap-8 pt-8 pb-10 md:grid-cols-2 lg:align-center">
        {/* STORE CARD */}
        <div
          onClick={() => navigate('/shopping')}
          className="animate-slideRight flex h-64 w-96 cursor-pointer group items-center justify-center rounded-xl border-[1px] border-stone-400/30 bg-stone-200/50 shadow-xl transition-all duration-100 hover:scale-101 hover:border-amber-500 lg:h-88 lg:w-[500px] lg:pr-20"
        >
          <button className="text-center cursor-pointer">
            <h1 className="flex gap-2 items-center text-base font-lato duration-300 transition-colors text-yellow-500 md:text-lg lg:items-center lg:text-base">
              {/* Shopping Bag Icon - same as IconShowcase */}
              <div className="w-14 h-14 p-4 group-hover:bg-amber-500 bg-stone-400/30 rounded-xl">
              <span className="relative inline-block h-7 w-6 group-hover:text-white/80 text-amber-500">
                {/* Bag body */}
                <span className="absolute inset-x-0.5 top-1.5 bottom-0 rounded-b-lg bg-current" />
                {/* Bag handles */}
                <span className="absolute top-0 left-1 h-2 w-1 rounded-t-full border-[1.5px] border-current bg-transparent" />
                <span className="absolute top-0 right-1 h-2 w-1 rounded-t-full border-[1.5px] border-current bg-transparent" />
              </span>
              </div>
              E-COMMERCE
            </h1>

            <p className="flex pt-5 pb-5 text-4xl font-semibold text-stone-800">
              
              Cafe Collection
            </p>
            <span className="flex text-base font-lato text-gray-600 md:text-lg lg:text-base">
              Shop Smarter, Live Better.
            </span>
            <span className="flex pb-5 font-lato text-base text-gray-600 md:text-lg lg:text-base">
              Everything you love, delivered to your door.
            </span>
            <span className="mt-2 block w-[80%] rounded-xl border-[1px] bg-white p-2 text-base font-bold text-stone-700 md:text-lg lg:w-[60%] lg:text-base font-lato">
              Let’s Shop ❯
            </span>
          </button>
        </div>

        {/* MENU CARD */}
        <div
          onClick={() => window.open('https://iheartcafeindia.com/')}
          className="animate-slideLeft flex h-64 w-96 pb-3 group cursor-pointe items-center justify-center rounded-xl border-[1px] border-stone-400/30 bg-stone-200/50 pr-12 shadow-xl hover:border-amber-500 hover:scale-101 lg:h-88 lg:w-[500px] lg:pr-20"
        >
          <button className="text-center cursor-pointer group-hover:border-amber-500">
            <h1 className="flex items-center gap-2 text-base text-yellow-500 md:text-lg lg:text-base font-lato">
              <div className="w-[55px] h-[55px] p-4 bg-stone-400/30 rounded-xl group-hover:bg-amber-500 group-hover:text-white/80">
              <span className="relative flex h-5 w-5 items-center justify-center">
                {/* Fork */}
                <span className="absolute left-0 flex flex-col items-center">
                  <span className="flex gap-px">
                    <span className="h-3 w-1 rounded-t-full bg-current" />
                    <span className="h-3 w-1 rounded-t-full bg-current" />
                    <span className="h-3 w-1 rounded-t-full bg-current" />
                  </span>
                  <span className="h-3 w-1 rounded-b-full bg-current" />
                </span>
                {/* Knife */}
                <span className="absolute right-0 flex flex-col items-center">
                  <span className="h-3 w-1 rounded-t-sm bg-current" />
                  <span className="h-3 w-1 rounded-b-full bg-current" />
                </span>
              </span>
              </div>
              CAFE EXPERIENCE
            </h1>

            <p className="flex pt-5 pb-5 text-4xl font-semibold text-stone-800">
            
              Dine with Us
            </p>
            <span className="flex text-base font-lato text-gray-600 md:text-lg lg:text-base">
              Fresh, flavorful & handcrafted.
            </span>
            <span className="flex pb-2 font-lato text-gray-600">
              Your favorites, ready when you are.
            </span>
            <span className="mt-2 block w-[80%] border-[1px] font-lato rounded-xl bg-white p-2 text-base font-bold text-stone-700 md:text-lg lg:w-[70%] lg:text-base">
              Explore Menu ❯
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Cardsfrontpage
