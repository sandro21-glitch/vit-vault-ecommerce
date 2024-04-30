import { useAppDispatch } from "../../../../hooks/hooks";
import CloseButton from "../../../../ui/CloseButton";
import { removeCartProduct } from "../../../slices/cartSlice";

type RemoveItemMobileTypes = {
  id: string;
};

const RemoveItemMobile = ({ id }: RemoveItemMobileTypes) => {
  const dispatch = useAppDispatch();
  const handleRemoveItem = () => {
    dispatch(removeCartProduct(id));
  };
  return <CloseButton onClick={handleRemoveItem} />;
};

export default RemoveItemMobile;
