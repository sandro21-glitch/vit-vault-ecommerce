import SingleCategoryDropdown from "./SingleCategoryDropdown";

type MobileTypesListTypes = {
  isTypeOpen: boolean;
  categoryTypes: string[] | undefined;
};

const MobileTypesList = ({
  isTypeOpen,
  categoryTypes = [],
}: MobileTypesListTypes) => {
  const dynamicHeight = isTypeOpen
    ? { height: `${categoryTypes?.length * 3}rem` }
    : { height: "0" };

  return (
    <div
      style={dynamicHeight}
      className="overflow-hidden transition-height ease-in duration-300"
    >
      {categoryTypes?.map((type, index) => {
        return <SingleCategoryDropdown key={index} type={type} />;
      })}
    </div>
  );
};

export default MobileTypesList;
