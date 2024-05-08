import { ArticlesData } from "../slices/articlesSlice";

type SingleArticleTypes = {
  item: ArticlesData;
  index: number;
};

const SingleArticle = ({ item, index }: SingleArticleTypes) => {
  const isDivisible = index % 2 === 0;
  return (
    <li
      className={`mb-10 flex items-center shadow-mainShadow ${
        !isDivisible ? "flex-row-reverse" : "flex-row"
      } group `}
    >
      <div className="overflow-hidden cursor-pointer flex-1 ">
        <img
          src={item.image}
          alt="article image"
          className="w-full h-fit group-hover:scale-105 transition-all ease-in duration-300 "
        />
      </div>
      <div className="w-full flex flex-col items-center flex-1 p-5">
        <h3 className=" text-[23px]  cursor-pointer text-center font-medium mb-5 hover:text-secondaryGreen transition-all ease-in duration-150">
          {item.title}
        </h3>
        <p className="text-[16px] text-center mb-5 font-poppins">
          {item.info?.slice(0, 130)} ...
        </p>
        <button className="text-secondaryGreen font-semibold text-[14px] transition-all ease-in duration-150">
          წაიკითხე მეტი
        </button>
      </div>
    </li>
  );
};

export default SingleArticle;
