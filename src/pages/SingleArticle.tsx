import { useLocation } from "react-router-dom";
import SingleArticlePageItem from "../features/articles/singleArticlePage/SingleArticlePageItem";
import SectionHeader from "../ui/SectionHeader";
import { useAppSelector } from "../hooks/hooks";

const SingleArticle = () => {
  const { state } = useLocation();
  const { articlesData } = useAppSelector((store) => store.articles);
  const selectedArticle = articlesData?.find((article) => article.id === state);
  return (
    <section>
      <SectionHeader path={`${selectedArticle?.title}`} />
      <article className="section-center section-x">
        <SingleArticlePageItem selectedArticle={selectedArticle} />
      </article>
    </section>
  );
};

export default SingleArticle;
