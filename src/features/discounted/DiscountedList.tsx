import { useAppSelector } from "../../hooks/hooks";
import ProductCard from "../../ui/ProductCard";

const DiscountedList = () => {
  const { productData } = useAppSelector((store) => store.product);
  const discountedProducts = productData?.filter((data) => data.discount !== 0);

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full">
      {discountedProducts?.map((product) => {
        return <ProductCard key={product.id} categoryItem={product} />;
      })}
    </ul>
  );
};

export default DiscountedList;
