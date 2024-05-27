import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { addOrders } from "../../../slices/orderSlice";

const Checkout = () => {
  const { cartProducts } = useAppSelector((store) => store.cart);
  const { orders } = useAppSelector((store) => store.order);
  const dispatch = useAppDispatch();
  console.log(orders);

  const orderedProduct = cartProducts.map((product) => ({
    name: product.name,
    price: product.price,
    amount: product.quantity,
    id: product.id,
  }));

  const handleAddOrder = () => {
    dispatch(addOrders(orderedProduct));
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
