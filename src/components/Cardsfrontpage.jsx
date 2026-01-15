import { useNavigate } from 'react-router-dom'
const Cardsfrontpage = () => {
  const navigate = useNavigate()
  return (
    <div className="relative h-auto lg:h-[90vh] min-h-[90vh] lg:pt-20 pt-10 pb-6">
      <div className="flex flex-col items-center lg:pb-10 justify-center">
        <h1 className="text-base text-amber-500 md:text-base font-lato lg:text-base">
          WHAT WE OFFER
        </h1>
        <h2 className="text-4xl text-black md:text-4xl p-1 lg:text-6xl font-semibold">
          Our Services
        </h2>
        <p className="flex text-center item-center w-[80%] p-3 lg:w-[50%]">
          <span className="text-base text-stone-500 font-lato md:text-base lg:text-lg leading-6">
            Whether you prefer dining in or ordering
          
            online, we bring the same exceptional
          
            quality to every experience.
          </span>
        </p>
      </div>
      {/* CARDS SECTION */}
<div className="flex flex-col lg:flex-row items-center justify-center lg:max-w-[56%] mx-auto gap-6 lg:gap-2 py-10">
        {/* STORE CARD */}
        <div
          onClick={() => navigate('/shopping')}
          className="animate-slideRight h-[30vh] w-full py-4 px-4 mx-auto max-w-[90%] flex cursor-pointer group items-center justify-start rounded-xl border-[1px] border-stone-400/30 bg-stone-200/50 hover:shadow-xl transition-all duration-100 hover:scale-101 hover:border-amber-500 lg:h-88 lg:w-[500px] lg:pl-12 "
        >
          <button className="text-center cursor-pointer">
            <h1 className="flex gap-2 items-center text-base font-lato duration-300 transition-colors text-yellow-500 md:text-lg lg:items-center lg:text-base">
              {/* Shopping Bag Icon - same as IconShowcase */}
              <div className="lg:w-14 lg:h-14 lg:p-4 p-2 w-12 h-12 group-hover:bg-amber-500 bg-stone-400/30 rounded-xl">
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

            <p className="flex pt-2 pb-2 lg:pt-5 lg:pb-5 lg:text-4xl text-2xl font-semibold text-stone-800">
              
              Cafe Collection
            </p>
            <span className="flex text-base font-lato text-gray-600 md:text-base lg:text-base">
              Shop Smarter, Live Better.
            </span>
            <span className="flex  pb-2 lg:pb-5 font-lato text-base text-gray-600 md:text-base lg:text-base">
              Everything you love, delivered to your door.
            </span>
            <span className="mt-2 block w-[50%] rounded-xl border-[1px] bg-white p-2 text-sm font-bold text-stone-700 md:text-base lg:w-[60%] lg:text-base font-lato">
              Let’s Shop ❯
            </span>
          </button>
        </div>

        {/* MENU CARD */}
        <div
          onClick={() => window.open('https://iheartcafeindia.com/')}
          className="animate-slideLeft py-4 px-4 mx-auto max-w-[90%] flex h-[30vh] w-full pb-4 group cursor-pointer transition-all duration-100 items-center justify-start rounded-xl border-[1px] border-stone-400/30 bg-stone-200/50 pr-12 hover:shadow-xl hover:border-amber-500 hover:scale-101 lg:h-88 lg:w-[500px] lg:pl-12"
        >
          <button className="text-center cursor-pointer group-hover:border-amber-500">
            <h1 className="flex items-center gap-2 text-base text-yellow-500 md:text-lg lg:text-base font-lato">
              <div className="lg:w-[55px] w-[47px] lg:h-[55px] h-[45px] lg:p-4 p-3 bg-stone-400/30 rounded-xl group-hover:bg-amber-500 group-hover:text-white/80">
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

            <p className="flex pt-2 lg:pt-5 pb-2 lg:pb-5 text-2xl lg:text-4xl font-semibold text-stone-800">
            
              Dine with Us
            </p>
            <span className="flex text-base font-lato text-gray-600 md:text-lg lg:text-base">
              Fresh, flavorful & handcrafted.
            </span>
            <span className="flex pb-1 font-lato text-gray-600">
              Your favorites, ready when you are.
            </span>
            <span className="mt-4 md:w-[70%] block w-[60%] border-[1px] font-lato rounded-xl bg-white p-2 text-sm font-bold text-stone-700 md:text-lg lg:w-[70%] lg:text-base">
              Explore Menu ❯
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Cardsfrontpage
