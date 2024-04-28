import { useState } from "react";
import UpdateQuantity from "../../../../ui/UpdateQuantity";

type SingleProductQuantityTypes = {
  quantity: number;
};

const SingleProductQuantity = ({ quantity }: SingleProductQuantityTypes) => {
  const [itemCount, setItemCount] = useState<number>(quantity);
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
