import Breadcrumb from "../../../../ui/Breadcrumb";

type TitleTypes = {
  title: string;
};
const Title = ({ title }: TitleTypes) => {
  return (
    <div className="flex justify-between w-full items-center mb-10">
      <h1 className="text-[30px] font-semibold">{title}</h1>
      <Breadcrumb category={title} />
    </div>
  );
};

export default Title;
