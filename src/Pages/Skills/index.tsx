import { Css, Html, Js, ReactLogo } from "../../assets/Images";

const Skills = () => {
  return (
    <div id="skill">
      <div className="flex flex-col  items-center justify-center gap-4 pb-8">
        <h1 className="text-[#aeabab] text-5xl font-bold ">Skills</h1>
        <span className="h-1 w-[100px] bg-[#6c6b6b] rounded-2xl"></span>
      </div>
      <div className="flex justify-evenly flex-wrap">
        <span className="text-[#aeabab] text-xl font-bold flex flex-col items-center gap-3">
          <Html
            fill="#6c6b6b"
            className="md:h-[100px] md:w-[100px]  h-[50px] w-[50px]"
          />
          HTML
        </span>
        <span className="text-[#aeabab] text-xl font-bold flex flex-col items-center gap-3">
          <Css
            fill="#6c6b6b"
            className="md:h-[100px] md:w-[100px]  h-[50px] w-[50px]"
          />
          CSS
        </span>
        <span className="text-[#aeabab] text-xl font-bold flex flex-col items-center gap-3">
          <Js
            fill="#6c6b6b"
            className="md:h-[100px] md:w-[100px] h-[50px] w-[50px]"
          />
          JavaScript
        </span>
        <span className="text-[#aeabab] text-xl font-bold flex flex-col items-center gap-3 ">
          <ReactLogo
            fill="#6c6b6b"
            className="md:h-[100px] md:w-[100px]  h-[50px] w-[50px]"
          />
          React
        </span>
      </div>
    </div>
  );
};

export default Skills;
