const ReserveTable = () => {
  return (
    <div className="relative h-auto ">
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 px-4">
        <h1 className="p-2 text-base lg:pb-3  font-medium text-amber-500 md:text-3xl font-lato lg:text-base">
          RESERVATIONS
        </h1>

        <h1 className="text-2xl font-semibold lg:pb-2 text-white md:text-3xl lg:text-6xl font-display">
          Book Your Table
        </h1>

        <span className="lg:pt-2 pb-2 text-[14px] lg:pb-6 text-center font-lato lg:w-[30%] text-stone-300 md:text-lg lg:text-lg leading-6">
          Reserve your spot for an unforgettable dining experience. We'll confirm your booking within 24 hours.
        </span>

        <form className="flex w-full max-w-[600px] flex-col gap-6 lg:text-base rounded-2xl bg-stone-200 p-6 text-black md:max-w-[700px] lg:max-w-[900px]">
          {/* TWO COLUMN GRID ON LAPTOP */}
          <div className="flex flex-col lg:p-5 gap-7 ">
          <div className="grid grid-cols-1 gap-4 md:gap-7 lg:gap-7 lg:grid-cols-2">
            {/* Full Name */}
            <div className="flex gap-2 flex-col">
              <label className="flex font-lato items-center gap-2 mb-1 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="#f59e0b" strokeWidth="2" />
                  <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Full Name
              </label>
              <input
                className="rounded-lg border focus:border-stone-300 focus:border-2 focus:outline-none focus:ring-amber-500 focus:ring-2 text-[14px] font-lato border-stone-300 bg-white/60 p-2 "
                placeholder="Priyanshu Verma"
              />
            </div>

            {/* Email Address */}
            <div className="flex gap-2 flex-col">
              <label className="flex items-center font-lato gap-2 mb-1 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="#f59e0b" strokeWidth="2" />
                  <path d="M2 6l10 7 10-7" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Email Address
              </label>
              <input
                type="email"
                className="rounded-lg border focus:border-stone-300 focus:border-2 text-[14px] focus:outline-none focus:ring-amber-500 focus:ring-2 font-lato border-stone-300 bg-white/50 p-2"
                placeholder="priyanshu@example.com"
              />
            </div>

            {/* Phone Number */}
            <div className="flex gap-2 flex-col">
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
                className="rounded-lg border  font-lato focus:border-stone-300 text-[14px] focus:border-2 focus:outline-none focus:ring-amber-500 focus:ring-2 border-stone-300 bg-white/50 p-2"
                placeholder="+91 "
              />
            </div>

            {/* Number of Guests */}
            <div className="flex gap-2 flex-col">
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
                className="rounded-lg border font-lato focus:border-stone-300 text-[14px] focus:border-2 focus:outline-none focus:ring-amber-500 focus:ring-2 border-stone-300 bg-white/50 p-2"
                placeholder="2 Guests"
              />
            </div>

            {/* Preferred Date */}
            <div className="flex gap-2 flex-col">
              <label className="flex items-center font-lato gap-2 mb-1 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="#f59e0b" strokeWidth="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Preferred Date
              </label>
              <input
                type="date"
                className="rounded-lg border font-lato focus:border-stone-300 text-[14px] focus:border-2 focus:outline-none focus:ring-amber-500 focus:ring-2 border-stone-300 bg-white/50 p-2"
              />
            </div>

            {/* Preferred Time */}
            <div className="flex gap-2 flex-col">
              <label className="flex items-center font-lato gap-2 mb-1 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#f59e0b" strokeWidth="2" />
                  <path d="M12 6v6l4 2" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Preferred Time
              </label>
              <input
                type="time"
                className="rounded-lg border font-lato focus:border-stone-300 text-[14px] focus:border-2 focus:outline-none focus:ring-amber-500 focus:ring-2 border-stone-300 bg-white/50 p-2"
                placeholder="Select a time"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="rounded-lg bg-amber-400 lg:text-[16px] font-lato hover:bg-amber-300 p-2 text-base  text-black transition-colors"
          >
            Reserve Now
          </button>
          </div>
        </form>
      </div>

      {/* IMAGE BACKGROUND */}
      <img
        src="data:image/jpeg;base64,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"
        alt="background image"
        className="h-screen w-screen object-cover"
      />
    </div>
  );
};

export default ReserveTable;
