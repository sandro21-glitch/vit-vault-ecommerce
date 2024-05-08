type SubTitleTypes = {
  subTitle: string;
};

const SubTitle = ({ subTitle }: SubTitleTypes) => {
  if (!subTitle) return null;
  const subTitleParts = subTitle.split("-");
  return (
    <div>
      {subTitleParts?.map((part, index) => (
        <h2 key={index} className="text-start text-[25px] font-medium mb-10">
          {part.trim()}
          {index < subTitleParts.length - 1 && <br />}
        </h2>
      ))}
    </div>
  );
};

export default SubTitle;
