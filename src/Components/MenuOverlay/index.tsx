type MenuOverlayProps = { navbarOpen: boolean; onClick: () => void };

const MenuOverlay = ({ navbarOpen, onClick }: MenuOverlayProps) => {
  return (
    <nav
      className={`flex-col fixed items-center  w-[50%] top-[90px] right-0 flex z-40 h-[20%] bg-black
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
          href="#skill"
          onClick={onClick}
        >
          Skills
        </a>
        <a
          className="mb-2 text-white font-semibold no-underline"
          href="#projects"
          onClick={onClick}
        >
          Projects
        </a>
        <a
          className="mb-2 text-white font-semibold no-underline"
          href="#contact"
          onClick={onClick}
        >
          Contacts
        </a>
      </ul>
    </nav>
  );
};
export default MenuOverlay;
