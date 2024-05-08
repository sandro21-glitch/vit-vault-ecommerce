type TitleTypes = {
  title: string;
};
const Title = ({title}:TitleTypes) => {
  return (
    <h1 className="text-center text-[40px] font-semibold mb-10">{title}</h1>
  );
};

export default Title;
