import { Link } from "react-router-dom";
import CheckDiscount from "../../ui/CheckDiscount";
import { checkDiscount } from "../../utils/checkDiscount";
import { CartProductTypes } from "../slices/cartSlice";

type SingleSidebarItemTypes = {
  product: CartProductTypes;
};

const SingleSidebarListItem = ({ product }: SingleSidebarItemTypes) => {
  const { discount, image, name, price, quantity } = product;

  return (
    <li className="flex px-4 py-5 border-b">
      <Link to="/">
        <div className="mr-5">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="max-w-[65px] min-w-[65px]"
          />
        </div>
        <div>
          <h6 className="text-[14px]">{name}</h6>
          <div className="flex text-primaryGray font-medium">
            <span>{quantity}</span>
            <span className="ml-1">x</span>
            <CheckDiscount
              discount={0}
              price={checkDiscount(price, discount)}
            />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default SingleSidebarListItem;
