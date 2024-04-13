import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import SingleProductByCategory from "./SingleProductByCategory";

const ProductsByCategoryList = () => {
  const { productData } = useAppSelector((store) => store.product);
  const { category } = useParams();

  const selectedCategory = productData?.filter(
    (product) => product.category === category?.replace(/-/g, " ")
  );

  return (
    <ul className="grid grid-cols-4 gap-5 w-full max-w-[75%] mt-20">
      {selectedCategory?.map((categoryItem) => {
        return (
          <SingleProductByCategory
            key={categoryItem.id}
            categoryItem={categoryItem}
          />
        );
      })}
    </ul>
  );
};

export default ProductsByCategoryList;
