import { Link } from "react-router-dom";

type SingleCategoryDropdownTypes = {
  type: string | null;
};

const SingleCategoryDropdown = ({ type }: SingleCategoryDropdownTypes) => {
  return (
    <div className="h-[3rem] flex items-center border-b">
      <Link to={`/product-category/${type?.replace(/ /g, "-")}`}>
        <span className="pl-5 text-primaryGray">{type}</span>
      </Link>
    </div>
  );
};

export default SingleCategoryDropdown;
