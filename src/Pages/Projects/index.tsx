import Cards from "../../Components/Cards";
import { ExpensoIcon, FidioIcon } from "../../assets/Images";

const Project = () => {
  return (
    <div
      id="projects"
      className="pt-[144px] flex flex-col items-center justify-center flex-wrap container"
    >
      <div className="flex flex-col  items-center justify-center gap-4 pb-8">
        <h1 className="text-[#aeabab] text-5xl font-bold ">Projects</h1>
        <span className="h-1 w-[100px] bg-[#6c6b6b] rounded-2xl"></span>
      </div>
      <div className="flex flex-wrap w-full justify-center items-center lg:justify-between">
        <Cards
          className="mb-4"
          title="JIO"
          description="I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
          src="https://tesseract.in/0f90e3e08da7dfb6c541c8985a331fab.svg"
        />
        <Cards
          className="mb-4"
          title="Expenso"
          imagebg="bg-[#242424]"
          description="I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
          src={ExpensoIcon}
        />
        <Cards
          className="mb-4 h-full"
          title="Fidio"
          imagebg="bg-white"
          // src="https://i.pinimg.com/originals/aa/88/6d/aa886d2003d09d9e049d3acc88b327fc.jpg"
          src={FidioIcon}
          description="I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
        />
      </div>
    </div>
  );
};

export default Project;
