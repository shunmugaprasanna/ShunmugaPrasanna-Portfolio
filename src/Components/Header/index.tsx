import { useState } from "react";
import Hamburger from "../Hamburger";
import MenuOverlay from "../MenuOverlay";
import { ManiLogo } from "../../assets/Images";

const Header = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleHamy = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white container flex py-6">
      {/* desktop nav */}
      <nav className="items-center justify-between w-full hidden md:flex z-0">
        <div className="flex items-center gap-3">
          <ManiLogo className="h-11 w-11" />
          <h1 className="font-bold ">Shunmuga Prasanna K</h1>
        </div>

        <div className="flex gap-6 ">
          <a className="text-white font-semibold no-underline" href="#aboutme">
            About
          </a>
          <a className="text-white font-semibold no-underline" href="#projects">
            Projects
          </a>
          <a className="text-white font-semibold no-underline" href="#contact">
            Contact
          </a>
        </div>
      </nav>
      <div className="flex md:hidden justify-between items-center w-full p-4">
        <h1 className="font-bold text-base">Shunmuga Prasanna K</h1>
        <Hamburger onClick={handleHamy} isOpen={nav} />
      </div>

      {/* mobile nav */}
      <MenuOverlay navbarOpen={nav} onClick={() => setNav(!nav)} />
    </div>
  );
};

export default Header;
