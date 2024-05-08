import { Link } from "react-router-dom";
import { ArticlesData } from "../../slices/articlesSlice";
import ImageTitle from "./ImageTitle";

type SingleArticleTypes = {
  item: ArticlesData;
  index: number;
};

const SingleArticle = ({ item, index }: SingleArticleTypes) => {
  const isDivisible = index % 2 === 0;

  return (
    <li>
      <Link
        to={`/${item.title}`}
        state={item.id}
        className={`mb-10 flex items-center flex-col lg:flex-row gap-5 shadow-mainShadow p-5 rounded-md ${
          !isDivisible ? "flex-row-reverse" : "flex-row"
        } group `}
      >
        <div
          className="overflow-hidden rounded-md
       cursor-pointer flex-1 relative after:absolute after:inset-0 after:w-full after:h-full after:z-[1] after:bg-transparentBlack"
        >
          <img
            src={item.image}
            alt="article image"
            className="w-full h-fit max-h-[250px] object-cover group-hover:scale-105 transition-all ease-in duration-300 "
          />
          <ImageTitle title={item.title} />
        </div>
        <div className="w-full flex flex-col items-center flex-1 ">
          <h3 className=" text-[23px] leading-8 cursor-pointer text-center font-semibold mb-5 hover:text-secondaryGreen transition-all ease-in duration-150">
            {item.title}
          </h3>
          <p className="text-[16px] text-center mb-5 font-poppins">
            {item.info?.slice(0, 130)} ...
          </p>
          <button className="text-secondaryGreen font-semibold text-[14px] transition-all ease-in duration-150">
            წაიკითხე მეტი
          </button>
        </div>
      </Link>
    </li>
  );
};

export default SingleArticle;
