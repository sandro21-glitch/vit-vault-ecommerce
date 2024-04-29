import { useAppSelector } from "../../../hooks/hooks";
import CartActions from "../cartActions/CartActions";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TableMobile from "./tableMobile/TableMobile";

const CartTable = () => {
  const { cartProducts } = useAppSelector((store) => store.cart);

  return (
    <div className="w-full lg:max-w-[65%] ">
      <table
        className={`text-[14px] hidden md:table  ${
          cartProducts.length < 1 ? "border-none" : "border-b-2"
        } mb-[40px]`}
      >
        <TableHeader />
        <TableBody />
      </table>
      <TableMobile />
      <CartActions />
    </div>
  );
};

export default CartTable;
