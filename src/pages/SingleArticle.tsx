import { useLocation, useNavigate } from "react-router-dom";
import SingleArticlePageItem from "../features/articles/singleArticlePage/SingleArticlePageItem";
import { useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import PageLayout from "../ui/PageLayout";

const SingleArticle = () => {
  const { state } = useLocation();
  const { articlesData } = useAppSelector((store) => store.articles);
  const selectedArticle = articlesData?.find((article) => article.id === state);
  const navigate = useNavigate();

  if (selectedArticle) {
    return (
      <PageLayout title={`${selectedArticle?.title}`}>
        <SingleArticlePageItem selectedArticle={selectedArticle} />
      </PageLayout>
    );
  } else {
    useEffect(() => {
      navigate("/");
    }, []);
    return null;
  }
};

export default SingleArticle;
