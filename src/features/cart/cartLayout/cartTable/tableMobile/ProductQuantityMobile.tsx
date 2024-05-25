import { useState } from "react";
import { useAppDispatch } from "../../../../../hooks/hooks";
import { decreaseAmount, increaseAmount } from "../../../../slices/cartSlice";
import UpdateQuantity from "../../../../../ui/UpdateQuantity";

type ProductQuantityMobileTypes = {
  quantity: number;
  id: string;
};

const ProductQuantityMobile = ({
  id,
  quantity,
}: ProductQuantityMobileTypes) => {
  const [itemCount, setItemCount] = useState<number>(quantity);
  const dispatch = useAppDispatch();
  const handleIncreaseCount = () => {
    const newCount = itemCount + 1;
    setItemCount(newCount);
    dispatch(increaseAmount({ id, newCount }));
  };
  const handleDecreaseCount = () => {
    if (itemCount <= 1) return;
    const newCount = itemCount - 1;
    setItemCount(newCount);
    dispatch(decreaseAmount({ id, newCount }));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setItemCount(value);
    }
  };
  return (
    <UpdateQuantity
      itemCount={itemCount}
      handleInputChange={handleInputChange}
      handleIncreaseCount={handleIncreaseCount}
      handleDecreaseCount={handleDecreaseCount}
    />
  );
};

export default ProductQuantityMobile;
