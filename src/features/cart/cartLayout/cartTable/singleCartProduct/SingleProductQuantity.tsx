import { useState } from "react";

import {
  decreaseAmount,
  increaseAmount,
  removeCartProduct,
  setProductAmount,
} from "../../../../slices/cartSlice";
import { useAppDispatch } from "../../../../../hooks/hooks";
import UpdateQuantity from "../../../../../ui/UpdateQuantity";

type SingleProductQuantityTypes = {
  quantity: number;
  id: string;
};

const SingleProductQuantity = ({
  quantity,
  id,
}: SingleProductQuantityTypes) => {
  const [itemCount, setItemCount] = useState<number>(quantity);
  const dispatch = useAppDispatch();
  const handleIncreaseCount = () => {
    const newCount = itemCount + 1;
    setItemCount(newCount);
    dispatch(increaseAmount({ id, newCount }));
  };
  const handleDecreaseCount = () => {
    if (itemCount <= 1) {
      dispatch(removeCartProduct(id));
    }
    const newCount = itemCount - 1;
    setItemCount(newCount);
    dispatch(decreaseAmount({ id, newCount }));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setItemCount(value);
      dispatch(setProductAmount({ id, itemCount: value }));
    }
  };
  return (
    <td>
      <UpdateQuantity
        itemCount={itemCount}
        handleInputChange={handleInputChange}
        handleIncreaseCount={handleIncreaseCount}
        handleDecreaseCount={handleDecreaseCount}
      />
    </td>
  );
};

export default SingleProductQuantity;
