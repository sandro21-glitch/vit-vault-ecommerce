import ArticleWidgets from "../../../ui/ArticleWidgets";
import ArticlesList from "./ArticlesList";

const ArticlesLayout = () => {
  return (
    <article className="section-center section-x flex gap-10 flex-col lg:flex-row">
      <ArticlesList />
      <ArticleWidgets />
    </article>
  );
};

export default ArticlesLayout;
