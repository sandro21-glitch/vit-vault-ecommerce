import { Link } from "react-router-dom";
import CheckDiscount from "../../../ui/CheckDiscount";
import { checkDiscount } from "../../../utils/checkDiscount";
import { CartProductTypes, removeCartProduct } from "../../slices/cartSlice";
import CloseButton from "../../../ui/CloseButton";
import { useAppDispatch } from "../../../hooks/hooks";
import { formatPath } from "../../../utils/formatPath";
import { closeSidebar } from "../../slices/modalSlice";

type SingleSidebarItemTypes = {
  product: CartProductTypes;
};

const SingleSidebarListItem = ({ product }: SingleSidebarItemTypes) => {
  const { discount, image, name, price, quantity, id } = product;

  const dispatch = useAppDispatch();
  const handleRemoveItem = () => {
    dispatch(removeCartProduct(id));
  };

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  return (
    <li className="relative" onClick={handleCloseSidebar}>
      <Link to={`/product/${formatPath(name)}`} state={{ id }}>
        <div className="flex px-4 py-5 border-b">
          <div className="mr-1 md:mr-5">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="max-w-[65px] min-w-[65px] h-[65px] object-contain"
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
