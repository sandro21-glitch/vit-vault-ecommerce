import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../../../hooks/hooks";
import { addProductToCart } from "../../../../../slices/cartSlice";
import "./addToCartBtn.css";
import LoadingSpinnerSmall from "./LoadingSpinnerSmall";
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
  const [isLoading, setIsLoading] = useState(false);
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

  const handleAddProduct = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch(addProductToCart(newCartProduct));
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    } finally {
      setIsLoading(false);
      navigate("/cart");
    }
  };

  return (
    <button
      type="button"
      onClick={handleAddProduct}
      className="button min-w-[12rem] min-h-[42px] max-h-[42px] p-[12px] px-[20px]"
    >
      {isLoading ? <LoadingSpinnerSmall /> : "კალათაში დამატება"}
    </button>
  );
};

export default AddToCartBtn;
