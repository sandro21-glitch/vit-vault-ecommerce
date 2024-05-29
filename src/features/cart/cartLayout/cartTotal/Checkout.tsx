import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { addOrders } from "../../../slices/orderSlice";

type CheckoutTypes = {
  setCartPage: (page: string) => void;
};

const Checkout = ({ setCartPage }: CheckoutTypes) => {
  const { cartProducts } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  const order = cartProducts.map((product) => ({
    name: product.name,
    price: product.price,
    amount: product.quantity,
    id: product.id,
    discount: product.discount,
  }));

  const handleAddOrder = () => {
    if (cartProducts.length < 1) {
      toast.error(
        "თქვენი კალათა ცარიელია. გაგრძელებამდე გთხოვთ, დაამატოთ პროდუქტები კალათაში."
      );
      return;
    }
    setCartPage("payment");
    dispatch(addOrders(order));
  };

  return (
    <button
      type="button"
      onClick={handleAddOrder}
      className="py-3 w-full bg-secondaryGreen text-white font-semibold mt-3 hover:bg-primaryGreen transition-all ease-in duration-150"
    >
      შეკვეთის გაფორმება
    </button>
  );
};

export default Checkout;
