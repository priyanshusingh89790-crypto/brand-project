const ReserveTable = () => {
  return (
    <div className="relative h-auto ">
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 px-4">
        <h1 className="p-2 text-xl lg:pb-3  font-medium text-amber-500 md:text-3xl font-lato lg:text-base">
          RESERVATIONS
        </h1>

        <h1 className="text-3xl font-semibold lg:pb-2 text-white md:text-3xl lg:text-6xl font-display">
          Book Your Table
        </h1>

        <span className="pt-2 pb-4 lg:pb-6 text-center font-lato lg:w-[30%] text-stone-300 md:text-lg lg:text-lg leading-6">
          Reserve your spot for an unforgettable dining experience. We'll confirm your booking within 24 hours.
        </span>

        <form className="flex w-full max-w-[600px] flex-col gap-6 lg:text-base rounded-2xl bg-stone-200 p-6 text-black md:max-w-[700px] lg:max-w-[900px]">
          {/* TWO COLUMN GRID ON LAPTOP */}
          <div className="flex flex-col lg:p-5 gap-7 ">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="flex font-lato items-center gap-2 mb-1 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="#f59e0b" strokeWidth="2" />
                  <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Full Name
              </label>
              <input
                className="rounded-lg border focus:border-stone-400 focus:border-2 focus:outline-none focus:ring-amber-500 focus:ring-2 text-[14px] font-lato border-stone-300 bg-white/60 p-2 "
                placeholder="Full Name"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col">
              <label className="flex items-center font-lato gap-2 mb-1 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="#f59e0b" strokeWidth="2" />
                  <path d="M2 6l10 7 10-7" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Email Address
              </label>
              <input
                type="email"
                className="rounded-lg border focus:border-stone-400 focus:border-2 text-[14px] focus:outline-none focus:ring-amber-500 focus:ring-2 font-lato border-stone-300 bg-white/50 p-2"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label className="flex items-center font-lato gap-2 mb-1 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Phone Number
              </label>
              <input
                className="rounded-lg border border-stone-300 font-lato focus:border-stone-400 text-[14px] focus:border-2 focus:outline-none focus:ring-amber-500 focus:ring-2 border-amber-300 bg-white/50 p-2"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Number of Guests */}
            <div className="flex flex-col">
              <label className="flex items-center font-lato gap-2 mb-1 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle cx="9" cy="7" r="3" stroke="#f59e0b" strokeWidth="2" />
                  <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="17" cy="7" r="3" stroke="#f59e0b" strokeWidth="2" />
                  <path d="M21 21v-2a4 4 0 00-3-3.87" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Number of Guests
              </label>
              <input
                type="number"
                className="rounded-lg border border-stone-300 font-lato focus:border-stone-400 text-[14px] focus:border-2 focus:outline-none focus:ring-amber-500 focus:ring-2 border-amber-300 bg-white/50 p-2"
                placeholder="2 Guests"
              />
            </div>

            {/* Preferred Date */}
            <div className="flex flex-col">
              <label className="flex items-center font-lato gap-2 mb-1 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="#f59e0b" strokeWidth="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Preferred Date
              </label>
              <input
                type="date"
                className="rounded-lg border border-stone-300 font-lato focus:border-stone-400 text-[14px] focus:border-2 focus:outline-none focus:ring-amber-500 focus:ring-2 border-amber-300 bg-white/50 p-2"
              />
            </div>

            {/* Preferred Time */}
            <div className="flex flex-col">
              <label className="flex items-center font-lato gap-2 mb-1 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#f59e0b" strokeWidth="2" />
                  <path d="M12 6v6l4 2" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Preferred Time
              </label>
              <input
                type="time"
                className="rounded-lg border border-stone-300 font-lato focus:border-stone-400 text-[14px] focus:border-2 focus:outline-none focus:ring-amber-500 focus:ring-2 border-amber-300 bg-white/50 p-2"
                placeholder="Select a time"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="rounded-lg bg-amber-400 lg:text-[16px] font-lato hover:bg-amber-300 p-2 text-lg  text-black transition-colors"
          >
            Reserve Now
          </button>
          </div>
        </form>
      </div>

      {/* IMAGE BACKGROUND */}
      <img
        src="/bg reserveimage.jpeg"
        alt="background image"
        className="h-screen w-screen object-cover"
      />
    </div>
  );
};

export default ReserveTable;
