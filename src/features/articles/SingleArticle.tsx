import { ArticlesData } from "../slices/articlesSlice";

type SingleArticleTypes = {
  item: ArticlesData;
};

const SingleArticle = ({ item }: SingleArticleTypes) => {
  return (
    <li className="mb-10 flex">
      <div className="group overflow-hidden max-w-[447px] min-w-[447px] max-h-[220px] cursor-pointer">
        <img
          src={item.image}
          alt="article image"
          className="w-full  group-hover:scale-105 transition-all ease-in duration-300"
        />
      </div>
      <div className="bg-white shadow-mainShadow w-full flex flex-col items-center p-5 ">
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
