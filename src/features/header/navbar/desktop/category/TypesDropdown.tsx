import { Link } from "react-router-dom";

type TypesDropdownProps = {
  categoryTypes: string[] | undefined;
};
const TypesDropdown = ({ categoryTypes }: TypesDropdownProps) => {
  return (
    <div className="absolute z-[9999] hidden group-hover/navItem:block right-0 top-0 translate-x-full bg-white shadow-mainShadow">
      {categoryTypes?.map((type, index) => {
        return (
          <div
            key={index}
            className="flex flex-col w-[10rem] h-auto p-3 hover:bg-veryLightGray"
          >
            <Link
              to={`/product-category/${type.replace(/ /g, "-")}`}
            >
              <p className="font-medium">{type}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default TypesDropdown;
