import { Link } from "react-router-dom";
import CheckDiscount from "../../../ui/CheckDiscount";
import { checkDiscount } from "../../../utils/checkDiscount";
import { CartProductTypes, removeCartProduct } from "../../slices/cartSlice";
import CloseButton from "../../../ui/CloseButton";
import { useAppDispatch } from "../../../hooks/hooks";

type SingleSidebarItemTypes = {
  product: CartProductTypes;
};

const SingleSidebarListItem = ({ product }: SingleSidebarItemTypes) => {
  const { discount, image, name, price, quantity, id } = product;

  const dispatch = useAppDispatch();
  const handleRemoveItem = () => {
    dispatch(removeCartProduct(id));
  };
  return (
    <li className="relative">
      <Link to="/">
        <div className="flex px-4 py-5 border-b">
          <div className="mr-5">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="max-w-[45px] min-w-[45px]"
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
          <div className="absolute right-0 top-2">
            <CloseButton onClick={handleRemoveItem} />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default SingleSidebarListItem;
