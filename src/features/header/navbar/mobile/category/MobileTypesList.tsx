import SingleCategoryDropdown from "./SingleCategoryDropdown";

type MobileTypesListTypes = {
  isTypeOpen: boolean;
  categoryTypes: string[] | undefined;
  setOpen: (isOpen: boolean) => void;
};

const MobileTypesList = ({
  isTypeOpen,
  categoryTypes = [],
  setOpen,
}: MobileTypesListTypes) => {
  const dynamicHeight = isTypeOpen
    ? { height: `${categoryTypes?.length * 3}rem` }
    : { height: "0" };

  const handleCloseNav = () => {
    setOpen(false);
  };

  return (
    <div
      style={dynamicHeight}
      onClick={handleCloseNav}
      className="overflow-hidden transition-height ease-in duration-300"
    >
      {categoryTypes?.map((type, index) => {
        return <SingleCategoryDropdown key={index} type={type} />;
      })}
    </div>
  );
};

export default MobileTypesList;
