import { useAppSelector } from "../../hooks/hooks";
import SingleArticle from "./SingleArticle";

const ArticlesList = () => {
  const { articlesData, status } = useAppSelector((store) => store.articles);
  if (status === "error") return <p>Error</p>;
  if (status === "loading") return <p>loading...</p>;
  return (
    <ul className="max-w-[75%]">
      {articlesData?.map((item) => {
        return <SingleArticle key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default ArticlesList;
