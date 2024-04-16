import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";

const FilterByCategory = () => {
  const { productData } = useAppSelector((store) => store.product);

  const categories = productData?.map((item) => item.category);

  const uniqueCategories = [...new Set(categories)];
  return (
    <div className="border-gray-300 border-b">
      <h5 className="mb-[10px] font-semibold tracking-wider">კატეგორიები</h5>
      <ul>
        {uniqueCategories?.map((category, index) => {
          const formattedCategory = category.replace(/ /g, "-");
          return (
            <li
              key={index}
              className="py-[8px] text-primaryGray text-[14px] hover:text-black transition-colors ease-in duration-150"
            >
              <Link to={`/product-category/${formattedCategory}`}>{category}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterByCategory;
