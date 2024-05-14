import Breadcrumb from "../../../../ui/Breadcrumb";

type TitleTypes = {
  title: string;
};
const Title = ({ title }: TitleTypes) => {
  return (
    <div className="flex justify-between w-full items-start mb-10">
      <Breadcrumb category={title} classname="text-[18px]" />
    </div>
  );
};

export default Title;
