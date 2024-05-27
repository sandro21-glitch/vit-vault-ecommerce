
import CartTotalList from "./CartTotalList";
import Checkout from "./Checkout";

type CartTotalTypes = {
  setCartPage: (page: string) => void;
};

const CartTotal = ({setCartPage}:CartTotalTypes) => {

  return (
    <div className="w-full lg:max-w-[40%]">
      <div className="p-[25px] w-full border-2">
        <h3 className="text-[25px] font-medium text-wrap mb-5">
          მთლიანი ღირებულება
        </h3>
        <CartTotalList />
        <Checkout setCartPage={setCartPage} />
      </div>
    </div>
  );
};

export default CartTotal;
