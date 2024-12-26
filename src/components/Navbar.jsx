import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Menu from "./Menu"

function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0 && !scrolled) {
      setScrolled(true);
    } else if (latest === 0 && scrolled) {
      setScrolled(false);
    }
  });

  const defaultClasses = "transition-all absolute inset-0 -z-1";

  const navBarClasses = scrolled
    ? `${defaultClasses} border-b bg-white/75 backdrop-blur-lg`
    : `${defaultClasses} bg-transparent`;

  return (
    <div className="sticky inset-x-0 top-0 w-full z-50">
      <div className={navBarClasses}></div>
      <div className="mx-auto w-full max-w-screen-xl p-3 lg:px-20 relative">
        <div className="flex items-center justify-between">
          <div>
            <img src="../logo_dark.svg" alt="" />
          </div>
          <div className="hidden md:block">
            <nav className="flex flex-row gap-5">
              <a href="/" className="text-gray-700 font-semibold transition hover:scale-105 cursor-pointer">About Us</a>
              <a href="#features" className="text-gray-700 font-semibold transition hover:scale-105 cursor-pointer">Features</a>
              <a href="#pricing" className="text-gray-700 font-semibold transition hover:scale-105 cursor-pointer">Pricing</a>
              
            </nav>
          </div>
          <div className="space-x-3 hidden md:block">
            <button className="bg-black text-white px-3 py-1 rounded-md hover:ring-gray-400 hover:ring-2 duration-200">
              Log in
            </button>
            <button className="bg-black text-white px-3 py-1 rounded-md hover:ring-gray-400 hover:ring-2 duration-200">
              Sign up
            </button>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
