import CartTable from "./cartTable/CartTable";
import CartTotal from "./cartTotal/CartTotal";

const CartLayout = () => {
  return (
    <div className="max-w-[75%] flex">
      <CartTable />
      <CartTotal />
    </div>
  );
};

export default CartLayout;
