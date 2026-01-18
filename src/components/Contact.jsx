const Contact = () => {
  return (
    <div className="  h-auto lg:p-10 p-5 items-center justify-center w-full">
      {/* HEADING */}
      
      
      <div className="flex flex-col items-center justify-center gap-1 px-4 py-6 text-center">
        <h1 className="text-base font-lato text-amber-500 md:text-base lg:text-base">
          GET IN TOUCH
        </h1>
        <h1 className="text-3xl font-semibold md:text-4xl lg:text-6xl">
          Contact Us
        </h1>
        <p className="text-stone-700 font-lato md:text-xl lg:pt-2 lg:text-lg">
          Have questions or special requests? We'd love to hear from you.
        </p>
      </div>

      {/* INFO CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 pb-15 pt-5 lg:grid-cols-4 gap-6 max-w-auto lg:max-w-[70%] mx-auto">
      {/* Visit Us - Location Pin Icon */}
      <div className="flex flex-col items-center lg:w-full text-center gap-4 p-6 bg-stone-200/20 border border-stone-300 rounded-lg">
        <div className="w-12 h-12 rounded-full bg-stone-300/30 flex items-center justify-center">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path 
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" 
              stroke="#f59e0b" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <circle cx="12" cy="9" r="2.5" stroke="#f59e0b" strokeWidth="2" />
          </svg>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">Visit Us</h3>
          <p className="text-sm font-lato text-stone-700">Mehra Estate, Mehragaon</p>
          <p className="text-sm font-lato text-stone-700">Bhimtal, Uttarakhand</p>
        </div>
      </div>

      {/* Call Us - Phone Icon */}
      <div className="flex flex-col items-center w-full text-center gap-4 p-6 bg-stone-200/20 border border-stone-300 rounded-lg">
        <div className="w-12 h-12 rounded-full bg-stone-300/30 flex items-center justify-center">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path 
              d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" 
              stroke="#f59e0b" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">Call Us</h3>
          <p className="text-sm text-stone-600 font-lato">+91 8273552253</p>
          <p className="text-sm text-stone-600 font-lato">+91 8273552253</p>
        </div>
      </div>

      {/* Mail Us - Envelope Icon */}
      <div className="flex flex-col items-center w-full text-center gap-4 p-6 bg-stone-200/20 border border-stone-300 rounded-lg">
        <div className="w-12 h-12 rounded-full bg-stone-300/30 flex items-center justify-center">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="#f59e0b" strokeWidth="2" />
            <path d="M2 6l10 7 10-7" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">Mail Us</h3>
          <p className="text-sm text-stone-600 font-lato">contact@iheartcafe.com</p>
          <p className="text-sm text-stone-600 font-lato">support@iheartcafe.com</p>
        </div>
      </div>

      {/* Opening Hours - Clock Icon */}
      <div className="flex flex-col items-center w-full text-center gap-4 p-6 bg-stone-200/20 border border-stone-300 rounded-lg">
        <div className="w-12 h-12 rounded-full bg-stone-300/30 flex items-center justify-center">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#f59e0b" strokeWidth="2" />
            <path d="M12 6v6l4 2" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">Opening Hours</h3>
          <p className="text-sm text-stone-600 font-lato">Mon – Fri: 9 AM – 5 PM</p>
          <p className="text-sm text-stone-600 font-lato">Closed Wednesday</p>
        </div>
      </div>
    </div>


      {/* MAP */}
    
        <div className="h-[250px] w-[102%]  overflow-hidden lg:max-w-[70%] mx-auto rounded-2xl md:h-[400px] lg:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2731522453166!2d79.52034531430426!3d29.368877481927387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a05567a0b4cf1d%3A0x8a9b71a1c9eadb0f!2sI%20Heart%20Cafe%20Himalayas%2C%20Mehra%20Estate%2C%20Mehragaon%2C%20Bhimtal%2C%20Uttarakhand%20263136%2C%20India!5e0!3m2!1sen!2sin!4v1709499987654"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    
    
    
  )
}

export default Contact
