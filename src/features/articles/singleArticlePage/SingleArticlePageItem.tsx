import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ArticleContent from "./ArticleContent";
import ArticleWidgets from "../../../ui/ArticleWidgets";
import { ArticlesData } from "../../slices/articlesSlice";
type SingleArticleTypes = {
  selectedArticle: ArticlesData | undefined;
};

const SingleArticlePageItem = ({ selectedArticle }: SingleArticleTypes) => {
  const navigate = useNavigate();

  if (selectedArticle) {
    return (
      <div className="flex gap-10">
        <ArticleContent selectedArticle={selectedArticle} />
        <ArticleWidgets />
      </div>
    );
  } else {
    useEffect(() => {
      navigate("/");
    }, []);
    return null;
  }
};

export default SingleArticlePageItem;
