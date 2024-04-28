import { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import UpdateQuantity from "../../../../../../ui/UpdateQuantity";
type AddToCartTypes = {
  singleProdData: {
    id: string;
    name: string;
    price: number;
    discount: number;
    images: string[];
  };
};
const AddToCart = ({ singleProdData }: AddToCartTypes) => {
  const [itemCount, setItemCount] = useState<number>(1);
  const handleIncreaseCount = () => {
    setItemCount(itemCount + 1);
  };
  const handleDecreaseCount = () => {
    if (itemCount <= 1) return;
    setItemCount(itemCount - 1);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setItemCount(value);
    }
  };
  return (
    <div className="mt-5 flex items-center gap-5">
      <UpdateQuantity
        itemCount={itemCount}
        handleInputChange={handleInputChange}
        handleIncreaseCount={handleIncreaseCount}
        handleDecreaseCount={handleDecreaseCount}
      />
      <AddToCartBtn singleProdData={singleProdData} itemCount={itemCount} />
    </div>
  );
};

export default AddToCart;
