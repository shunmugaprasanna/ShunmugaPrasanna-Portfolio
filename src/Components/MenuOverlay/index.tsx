type MenuOverlayProps = { navbarOpen: boolean; onClick: () => void };

const MenuOverlay = ({ navbarOpen, onClick }: MenuOverlayProps) => {
  return (
    <nav
      className={`flex-col fixed flex top-0 left-0 w-full p-10 z-40 h-screen pt-24 bg-black
       text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
         navbarOpen
           ? "opacity-100 translate-x-0"
           : "opacity-0 -translate-x-full"
       }`}
    >
      <ul className="flex flex-col items-start list-none ">
        <a
          className="mb-2 text-white font-semibold no-underline"
          href="#aboutme"
          onClick={onClick}
        >
          About
        </a>
        <a
          className="mb-2 text-white font-semibold no-underline"
          href="#contact"
          onClick={onClick}
        >
          Contacts
        </a>
        <a
          className="mb-2 text-white font-semibold no-underline"
          href="#projects"
          onClick={onClick}
        >
          Projects
        </a>
        <a
          className="mb-4 text-[#6c6b6b] font-bold no-underline"
          href="/"
          onClick={onClick}
        >
          Close
        </a>
      </ul>
    </nav>
  );
};
export default MenuOverlay;
