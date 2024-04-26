import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../../../hooks/hooks";
import { addProductToCart } from "../../../../../slices/cartSlice";

type AddToCartTypes = {
  singleProdData: {
    id: string;
    name: string;
    price: number;
    discount: number;
    images: string[];
  };
  itemCount: number;
};

const AddToCartBtn = ({ singleProdData, itemCount }: AddToCartTypes) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const newCartProduct = {
    id: singleProdData.id,
    name: singleProdData.name,
    image: singleProdData.images[0],
    price: singleProdData.price,
    discount: singleProdData.discount,
    quantity: itemCount,
    totalPrice: singleProdData.price,
  };

  const handleAddProduct = () => {
    dispatch(addProductToCart(newCartProduct));
    navigate("/cart");
  };

  return (
    <button
      type="button"
      onClick={handleAddProduct}
      className="bg-secondaryGreen h-[42px] hover:bg-primaryGreen transition-all ease-in duration-150 px-[20px] text-[14px] text-white font-semibold"
    >
      კალათაში დამატება
    </button>
  );
};

export default AddToCartBtn;
