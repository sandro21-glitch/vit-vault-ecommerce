import CartTable from "./cartTable/CartTable";
import CartTotal from "./cartTotal/CartTotal";

const CartLayout = () => {
  return (
    <div className="w-full max-w-[75%] min-w-[75%] flex mb-[40px]">
      <CartTable />
      <CartTotal />
    </div>
  );
};

export default CartLayout;
