import { Link } from "react-router-dom";
import { CartProductTypes } from "../../slices/cartSlice";
import CheckDiscount from "../../../ui/CheckDiscount";

type SingleCartProductTypes = {
  product: CartProductTypes;
};

const SingleCartProduct = ({ product }: SingleCartProductTypes) => {
  const { discount, id, image, name, price, quantity, totalPrice } = product;
  return (
    <tr className="text-left">
      <td>
        <button>X</button>
      </td>
      <td className="">
        <Link to={`/${id}`}>
          <img src={image} alt={name} className="max-w-[80px] min-w-[80px]" />
        </Link>
      </td>
      <td className="">{name}</td>
      <td className="">
        <CheckDiscount discount={discount} price={price} />
      </td>
      <td className="">{quantity}</td>
      <td className="">{totalPrice}</td>
    </tr>
  );
};

export default SingleCartProduct;
