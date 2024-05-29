import { useAppSelector } from "../../../../hooks/hooks";
import CartItemList from "./CartItemList";

const CartModal = () => {
  const { cartProducts } = useAppSelector((store) => store.cart);
  return (
    <div className="absolute top-[100%] py-5 right-0 w-[330px] z-[-1] group-hover/modal:z-[9999] opacity-0 group-hover/modal:opacity-100  transition-all ease-in duration-300">
      <div className="pt-[15px] bg-white shadow-mainShadow p-[20px]">
        {cartProducts.length < 1 ? (
          <p className="text-center text-black font-semibold">
            თქვენ კალათში პროდუქტები არ არის.
          </p>
        ) : (
          <CartItemList cartProducts={cartProducts} />
        )}
      </div>
    </div>
  );
};

export default CartModal;
