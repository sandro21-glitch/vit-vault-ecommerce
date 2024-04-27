import { Link } from "react-router-dom";
import { CartProductTypes } from "../../slices/cartSlice";
import CheckDiscount from "../../../ui/CheckDiscount";
import { formatToGeorgianLari } from "../../../utils/formatPrice";
import RemoveCartItemBtn from "./RemoveCartItemBtn";

type SingleCartProductTypes = {
  product: CartProductTypes;
};

const SingleCartProduct = ({ product }: SingleCartProductTypes) => {
  const { discount, id, image, name, price, quantity, totalPrice } = product;
  return (
    <tr className="text-left">
      <td>
        <RemoveCartItemBtn id={id} />
      </td>
      <td>
        <Link to={`/${id}`}>
          <img
            src={image}
            alt={name}
            className="max-w-[80px] min-w-[80px] max-h-[80px] object-contain"
          />
        </Link>
      </td>
      <td className="cursor-pointer">
        <Link
          to="/"
          className="hover:text-primaryGray transition-colors ease-in duration-150"
        >
          {name}
        </Link>
      </td>
      <td>
        <CheckDiscount discount={discount} price={price} br={true} />
      </td>
      <td>
        <span>{quantity}</span>
      </td>
      <td>
        <span className="font-semibold text-secondaryGreen text-[16px]">
          {formatToGeorgianLari(totalPrice)}
        </span>
      </td>
    </tr>
  );
};

export default SingleCartProduct;