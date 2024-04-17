import { Link } from "react-router-dom";

type BreadcrumbTypes = {
  category: string;
  classname?: string;
};

const Breadcrumb = ({ category, classname }: BreadcrumbTypes) => {
  return (
    <div className={`flex text-[14px] ${classname}`}>
      <Link
        to="/"
        className="hover:text-black transition-colors ease-in duration-150 text-primaryGray"
      >
        მთავარი
      </Link>
      <span className="mx-1">/</span>
      <p className="text-black font-semibold">{category.replace(/-/g, " ")}</p>
    </div>
  );
};

export default Breadcrumb;
