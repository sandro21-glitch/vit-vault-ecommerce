import { FiShoppingCart } from "react-icons/fi";
import { useAppDispatch } from "../hooks/hooks";
import { addProductToCart } from "../features/slices/cartSlice";

type AddToCartTypes = {
  categoryItem: {
    name: string;
    images: string[];
    price: number;
    id: string;
    discount: number;
    inStock: boolean;
  };
};

const AddToCartBtn = ({ categoryItem }: AddToCartTypes) => {
  const dispatch = useAppDispatch();

  const newCartProduct = {
    id: categoryItem.id,
    name: categoryItem.name,
    image: categoryItem.images[0],
    price: categoryItem.price,
    discount: categoryItem.discount,
    quantity: 1,
    totalPrice: categoryItem.price,
  };

  const handleAddProduct = () => {
    dispatch(addProductToCart(newCartProduct));
  };

  return (
    <button
      type="button"
      onClick={handleAddProduct}
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className="font-serif h-[2rem] overflow-hidden group/fade group-hover:visible group-hover:opacity-100 opacity-0 invisible hover:bg-primaryGreen transition-all ease-in duration-150 font-semibold bg-secondaryGreen
         px-[.5rem] py-[.4rem] min-w-[50%] text-[12px] uppercase leading-normal text-white"
    >
      <div className="block group-hover/fade:translate-y-[-200%] transition-transform ease-in duration-200">
        კალათაში დამატება
      </div>
      <div className="flex items-center justify-center translate-y-[200%] group-hover/fade:translate-y-[-100%] transition-transform ease-in duration-200">
        <FiShoppingCart className="text-[1.2rem] font-bold" />
      </div>
    </button>
  );
};

export default AddToCartBtn;
