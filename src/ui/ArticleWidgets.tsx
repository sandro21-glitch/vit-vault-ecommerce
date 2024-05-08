import { useAppSelector } from "../hooks/hooks";

const ArticleWidgets = () => {
  const { articlesData, status } = useAppSelector((store) => store.articles);

  if(status === 'error') return <p>error</p>
  if(status === 'loading') return <p>loading...</p>
    
  return <div className="">ArticleWidgets</div>;
};

export default ArticleWidgets;
