import Button from "../../Components/Button";

const Hero = () => {
  return (
    <div className=" flex flex-col items-center justify-center relative px-4 md:px-0 h-screen ">
      <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent "></div>
      <video
        className="z-[-1] absolute w-full h-full object-cover left-0 right-0 top-0 bottom-0 "
        loop
        muted
        autoPlay
        src="https://prod-streaming-video-msn-com.akamaized.net/13d2da4a-b642-4dc5-96ea-c13210066046/3fc2b744-a5f4-4031-be45-1e4c72010eb6.mp4"
        poster="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOEhUA.img"
      ></video>
      <div className="absolute bottom-[-1] w-full h-full bg-gradient-to-t from-black to-transparent "></div>
      <div className="container flex flex-col px-4 md:px-0 justify-center items-center z-0">
        <h5 className="text-white text-center text-xl md:text-3xl font-bold">
          Front-End Developer
        </h5>
        <div className="text-5xl md:text-5xl text-[#aeabab]  text-center font-bold flex flex-col pt-3 gap-2">
          <span>Hello👋, my name </span>
          <span> is Shunmuga Prasanna</span>
        </div>
        <p className="text-sm md:text-base font-normal text-[#aeabab] text-center pt-8">
          I'm a passionate front-end developer with expertise in creating
          user-friendly web applications.
        </p>
        <div className="flex gap-4 pt-8">
          <Button variant="primary" className="w-[115px] h-[43px] rounded-lg">
            <a
              className="text-white font-semibold no-underline"
              href="#projects"
            >
              Projects
            </a>
          </Button>
          <Button className="w-[115px] h-[43px] bg-transparent border border-[#E0E0E0] rounded-lg ">
            <a
              className="text-white font-semibold no-underline"
              href="https://www.linkedin.com/in/shunmuga-prasanna-81593b214/"
              target="_blank"
            >
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
