import CartTable from "./cartTable/CartTable";
import CartTotal from "./cartTotal/CartTotal"; 

const CartLayout = () => {
  return (
    <div className="w-full lg:max-w-[75%] flex flex-col lg:flex-row gap-7 mb-10 md:mb-0">
      <CartTable />
      <CartTotal />
    </div>
  );
};

export default CartLayout;
