import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AppLayout = () => {
  const [open, setopen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToFooterSection = () => {
    document.getElementById("footer-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col">

      {/* FULL WIDTH BACKGROUND HEADER */}
      <header
        className={`fixed top-0 left-0 z-50 w-full h-[10vh] 
        transition-all duration-300
        ${scrolled ? "bg-amber-50 text-black shadow-2xl border-black" : "bg-black/50 text-white border-white/40"}
        `}
      >
        {/* CONTENT CONTAINER */}
        <div className="max-w-[70%] mx-auto px-4 py-10 flex items-center justify-between relative">
          
          {/* LOGO / CLICK HOME */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer"
          >
          </div>

          {/* TITLE CENTERED */}
          <h1
            className={`text-xl md:text-2xl font-bold lg:text-3xl absolute
            transition-all duration-300
            ${scrolled ? "text-black" : "text-white"} `}
          >
            I Heart Cafe
          </h1>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center lg:gap-10 text-sm font-medium">
            <a onClick={() => navigate("/")} className="cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-orange-500 font-lato">Home</a>
            <a onClick={scrollToFooterSection} className="cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-orange-500 font-lato">About</a>
            <a onClick={scrollToFooterSection} className="cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-orange-500 font-lato">Contact</a>
            <a onClick={() => navigate("/cart")} className="cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-orange-500 font-lato">Cart</a>
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setopen(!open)}
            className="flex cursor-pointer flex-col space-y-1 lg:hidden"
          >
            {["", "", ""].map((_, i) => (
              <span
                key={i}
                className={`block w-6 h-[2px] transition-all duration-300 ${
                  scrolled ? "bg-black" : "bg-white"
                }`}
              ></span>
            ))}
          </button>

        </div>
      </header>

      {/* MOBILE DROPDOWN NAV */}
      {open && (
        <nav
          className={`fixed pt-[70px] lg:hidden left-0 w-full z-40 flex flex-col gap-4 py-4 px-6 text-lg 
          transition-all duration-300 
          ${
            scrolled
              ? "bg-amber-50 text-black border-black"
              : "bg-black/70 text-white border-white/40"
          }
        `}
        >
          <a onClick={() => (navigate("/"), setopen(false))} className="hover:text-orange-500">Home</a>
          <a onClick={() => (scrollToFooterSection(), setopen(false))} className="hover:text-orange-500">About</a>
          <a onClick={() => (scrollToFooterSection(), setopen(false))} className="hover:text-orange-500">Contact</a>
          <a onClick={() => (navigate("/cart"), setopen(false))} className="hover:text-orange-500">Cart</a>
        </nav>
      )}
    </div>
  );
};

export default AppLayout;
