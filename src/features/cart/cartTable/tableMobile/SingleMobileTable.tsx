import CheckDiscount from "../../../../ui/CheckDiscount";
import { formatToGeorgianLari } from "../../../../utils/formatPrice";
import { CartProductTypes } from "../../../slices/cartSlice";
import RemoveCartItemBtn from "../singleCartProduct/RemoveCartItemBtn";
import SingleProductQuantity from "../singleCartProduct/SingleProductQuantity";

type SingleMobileTableTypes = {
  product: CartProductTypes;
};

const SingleMobileTable = ({ product }: SingleMobileTableTypes) => {
  const { discount, id, image, name, price, quantity, totalPrice } = product;
  return (
    <div className="flex items-center border-b-2 border-double py-5">
      <div className="mr-10">
        <img
          src={image}
          alt={name}
          className="min-w-[65px] max-w-[65px] object-contain"
        />
      </div>
      <div className="flex flex-col w-full relative">
        <div className="flex justify-between items-center py-2 border-b border-dashed">
          <p>{name}</p>
          <RemoveCartItemBtn id={id} />
        </div>
        <div className="flex items-center justify-between w-full py-2 border-b border-dashed">
          <p>ფასი</p>
          <CheckDiscount discount={discount} price={price} br />
        </div>
        <div className="flex items-center justify-between w-full py-2 border-b border-dashed">
          <p>რაოდენობა</p>
          <SingleProductQuantity id={id} quantity={quantity} />
        </div>
        <div className="flex items-center justify-between w-full py-2">
          <p>ჯამი</p>
          <p className="font-semibold text-secondaryGreen text-[16px]">
            {formatToGeorgianLari(totalPrice)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMobileTable;
