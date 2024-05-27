import CartTable from "./cartTable/CartTable";
import CartTotal from "./cartTotal/CartTotal";

type CartLayoutTypes = {
  setCartPage: (page: string) => void;
};

const CartLayout = ({ setCartPage }: CartLayoutTypes) => {
  return (
    <div className="w-full lg:max-w-[75%] flex flex-col lg:flex-row gap-7 mb-10 md:mb-0">
      <CartTable />
      <CartTotal setCartPage={setCartPage} />
    </div>
  );
};

export default CartLayout;
