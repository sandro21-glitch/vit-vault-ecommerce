import { useAppSelector } from "../../../hooks/hooks";
import SingleDiscountedProduct from "./SingleDiscountedProduct";

const DiscountedProductList = () => {
  const { productData } = useAppSelector((store) => store.product);
  const discountedProducts = productData?.filter((data) => data.discount !== 0);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2">
      {discountedProducts?.map((product) => {
        return <SingleDiscountedProduct key={product.id} product={product} />;
      })}
    </ul>
  );
};

export default DiscountedProductList;
