import { OrderedProducts } from "../../types/orderTypes";
import CheckDiscount from "../../ui/CheckDiscount";

type SingleOrderTypes = {
  product: OrderedProducts;
};

const SingleOrderProduct = ({
  product: { id, name, amount, discount, price },
}: SingleOrderTypes) => {
  return (
    <li
      key={id}
      className="flex justify-between border-b mb-5 pb-5 cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <p>{name}</p>
        <span>✖</span>
        <p className="font-semibold text-black">{amount}</p>
      </div>
      <CheckDiscount discount={discount} price={price} onlyDiscounted />
    </li>
  );
};

export default SingleOrderProduct;
