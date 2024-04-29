import { CartProductTypes } from "../../../slices/cartSlice";
import CheckDiscount from "../../../../ui/CheckDiscount";
import RemoveCartItemBtn from "./RemoveCartItemBtn";
import SingleProductQuantity from "./SingleProductQuantity";
import ProductTotalSum from "./ProductTotalSum";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";

type SingleCartProductTypes = {
  product: CartProductTypes;
};

const SingleCartProduct = ({ product }: SingleCartProductTypes) => {
  const { discount, id, image, name, price, quantity, totalPrice } = product;

  return (
    <tr className="text-left">
      <RemoveCartItemBtn id={id} />
      <ProductImage name={name} id={id} image={image} />
      <ProductName id={id} name={name} />
      <td>
        <CheckDiscount discount={discount} price={price} br={true} />
      </td>
      <SingleProductQuantity quantity={quantity} id={id} />
      <ProductTotalSum totalPrice={totalPrice} />
    </tr>
  );
};

export default SingleCartProduct;
