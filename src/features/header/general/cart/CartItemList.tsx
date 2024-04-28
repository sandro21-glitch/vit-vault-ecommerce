import { CartProductTypes } from "../../../slices/cartSlice";
import SingleCartItem from "./SingleCartItem";

type CartItemListTypes = {
  cartProducts: CartProductTypes[];
};
const CartItemList = ({ cartProducts }: CartItemListTypes) => {
  return (
    <div>
      <ul className="flex flex-col">
        {cartProducts.map((item) => {
          return <SingleCartItem key={item.id} item={item} />;
        })}
      </ul>
      <div className="flex justify-between py-3">
        <p>ჯამი</p>
        <p>39l</p>
      </div>
      <button className="w-full py-2 bg-veryLightGray text-primaryGray font-semibold">კალათის ნახვა</button>
    </div>
  );
};

export default CartItemList;
