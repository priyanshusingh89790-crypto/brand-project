const Storyfrontpage = () => {
  return (
    <div className="flex flex-col lg:max-w-[80%] lg:mx-auto px-4 py-10 md:px-10 lg:flex-row lg:items-start lg:justify-center lg:gap-2 overflow-x-hidden">

      {/* IMAGE */}
      <div className="flex justify-center h-[400px] max-w-full md:h-[40%] md:w-full lg:h-[600px] lg:w-[40%] lg:pt-20 mx-auto">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/aef1de46711469.5861020074b4f.jpg"
          className="h-full w-full rounded-xl object-cover"
          alt="our story image"
        />
      </div>

      {/* TEXT BLOCK */}
      <div className="flex flex-col lg:w-1/2">
        <h1 className="pt-5 text-sm font-medium text-amber-500 md:text-4xl font-lato lg:text-base">
          OUR STORY
        </h1>

        <p className="pt-3 text-2xl font-bold text-black md:text-2xl lg:text-5xl leading-snug">
          A Place Where Moments Are Savored
        </p>

        {/* PARAGRAPHS */}
        <div className="flex flex-col gap-2 pt-4 pb-5 text-stone-500">
          <span className="text-base md:text-lg lg:text-lg leading-6 font-lato">
            Since 2016, I Heart Café has grown from a small dream in Bhimtal
            into a beloved destination for coffee lovers, travelers, and locals alike.
          </span>
          <span className="text-base md:text-lg lg:text-lg leading-6 font-lato">
            From day one, people have loved us for our handcrafted coffee,
            peaceful surroundings, and the comfort of walking into a space that
            feels like home.
          </span>

          <p className="flex flex-col gap-1 pt-4">
            <b className="text-base md:text-lg lg:text-[16px] font-medium font-lato">
              At I Heart Café, our philosophy is simple:
            </b>
            <b className="text-base md:text-lg lg:text-[16px] font-medium font-lato">
              Great coffee, honest food, and a space where memories are made.
            </b>
            <b className="text-base md:text-lg lg:text-[16px] font-medium font-lato">
              Whether you're here for your first cup of the morning, a quiet work
              corner, or a meal with friends, every visit is crafted to be warm,
              welcoming, and unforgettable.
            </b>
          </p>
        </div>

        {/* ICON GRID */}
        <div className="ml-0 grid lg:max-w-[80%] grid-cols-1 lg:gap-8 md:gap-15 gap-8 md:grid-cols-3 lg:py-5 ">

          {/* Fresh Ingredients */}
          <div className="flex flex-col items-center gap-1 lg:gap-2 text-center px-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="#b45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="h-6 w-6">
                <path d="M5 20c8 0 14-6 14-14" />
                <path d="M5 20c0-8 6-14 14-14" />
              </svg>
            </div>
            <h3 className="font-display mb-1 text-lg font-semibold">Fresh Ingredients</h3>
            <p className="text-[15px] text-stone-500 font-lato leading-5 lg:max-w-[200px] lg:text-start">
              Locally sourced, organic produce delivered daily to our kitchen.
            </p>
          </div>

          {/* Made With Love */}
          <div className="flex flex-col items-center gap-2 lg:gap-2 text-center ">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="#b45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="h-6 w-6">
                <path d="M20.8 4.6c-1.7-1.7-4.5-1.7-6.3 0l-.5.5-.5-.5c-1.7-1.7-4.5-1.7-6.3 0-1.7 1.7-1.7 4.5 0 6.3l6.8 6.8 6.8-6.8c1.8-1.8 1.8-4.6 0-6.3z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold">Made with Love</h3>
            <p className="text-[15px] text-stone-500 font-lato leading-5 w-full lg:max-w-[180px] lg:text-start pl-5">
              Every dish is crafted with passion by our award-winning chefs.
            </p>
          </div>

          {/* Artisan Coffee */}
          <div className="flex flex-col items-center gap-2 lg:gap-2 text-center px-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="#b45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="h-6 w-6">
                <path d="M3 8h14v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
                <path d="M17 8h2a3 3 0 0 1 0 6h-2" />
                <path d="M6 2c0 1 1 2 1 3s-1 2-1 3" />
                <path d="M10 2c0 1 1 2 1 3s-1 2-1 3" />
                <path d="M14 2c0 1 1 2 1 3s-1 2-1 3" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold">Artisan Coffee</h3>
            <p className="text-[15px] pl-4 text-stone-500 font-lato leading-5 w-full lg:max-w-[180px] lg:text-start ">
              Premium beans roasted in-house for the perfect cup every time.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Storyfrontpage
