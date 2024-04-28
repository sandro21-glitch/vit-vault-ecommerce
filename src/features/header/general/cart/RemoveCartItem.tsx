import { useAppDispatch } from "../../../../hooks/hooks";
import { removeCartProduct } from "../../../slices/cartSlice";

type RemoveCartItemTypes = {
  id: string;
};

const RemoveCartItem = ({ id }: RemoveCartItemTypes) => {
  const dispatch = useAppDispatch();

  const handleRemoveItem = () => {
    dispatch(removeCartProduct(id));
  };

  return (
    <button
      type="button"
      onClick={handleRemoveItem}
      className="absolute right-[-5px] top-0 text-[20px]"
    >
      ×
    </button>
  );
};

export default RemoveCartItem;
