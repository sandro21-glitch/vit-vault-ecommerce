import { Link } from "react-router-dom";

type SingleCategoryDropdownTypes = {
  type: string | null;
};

const SingleCategoryDropdown = ({ type }: SingleCategoryDropdownTypes) => {
  return (
    <div className="flex items-center justify-center border-b">
      <Link
        to={`/product-category/${type?.replace(/ /g, "-")}`}
        className="pl-5 h-[3rem] w-full flex items-center"
      >
        <span className="  text-primaryGray">{type}</span>
      </Link>
    </div>
  );
};

export default SingleCategoryDropdown;
