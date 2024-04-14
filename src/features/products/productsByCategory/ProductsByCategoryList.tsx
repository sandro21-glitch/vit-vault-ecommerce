import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import ProductCard from "../../../ui/ProductCard";

const ProductsByCategoryList = () => {
  const { productData } = useAppSelector((store) => store.product);
  const { category } = useParams();

  const selectedCategory = productData?.filter(
    (product) => product.category === category?.replace(/-/g, " ")
  );

  return (
    <ul className="grid grid-cols-4 gap-5 mt-10">
      {selectedCategory?.map((categoryItem) => {
        return (
          <ProductCard key={categoryItem.id} categoryItem={categoryItem} />
        );
      })}
    </ul>
  );
};

export default ProductsByCategoryList;
