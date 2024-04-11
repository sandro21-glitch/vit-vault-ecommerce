import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useAppSelector } from "../../../../hooks/hooks";
const CategoryList = () => {
  const { productData } = useAppSelector((store) => store.product);
  const uniqueCategories = Array.from(
    new Set(productData?.map((product) => product.category))
  );
  return (
    <div className="absolute z-[9999] left-0 top-full w-full">
      <ul className="border-l border-b border-r ">
        {uniqueCategories.map((data, index) => {
          return (
            <li
              key={index}
              className="border border-b text-[13px] cursor-pointer font-semibold flex justify-between items-center px-3 py-2"
            >
              <Link to="/">{data}</Link>
              <IoIosArrowForward />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
