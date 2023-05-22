const Hamburger = ({ onClick, isOpen }: any) => {
  return (
    <div onClick={onClick} className=" md:hidden lg:hidden cursor-pointer w-8 ">
      <span
        className={` h-1 block p-0 m-1 bg-[#E0E0E0]  ${
          !isOpen
            ? "w-4"
            : "w-8 duration-75 translate-x-0 translate-y-[12px] -rotate-45"
        }`}
      ></span>
      <span
        className={`w-6 h-1 block p-0 m-1 bg-[#E0E0E0] ${
          !isOpen ? "" : "opacity-0"
        }`}
      ></span>
      <span
        className={`w-8 h-1 block p-0 m-1 bg-[#E0E0E0] 
      ${
        !isOpen ? "" : "duration-75 translate-x-0 translate-y-[-4px] rotate-45"
      }`}
      ></span>
    </div>
  );
};

export default Hamburger;
