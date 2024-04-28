import { useAppSelector } from "../../../../hooks/hooks";

const CartItemCount = () => {
  const { cartProducts } = useAppSelector((store) => store.cart);
  const cartLenght = cartProducts.length;
  return (
    <div
      className="w-[1rem] h-[1rem] flex items-center justify-center
   rounded-full text-[.7rem] text-white bg-primaryGreen absolute left-5 top-0"
    >
      {cartLenght}
    </div>
  );
};

export default CartItemCount;
