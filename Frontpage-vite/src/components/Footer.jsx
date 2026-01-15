import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
   <footer id="footer-section" className="bg-amber-950 text-white">
  <div className="max-w-7xl pt-10 mx-auto w-full px-6">
    
    {/* Top Section */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-50 pt-6">
      
      {/* Column 1 */}
      <div>
        <h1 className="pb-5 text-2xl font-bold text-stone-300">I Heart Café</h1>
        <h2 className="text-stone-400 text-sm">
          Where culinary artistry meets warm hospitality. Experience exceptional dining in an atmosphere designed for unforgettable moments.
        </h2>

        <h3 className="text-xl pt-10 lg:text-lg font-semibold text-stone-300">Guest Experiences & Stories</h3>

        <ul className="flex gap-5 pt-4 pb-6">
          {/* Insta */}
          <p
  onClick={() => window.open("https://www.instagram.com/iheartcafehimalayas/?hl=en")}
  className="cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black/60 text-white hover:bg-stone-200 hover:text-amber-600 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-[22px] h-[22px]"
  >
    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6-2a1 1 0 110 2 1 1 0 010-2z" />
  </svg>
</p>


          {/* FB */}
         <p
  onClick={() => window.open("https://www.facebook.com/iheartcafehimalayas?locale=de_DE")}
  className="cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black/60 text-white hover:bg-stone-200 hover:text-amber-600 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 112 112"
    fill="currentColor"
    className="w-[22px] h-[22px]"
  >
    <path d="M57.2 0C25.6 0 .1 25.3.1 56.4c0 28.2 20.4 
    51.6 47.2 55.8V73H33V56.4h14.3V43.9c0-14.2 
    8.4-22 21.3-22 6.1 0 12.5 1.1 12.5 1.1v13.7h-7c-6.9 
    0-9 4.3-9 8.7v10.9h15.7l-2.5 16.6H65.1v39.1c26.8-4.2 
    47.2-27.6 47.2-55.8C112.3 25.3 86.8 0 57.2 0z"/>
  </svg>
</p>


          {/* Google */}
          <p
  onClick={() =>
    window.open(
      "https://www.google.com/search?q=i+heart+cafe+reviews#lrd=0x39a09824ffffffdf:0xcec3e836dbaeaf80,1"
    )
  }
  className="cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black/60 text-white hover:bg-stone-200 hover:text-amber-600 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-[22px] h-[22px]"
  >
    <path d="M21.8 10.1h-9.8v3.8h5.7c-.3 1.9-2.1 5.6-5.7 5.6-3.4 0-6.2-2.8-6.2-6.2s2.8-6.2 
    6.2-6.2c1.9 0 3.1.8 3.8 1.5l2.7-2.6C16.8 3.7 14.6 2.8 
    12 2.8 6.9 2.8 2.8 6.9 2.8 12s4.1 9.2 9.2 9.2c5.3 0 
    8.8-3.7 8.8-9 0-.7-.1-1.3-.2-2.1z"/>
  </svg>
</p>

        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h1 className="text-2xl pb-2 lg:text-lg font-semibold text-stone-300">Quick Links</h1>
        <ul className="text-sm ">
          <p onClick={() => navigate("/")} className="cursor-pointer text-stone-400 hover:text-amber-500 p-2 font-lato">Home</p>
          <p onClick={() => navigate("/")} className="cursor-pointer text-stone-400 hover:text-amber-500 p-2 font-lato">About</p>
          <p onClick={() => navigate("/")} className="cursor-pointer text-stone-400 hover:text-amber-500 p-2 font-lato">Contact</p>
          <p onClick={() => navigate("/cart")} className="cursor-pointer text-stone-400 hover:text-amber-500 p-2 font-lato">Cart</p>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h1 className="text-xl pb-3 lg:text-lg font-semibold text-stone-300">Stay Updated</h1>
        <p className="text-stone-400 text-sm w-[80%] font-lato">Subscribe for exclusive offers and culinary updates.</p>
        <form className="flex gap-2 text-sm pt-5 pb-6">
          <input className="rounded-xl p-2 bg-white/20 flex-1 font-lato" type="email" placeholder="Enter your email" />
          <button className="bg-amber-600 p-2 text-[14px] rounded-xl text-white font-lato" type="submit">Join Us</button>
        </form>
      </div>

    </div>

    {/* Divider */}
    <div className="border-t border-white/30 my-6"></div>

    {/* Bottom Bar */}
    <div className="flex flex-col lg:flex-row justify-between  items-center pb-6 text-stone-400 text-sm gap-3">
      <p className="font-lato">© 2025 I Heart Café. All rights reserved.</p>
      <p className="flex gap-6 ">
        <span className="font-lato">Privacy Policy</span>
        <span className="font-lato">Terms of Use</span>
      </p>
    </div>

  </div>
</footer>

  );
};

export default Footer;
