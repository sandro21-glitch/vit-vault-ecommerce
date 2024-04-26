import { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
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
      <div>
        <button
          onClick={handleDecreaseCount}
          className="border-2 min-w-[25px] h-[42px] font-semibold hover:bg-secondaryGreen hover:text-white hover:border-secondaryGreen transition-all ease-in duration-150"
        >
          -
        </button>
        <input
          type="number"
          value={itemCount}
          onChange={handleInputChange}
          className="w-[30px] h-[42px] text-center border-t-2 border-b-2 outline-none"
        />
        <button
          onClick={handleIncreaseCount}
          className="border-2 min-w-[25px] h-[42px] font-semibold hover:bg-secondaryGreen hover:text-white hover:border-secondaryGreen transition-all ease-in duration-150"
        >
          +
        </button>
      </div>
      <AddToCartBtn singleProdData={singleProdData} itemCount={itemCount} />
    </div>
  );
};

export default AddToCart;
