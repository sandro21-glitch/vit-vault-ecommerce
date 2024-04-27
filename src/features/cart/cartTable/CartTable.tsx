import CartActions from "../cartActions/CartActions";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const CartTable = () => {
  return (
    <div>
      <table className="w-full flex-1 text-[14px] border-b-2 mb-[40px]">
        <TableHeader />
        <TableBody />
      </table>
      <CartActions />
    </div>
  );
};

export default CartTable;
