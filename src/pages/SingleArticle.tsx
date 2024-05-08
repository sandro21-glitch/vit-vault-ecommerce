import { useLocation, useNavigate } from "react-router-dom";
import SingleArticlePageItem from "../features/articles/singleArticlePage/SingleArticlePageItem";
import SectionHeader from "../ui/SectionHeader";
import { useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";

const SingleArticle = () => {
  const { state } = useLocation();
  const { articlesData } = useAppSelector((store) => store.articles);
  const selectedArticle = articlesData?.find((article) => article.id === state);
  const navigate = useNavigate();

  if (selectedArticle) {
    return (
      <section>
        <SectionHeader path={`${selectedArticle?.title}`} />
        <article className="section-center section-x">
          <SingleArticlePageItem selectedArticle={selectedArticle} />
        </article>
      </section>
    );
  } else {
    useEffect(() => {
      navigate("/");
    }, []);
    return null;
  }
};

export default SingleArticle;
