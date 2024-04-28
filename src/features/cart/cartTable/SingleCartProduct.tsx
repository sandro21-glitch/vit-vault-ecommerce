import { Link } from "react-router-dom";
import { CartProductTypes } from "../../slices/cartSlice";
import CheckDiscount from "../../../ui/CheckDiscount";
import { formatToGeorgianLari } from "../../../utils/formatPrice";
import RemoveCartItemBtn from "./RemoveCartItemBtn";
import { formatPath } from "../../../utils/formatPath";
import { useState } from "react";
import UpdateQuantity from "../../../ui/UpdateQuantity";

type SingleCartProductTypes = {
  product: CartProductTypes;
};

const SingleCartProduct = ({ product }: SingleCartProductTypes) => {
  const { discount, id, image, name, price, quantity, totalPrice } = product;
  const [itemCount, setItemCount] = useState<number>(quantity);
  const handleIncreaseCount = () => {
    setItemCount(itemCount + 1);
  };
  const handleDecreaseCount = () => {
    if (itemCount <= 1) return;
    setItemCount(itemCount - 1);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setItemCount(value);
    }
  };
  return (
    <tr className="text-left">
      <td>
        <RemoveCartItemBtn id={id} />
      </td>
      <td>
        <Link to={`/product/${formatPath(name)}`} state={{ id }}>
          <img
            src={image}
            alt={name}
            className="max-w-[80px] min-w-[80px] max-h-[80px] object-contain"
          />
        </Link>
      </td>
      <td className="cursor-pointer">
        <Link
          to={`/product/${formatPath(name)}`}
          state={{ id }}
          className="hover:text-primaryGray transition-colors ease-in duration-150"
        >
          {name}
        </Link>
      </td>
      <td>
        <CheckDiscount discount={discount} price={price} br={true} />
      </td>
      <td>
        <UpdateQuantity
          itemCount={itemCount}
          handleInputChange={handleInputChange}
          handleIncreaseCount={handleIncreaseCount}
          handleDecreaseCount={handleDecreaseCount}
        />
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
