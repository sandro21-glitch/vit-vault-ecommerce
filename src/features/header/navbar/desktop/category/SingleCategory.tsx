import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useAppSelector } from "../../../../../hooks/hooks";
import TypesDropdown from "./TypesDropdown";
type SingleCategoryTypes = {
  category: string;
};

const SingleCategory = ({ category }: SingleCategoryTypes) => {
  const { productData } = useAppSelector((store) => store.product);

  const categoryTypes = productData
    ?.filter((data) => data.category === category)
    .flatMap((data) => data.type ?? [])
    .filter((value, index, self) => self.indexOf(value) === index);
    
  return (
    <li className="relative group/navItem border border-b text-[13px] cursor-pointer font-semibold flex justify-between items-center ">
      <Link
        className="px-3 py-2 w-full text-[14px]"
        to={`/product-category/${category.replace(/ /g, "-")}`}
      >
        {category}
      </Link>
      {categoryTypes && categoryTypes.length !== 0 && (
        <IoIosArrowForward className="mr-1" />
      )}
      <TypesDropdown categoryTypes={categoryTypes} />
    </li>
  );
};

export default SingleCategory;
