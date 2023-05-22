import {
  EmailIcon,
  InstagramIcon,
  LinkedInIcon,
  ManiLogo,
  PhoneIcon,
} from "../../assets/Images";

const Footer = () => {
  return (
    <div
      id="contact"
      className="pt-[100px] container items-start gap-6 flex flex-col flex-wrap justify-center md:justify-between md:flex-row pb-[120px] w-full"
    >
      {/* Name and Logo */}
      <div className="flex justify-center items-center gap-4">
        <ManiLogo className="h-11 w-11" />
        <span className="font-extrabold text-xl text-[#747272]">
          Shunmuga Prasanna
        </span>
      </div>

      {/*Contact details -- email and phoneNumber */}
      <div className="flex flex-col items-start gap-5 flex-wrap">
        <a className="font-semibold no-underline text-lg text-[#747272] flex justify-center items-center gap-2">
          <EmailIcon fill="#6c6b6b" className="h-6 w-6" />
          shunmugaprasanna.k@flyerssoft.com{" "}
        </a>

        <a className="font-semibold no-underline text-lg text-[#747272]  flex justify-center items-center gap-2">
          <PhoneIcon fill="#6c6b6b" className="h-6 w-6" /> +91 9488063762{" "}
        </a>
      </div>
      {/* Insta and Linked Icon */}
      <div className="flex gap-5 flex-wrap">
        <a
          // href="https://ig.me/1TlX1BZZyTziTVB"
          // target="_blank"
          className="font-semibold no-underline flex justify-center items-center gap-2"
        >
          <InstagramIcon fill="#6c6b6b" className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/shunmuga-prasanna-81593b214/"
          target="_blank"
          className="font-semibold no-underline flex justify-center items-center gap-2 cursor-pointer"
        >
          <LinkedInIcon fill="#6c6b6b" className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
