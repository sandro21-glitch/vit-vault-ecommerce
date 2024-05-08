import { ArticlesData } from "../../slices/articlesSlice";
import Info from "./parts/Info";
import SubInfos from "./parts/SubInfos";
import SubTitle from "./parts/SubTitle";
import Title from "./parts/Title";

type ArticleContentTypes = {
  selectedArticle: ArticlesData;
};

const ArticleContent = ({ selectedArticle }: ArticleContentTypes) => {
  const { image, info, subInfos, subTitle, title } = selectedArticle;

  return (
    <div className="max-w-[75%]">
      <Title title={title} />
      <img src={image} alt="article image" className="mb-10" />
      {subTitle && <SubTitle subTitle={subTitle} />}
      {info && <Info info={info} />}
      {subInfos && <SubInfos subInfos={subInfos} />}
    </div>
  );
};

export default ArticleContent;
