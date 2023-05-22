export type ButtonProps = {
  onClick?: () => void;
  variant?: "primary" | "secondary" | "teritory" | "text" | undefined;
  children?: string | JSX.Element;
  className?: string;
};

const Button = ({ onClick, children, className, variant }: ButtonProps) => {
  const classBuilder = (variant: string | undefined) => {
    switch (variant) {
      case "primary":
        return " bg-[#242424] text-[#FAFAFA] font-[600] border-none ";
      case "secondary":
        return "bg-[#E288F8] text-[#FAFAFA]";
      case "teritory":
        return "w-[153px] rounded-[24px] h-[43px] bg-transparent border border-black border-solid text-black";
      case "text":
        return " bg-none text-[#FAFAFA]";
    }
  };
  return (
    <button
      className={`${classBuilder(variant)} ${className} 
      text-lg font-medium cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
// gradient-to-r from-[#D44EF6] to-[#5E42D9]
