import { Mani } from "../../assets/Images";

const Aboutme = () => {
  return (
    <div
      id="aboutme"
      className="container items-center justify-between  my-12 first-letter flex flex-col  p-4"
    >
      <div className="flex  items-center justify-center gap-4 pb-8 flex-col">
        <h1 className="text-[#aeabab] text-5xl font-bold ">About Me</h1>
        <span className="h-1 w-[100px] bg-[#6c6b6b] rounded-2xl"></span>
      </div>
      <div className="flex items-center justify-center flex-col-reverse  lg:flex-row ">
        <p className="text-xl text-center lg:text-left font-normal text-[#747272] pt-8 flex-[1.5]">
          I'm a passionate front-end developer with expertise in creating
          user-friendly web applications. With a solid foundation in HTML, CSS,
          and JavaScript, along with proficiency in frameworks like Tailwind CSS
          and TypeScript, I specialize in crafting responsive designs that
          provide optimal user experiences.
          <br />I am excited about new opportunities to collaborate and bring
          innovative ideas to life. If you're looking for a front-end developer
          who is passionate, detail-oriented, and dedicated to delivering
          exceptional web experiences, I would love to connect.
        </p>

        <div className=" h-2/4  w-2/4  rounded-2xl flex items-center  justify-center z-10 pt-5 flex-[1.5]">
          <img className="rounded-xl w-[200px]" src={Mani}></img>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
{
  /* Throughout my career, I have collaborated with diverse teams to
deliver high-quality websites and web applications that meet client
requirements and exceed expectations. */
}
