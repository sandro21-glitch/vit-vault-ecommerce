import { useAppSelector } from "../../../hooks/hooks";
import CartActions from "../cartActions/CartActions";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const CartTable = () => {
  const { cartProducts } = useAppSelector((store) => store.cart);
  return (
    <div className="flex-1 max-w-[60%]">
      <table className={`text-[14px] w-full ${cartProducts.length < 1 ? 'border-none' : 'border-b-2 '} mb-[40px]`}>
        <TableHeader />
        <TableBody />
      </table>
      <CartActions />
    </div>
  );
};

export default CartTable;
