import {
  EmailIcon,
  InstagramIcon,
  LinkedInIcon,
  ManiLogo,
  // PhoneIcon,
} from "../../assets/Images";

const Footer = () => {
  return (
    <div
      id="contact"
      className="pt-[100px] container  gap-6 flex flex-col flex-wrap justify-center md:justify-around md:flex-row pb-[120px] w-full"
    >
      {/* Name and Logo */}
      <div className="flex justify-center items-center gap-4">
        <ManiLogo className="h-11 w-11" />
        <span className="font-extrabold text-xl text-[#747272]">
          Shunmuga Prasanna
        </span>
      </div>

      <div className="flex gap-5 flex-wrap items-center justify-center">
        <a
          href="https://instagram.com/prasannakannan97/"
          target="_blank"
          className="font-semibold no-underline flex justify-center items-center gap-2 cursor-pointer"
        >
          <InstagramIcon fill="#6c6b6b" className="h-6 w-6 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/shunmuga-prasanna-81593b214/"
          target="_blank"
          className="font-semibold no-underline flex justify-center items-center gap-2 cursor-pointer"
        >
          <LinkedInIcon fill="#6c6b6b" className="h-6 w-6" />
        </a>
        <a
          href="mailto:shunmugaprasanna.k@flyerssoft.com"
          target="_blank"
          className="font-semibold no-underline text-lg text-[#747272] flex justify-center items-center gap-2"
        >
          <EmailIcon fill="#6c6b6b" className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
