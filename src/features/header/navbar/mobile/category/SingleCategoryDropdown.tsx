type SingleCategoryDropdownTypes = {
  type: string | null;
};

const SingleCategoryDropdown = ({ type }: SingleCategoryDropdownTypes) => {
  return (
    <div className="h-[3rem] flex items-center border-b">
      <span className="pl-5 text-primaryGray">{type}</span>
    </div>
  );
};

export default SingleCategoryDropdown;
