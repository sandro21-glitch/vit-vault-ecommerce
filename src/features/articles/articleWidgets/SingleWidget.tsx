import { Link } from "react-router-dom";
import { ArticlesData } from "../../slices/articlesSlice";

type SingleWidgetTypes = {
  article: ArticlesData;
};

const SingleWidget = ({ article }: SingleWidgetTypes) => {
  return (
    <Link to={"/"}>
      <div className="flex gap-3">
        <img
          src={article.image}
          alt="article image"
          className="w-full max-w-[95px] h-[80px] object-cover rounded-md"
        />
        <p className="text-[13px] font-poppins">{article.title}</p>
      </div>
    </Link>
  );
};

export default SingleWidget;
