import SingleWidget from "../features/articleWidgets/SingleWidget";
import { useAppSelector } from "../hooks/hooks";

const ArticleWidgets = () => {
  const { articlesData, status } = useAppSelector((store) => store.articles);

  if (status === "error") return <p>error</p>;
  if (status === "loading") return <p>loading...</p>;
  if (!articlesData) return <p>No articles available</p>;
  return (
    <div className="flex flex-col gap-5 max-w-[25%]">
      {articlesData.map((article) => (
        <SingleWidget key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleWidgets;
