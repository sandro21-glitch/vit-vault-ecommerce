import HeaderText from "../../../ui/HeaderText";
import DiscountedProductList from "./DiscountedProductList";

const DiscountedProducts = () => {
  return (
    <article className="mb-[8vh]">
      <HeaderText text="ფასდაკლებული პროდუქცია" />
      <DiscountedProductList />
    </article>
  );
};

export default DiscountedProducts;
