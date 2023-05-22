import ExpensoIcon from "./ExpensoIcon.png";
import Yellow from "./Yellow.png";
import JioIcon from "./JioIcon.png";
import Mani from "./Mani.png";
import FidioIcon from "./FidioIcon.png";

export { ExpensoIcon, Yellow, JioIcon, Mani, FidioIcon };

type IconProps = {
  className?: string;
  fill?: string;
  onClick?: () => void;
};

export const HeroIcon = ({ className, fill }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 720 629"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="#B99BF9"
        clip-rule="evenodd"
        d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z"
        fill={fill}
      />
    </svg>
  );
};

export const CloseIcon = ({ className, fill }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 384 512"
    >
      <path
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        fill={fill}
      />
    </svg>
  );
};
export const LinkedInIcon = ({ className, fill }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_345_11)">
        <path
          d="M18.5576 0H1.44241C0.645752 0 0 0.645752 0 1.44241V18.5576C0 19.3542 0.645752 20 1.44241 20H18.5576C19.3542 20 20 19.3542 20 18.5576V1.44241C20 0.645752 19.3542 0 18.5576 0ZM7.09412 15.1172H4.65866V7.79007H7.09412V15.1172ZM5.87646 6.78955H5.8606C5.04333 6.78955 4.51477 6.22696 4.51477 5.52383C4.51477 4.80484 5.05951 4.25781 5.89264 4.25781C6.72577 4.25781 7.23846 4.80484 7.25433 5.52383C7.25433 6.22696 6.72577 6.78955 5.87646 6.78955ZM15.8759 15.1172H13.4407V11.1974C13.4407 10.2122 13.0881 9.54041 12.2069 9.54041C11.5341 9.54041 11.1334 9.99359 10.9573 10.4311C10.8929 10.5876 10.8772 10.8064 10.8772 11.0254V15.1172H8.44193C8.44193 15.1172 8.47382 8.47748 8.44193 7.79007H10.8772V8.82751C11.2009 8.32825 11.7799 7.6181 13.0721 7.6181C14.6744 7.6181 15.8759 8.66531 15.8759 10.9158V15.1172Z"
          fill="#F4F5F5"
        />
      </g>
      <defs>
        <clipPath id="clip0_345_11">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const EmailIcon = ({ className, fill }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_345_15)">
        <path
          d="M11.6714 12.2536C11.1739 12.5853 10.5959 12.7607 10 12.7607C9.40414 12.7607 8.82617 12.5853 8.32859 12.2536L0.133164 6.78984C0.0876953 6.75953 0.0433984 6.72793 0 6.69543V15.6484C0 16.6749 0.833008 17.4896 1.84113 17.4896H18.1588C19.1853 17.4896 20 16.6566 20 15.6484V6.69539C19.9565 6.72797 19.9121 6.75965 19.8665 6.79L11.6714 12.2536Z"
          fill="#F4F5F5"
        />
        <path
          d="M0.783203 5.81477L8.97863 11.2786C9.28887 11.4854 9.64441 11.5888 9.99996 11.5888C10.3555 11.5888 10.7111 11.4854 11.0214 11.2786L19.2168 5.81477C19.7072 5.48801 20 4.94113 20 4.3509C20 3.33602 19.1743 2.51039 18.1595 2.51039H1.84051C0.825664 2.51043 0 3.33606 0 4.35188C0 4.94113 0.292812 5.48801 0.783203 5.81477Z"
          fill="#F4F5F5"
        />
      </g>
      <defs>
        <clipPath id="clip0_345_15">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const PhoneIcon = ({ className, fill }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_345_20)">
        <path
          d="M18.7719 14.125C18.7206 14.0844 15 11.4025 13.9787 11.595C13.4912 11.6812 13.2125 12.0138 12.6531 12.6794C12.5631 12.7869 12.3469 13.0444 12.1788 13.2275C11.8252 13.1122 11.4804 12.9718 11.1469 12.8075C9.42533 11.9694 8.03437 10.5784 7.19625 8.85687C7.03179 8.52339 6.89143 8.17855 6.77625 7.825C6.96 7.65625 7.2175 7.44 7.3275 7.3475C7.99 6.79125 8.32312 6.5125 8.40938 6.02375C8.58625 5.01125 5.90625 1.265 5.87812 1.23125C5.75653 1.05754 5.59784 0.913039 5.41355 0.808189C5.22925 0.70334 5.02395 0.640768 4.8125 0.625C3.72625 0.625 0.625 4.64813 0.625 5.32562C0.625 5.365 0.681875 9.3675 5.6175 14.3881C10.6331 19.3181 14.635 19.375 14.6744 19.375C15.3525 19.375 19.375 16.2737 19.375 15.1875C19.3594 14.9768 19.2972 14.7722 19.1929 14.5884C19.0886 14.4047 18.9448 14.2464 18.7719 14.125Z"
          fill="#F4F5F5"
        />
      </g>
      <defs>
        <clipPath id="clip0_345_20">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const ManiLogo = ({ className, fill }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 18 15"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_350_97)">
        <path
          d="M13.154 11.7598C13.3434 11.4672 13.4543 11.116 13.4543 10.7414C13.4543 10.3667 13.3434 10.0133 13.154 9.72051H3.39014L3.3904 14.9999H5.40326V11.7597H13.1541L13.154 11.7598Z"
          fill="#414042"
        />
        <path
          d="M13.7964 3.2403H4.49408V5.27949H13.7987C14.4019 5.27949 14.9518 5.52769 15.347 5.9304C15.7445 6.33311 15.9895 6.88556 15.9895 7.49894C15.9895 7.92505 15.8716 8.323 15.666 8.66015C15.9826 9.28529 16.1582 9.99463 16.1582 10.7415C16.1582 10.8398 16.1558 10.9358 16.1466 11.0319C17.265 10.2662 18 8.96929 18 7.49894C18 5.14838 16.1166 3.2403 13.7964 3.2403Z"
          fill="#414042"
        />
        <path
          d="M11.6057 6.48047H4.20484C2.99417 6.48047 2.01286 5.48633 2.01286 4.25983C2.01286 3.03333 2.99417 2.03918 4.20484 2.03918H11.6057V0H4.20484C1.88253 0 0 1.90715 0 4.25983C0 6.61251 1.88253 8.51966 4.20484 8.51966H11.6057H11.608C12.8187 8.51966 13.8 9.51381 13.8 10.7403C13.8 11.9668 12.8187 12.9609 11.608 12.9609H6.54332V15.0001H11.6058C13.9281 15.0001 15.8106 13.093 15.8106 10.7403C15.8106 8.38762 13.9281 6.48047 11.6058 6.48047H11.6057Z"
          fill="#D0D0D0"
        />
      </g>
      <defs>
        <clipPath id="clip0_350_97">
          <rect width="18" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const InstagramIcon = ({ className, fill }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_345_7)">
        <path
          d="M11.7578 10C11.7578 10.9708 10.9708 11.7578 10 11.7578C9.02924 11.7578 8.24219 10.9708 8.24219 10C8.24219 9.02924 9.02924 8.24219 10 8.24219C10.9708 8.24219 11.7578 9.02924 11.7578 10Z"
          fill="#F4F5F5"
        />
        <path
          d="M12.9688 4.6875H7.03125C5.73883 4.6875 4.6875 5.73883 4.6875 7.03125V12.9688C4.6875 14.2612 5.73883 15.3125 7.03125 15.3125H12.9688C14.2612 15.3125 15.3125 14.2612 15.3125 12.9688V7.03125C15.3125 5.73883 14.2612 4.6875 12.9688 4.6875ZM10 12.9297C8.38455 12.9297 7.07031 11.6154 7.07031 10C7.07031 8.38455 8.38455 7.07031 10 7.07031C11.6154 7.07031 12.9297 8.38455 12.9297 10C12.9297 11.6154 11.6154 12.9297 10 12.9297ZM13.3594 7.22656C13.0357 7.22656 12.7734 6.96426 12.7734 6.64062C12.7734 6.31699 13.0357 6.05469 13.3594 6.05469C13.683 6.05469 13.9453 6.31699 13.9453 6.64062C13.9453 6.96426 13.683 7.22656 13.3594 7.22656Z"
          fill="#F4F5F5"
        />
        <path
          d="M14.7266 0H5.27344C2.36572 0 0 2.36572 0 5.27344V14.7266C0 17.6343 2.36572 20 5.27344 20H14.7266C17.6343 20 20 17.6343 20 14.7266V5.27344C20 2.36572 17.6343 0 14.7266 0ZM16.4844 12.9688C16.4844 14.9072 14.9072 16.4844 12.9688 16.4844H7.03125C5.09277 16.4844 3.51562 14.9072 3.51562 12.9688V7.03125C3.51562 5.09277 5.09277 3.51562 7.03125 3.51562H12.9688C14.9072 3.51562 16.4844 5.09277 16.4844 7.03125V12.9688Z"
          fill="#F4F5F5"
        />
      </g>
      <defs>
        <clipPath id="clip0_345_7">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const FidioLogo = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 150 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="mask0_777_8607"
        // style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="150"
        height="46"
      >
        <rect width="150" height="46" fill="url(#pattern0)" />
      </mask>
      <g mask="url(#mask0_777_8607)">
        <rect x="-15" y="-34" width="179" height="99" fill="black" />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            // xlink:href="#image0_777_8607"
            transform="scale(0.00666667 0.0217391)"
          />
        </pattern>
        <image
          id="image0_777_8607"
          width="150"
          height="46"
          // xlink:href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
