export type CardsType = {
  title?: string;
  description?: string;
  className?: string;
  imagebg?: string;
  src?: string | JSX.Element;
};

const Cards = ({ title, description, className, src, imagebg }: CardsType) => {
  return (
    <div
      className={`${className} min-h-[400px] w-[300px] md:w-[400px] flex flex-col rounded-2xl bg-[#242424]  `}
    >
      <div className={`w-full  rounded-t-2xl flex-[1.5] ${imagebg}`}>
        <img className="w-full rounded-t-2xl h-full" src={`${src}`}></img>
      </div>
      <div className="flex bg-[#242424] w-full flex-col justify-center p-[50px] gap-6 rounded-2xl flex-[1.5]">
        <h2 className="text-2xl text-white font-bold">{title}</h2>
        <p className="text-[14px] text-[#828282] font-normal font-[Playfair Display]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Cards;
