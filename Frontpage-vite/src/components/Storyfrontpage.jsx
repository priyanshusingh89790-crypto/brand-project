const Storyfrontpage = () => {
  return (
    <div className="flex  flex-col px-4 pb-10 lg:w-[72%] lg:flex-row lg:items-start lg:justify-center lg:gap-20 ">
      {/* IMAGE */}
      <div className="flex justify-center lg:h-130 lg:w-[44%] lg:pt-20">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/aef1de46711469.5861020074b4f.jpg"
          className="h-full w-80 rounded-xl object-cover md:h-96 md:w-96 lg:h-125 lg:w-full"
          alt="our story image"
        />
      </div>

      {/* TEXT BLOCK */}
      <div className="flex flex-col lg:w-1/2">
        <h1 className="pt-5 text-sm font-medium text-amber-500 md:text-4xl font-lato lg:text-base">
          OUR STORY
        </h1>

        <p className="pt-3 text-2xl font-bold text-black md:text-2xl lg:text-5xl">
          A Place Where Moments Are Savored
        </p>

        {/* PARAGRAPH */}
        <div className="flex flex-col gap-2 pt-4 pb-5 text-stone-500">
          <span className="text-base md:text-lg lg:text-lg leading-6 font-lato">
            Since 2016, I Heart Café has grown from a small dream in Bhimtal
            into a beloved destination for coffee lovers, travelers, and locals
            alike.
          </span>
          <span className="text-base md:text-lg lg:text-lg leading-6 font-lato">
            From day one, people have loved us for our handcrafted coffee,
            peaceful surroundings, and the comfort of walking into a space that
            feels like home.
          </span>
          <p className="flex flex-col  gap-1 pt-4">
          <b className="text-base md:text-lg lg:text-[16px] font-medium font-lato">
            At I Heart Café, our philosophy is simple:
          </b>
          <b className="text-base md:text-lg lg:text-[16px] font-medium font-lato">
            Great coffee, honest food, and a space where memories are made.
          </b>
          <b className="text-base md:text-lg lg:text-[16px] font-medium font-lato">
            Whether you’re here for your first cup of the morning, a quiet work
            corner, or a meal with friends, every visit is crafted to be warm,
            welcoming, and unforgettable.
          </b>
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 py-10 md:grid-cols-3 md:gap-12">
          {/* Fresh Ingredients - REAL Leaf Icon */}
          <div className="flex flex-col items-center lg:pr-5 gap-3 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#b45309"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M5 20c8 0 14-6 14-14" />
                <path d="M5 20c0-8 6-14 14-14" />
              </svg>
            </div>
            <div>
              <h3 className="font-display mb-1 text-lg font-semibold">
                Fresh Ingredients
              </h3>
              <p className="text-muted-foreground text-start lg:pl-2 text-[15px] text-stone-500 font-lato leading-5">
                Locally sourced, organic produce delivered daily to our kitchen.
              </p>
            </div>
          </div>

          {/* Made With Love - Heart (Perfect) */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b45309"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M20.8 4.6c-1.7-1.7-4.5-1.7-6.3 0l-.5.5-.5-.5c-1.7-1.7-4.5-1.7-6.3 0-1.7 1.7-1.7 4.5 0 6.3l6.8 6.8 6.8-6.8c1.8-1.8 1.8-4.6 0-6.3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-display mb-1 text-lg font-semibold">
                Made with Love
              </h3>
              <p className="text-muted-foreground text-start lg:pl-6 text-[15px] text-stone-500 font-lato leading-5">
                Every dish is crafted with passion by our award-winning chefs.
              </p>
            </div>
          </div>

          {/* Artisan Coffee - REAL Icon */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b45309"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M3 8h14v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
                <path d="M17 8h2a3 3 0 0 1 0 6h-2" />
                <path d="M6 2c0 1 1 2 1 3s-1 2-1 3" />
                <path d="M10 2c0 1 1 2 1 3s-1 2-1 3" />
                <path d="M14 2c0 1 1 2 1 3s-1 2-1 3" />
              </svg>
            </div>
            <div>
              <h3 className="font-display mb-1 text-lg font-semibold">
                Artisan Coffee
              </h3>
              <p className="text-muted-foreground text-start lg:pl-7 text-[15px] text-stone-500 font-lato leading-5">
                Premium beans roasted in-house for the perfect cup every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Storyfrontpage
