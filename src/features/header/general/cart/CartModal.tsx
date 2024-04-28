import { useAppSelector } from "../../../../hooks/hooks";
import CartItemList from "./CartItemList";

const CartModal = () => {
  const { cartProducts } = useAppSelector((store) => store.cart);
  return (
    <div
      className="absolute top-[100%] py-5 right-0 w-[330px] z-[9999] hidden group-hover:block opacity-0
     group-hover:opacity-100 transition-all ease-in duration-300"
    >
      <div className="pt-[15px] bg-white shadow-mainShadow p-[20px]">
        {cartProducts.length < 1 ? (
          <p className="text-center">თქვენ კალათში პროდუქტები არ არის.</p>
        ) : (
          <CartItemList cartProducts={cartProducts} />
        )}
      </div>
    </div>
  );
};

export default CartModal;
