import { Link } from "react-router-dom";
import { CartProductTypes } from "../../../slices/cartSlice";
import CheckDiscount from "../../../../ui/CheckDiscount";

type SingleCartItemTypes = {
  item: CartProductTypes;
};

const SingleCartItem = ({ item }: SingleCartItemTypes) => {
  const { name, price, quantity, image } = item;
  return (
    <li className="py-3 border-b-2 flex relative">
      <Link to={"/"} className="mr-2">
        <img src={image} alt={name} className="min-w-[65px] max-w-[65px]" />
      </Link>
      <div className="flex flex-col">
        <h6 className="text-[14px]">{name}</h6>
        <div className="flex">
          <p className="text-primaryGray font-semibold mr-1">{quantity} </p>
          <span className="font-semibold text-primaryGray"> x </span>
          {<CheckDiscount discount={0} price={price} />}
        </div>
      </div>
      <button className="absolute right-[-5px] top-0 text-[20px]">×</button>
    </li>
  );
};

export default SingleCartItem;
