import CartTable from "./cartTable/CartTable";
import CartTotal from "./cartTotal/CartTotal";

const CartLayout = () => {
  return (
    <div className="w-full lg:max-w-[75%] flex flex-col lg:flex-row gap-7">
      <CartTable />
      <CartTotal />
    </div>
  );
};

export default CartLayout;
