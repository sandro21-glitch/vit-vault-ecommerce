import { useAppSelector } from "../../../../hooks/hooks";
import { formatToGeorgianLari } from "../../../../utils/formatPrice";
import { CartProductTypes } from "../../../slices/cartSlice";
import SingleCartItem from "./SingleCartItem";

type CartItemListTypes = {
  cartProducts: CartProductTypes[];
};
const CartItemList = ({ cartProducts }: CartItemListTypes) => {
  const { totalSum } = useAppSelector((store) => store.cart);

  return (
    <div>
      <ul className="flex flex-col">
        {cartProducts.map((item) => {
          return <SingleCartItem key={item.id} item={item} />;
        })}
      </ul>
      <div className="flex justify-between py-3">
        <p className="text-[16px] font-semibold">ჯამი</p>
        <p className="text-[16px] font-semibold text-secondaryGreen">
          {formatToGeorgianLari(totalSum)}
        </p>
      </div>
      <button className="w-full py-2 bg-veryLightGray text-primaryGray font-semibold">
        კალათის ნახვა
      </button>
    </div>
  );
};

export default CartItemList;
