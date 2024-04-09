type HeaderTextTypes = {
  text: string;
};

const HeaderText = ({ text }: HeaderTextTypes) => {
  return (
    <h4 className="text-center font-semibold mb-[30px]">{text}</h4>
  );
};

export default HeaderText;
