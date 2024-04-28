import { Link } from "react-router-dom";
import { CartProductTypes } from "../../../slices/cartSlice";
import CheckDiscount from "../../../../ui/CheckDiscount";
import RemoveCartItem from "./RemoveCartItem";
import { formatPath } from "../../../../utils/formatPath";

type SingleCartItemTypes = {
  item: CartProductTypes;
};

const SingleCartItem = ({ item }: SingleCartItemTypes) => {
  const { name, price, quantity, image, id } = item;
  return (
    <li className="py-3 border-b-2 flex relative">
      <Link to={`/product/${formatPath(name)}`} className="mr-2" state={{ id }}>
        <img src={image} alt={name} className="min-w-[45px] max-w-[45px]" />
      </Link>
      <div className="flex flex-col">
        <h6 className="text-[14px]">{name}</h6>
        <div className="flex">
          <p className="text-primaryGray font-semibold mr-1">{quantity} </p>
          <span className="font-semibold text-primaryGray"> x </span>
          {<CheckDiscount discount={0} price={price} />}
        </div>
      </div>
      <RemoveCartItem id={id} />
    </li>
  );
};

export default SingleCartItem;