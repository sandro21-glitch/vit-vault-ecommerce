import { useAppSelector } from "../../../../../hooks/hooks";
import SingleCategory from "./SingleCategory";
const CategoryList = () => {
  const { productData } = useAppSelector((store) => store.product);
  const uniqueCategories = Array.from(
    new Set(
      productData?.map((product) => {
        return product.category;
      })
    )
  );
  return (
    <div className="absolute z-[9999] left-0 top-full w-full bg-white">
      <ul className="border-l border-b border-r ">
        {uniqueCategories.map((category, index) => {
          return <SingleCategory key={index} category={category} />;
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
