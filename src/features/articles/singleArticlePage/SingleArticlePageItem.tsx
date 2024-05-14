import ArticleContent from "./ArticleContent";
import ArticleWidgets from "../../../ui/ArticleWidgets";
import { ArticlesData } from "../../slices/articlesSlice";
type SingleArticleTypes = {
  selectedArticle: ArticlesData;
};

const SingleArticlePageItem = ({ selectedArticle }: SingleArticleTypes) => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <ArticleContent selectedArticle={selectedArticle} />
      <ArticleWidgets />
    </div>
  );
};

export default SingleArticlePageItem;
