import { Link } from "react-router-dom";
import { OrderedProducts } from "../../types/orderTypes";
import CheckDiscount from "../../ui/CheckDiscount";
import { formatPath } from "../../utils/formatPath";

type SingleOrderTypes = {
  product: OrderedProducts;
};

const SingleOrderProduct = ({
  product: { id, name, amount, discount, price },
}: SingleOrderTypes) => {
  return (
    <li key={id}>
      <Link
        to={`/product/${formatPath(name)}`}
        state={{ id }}
        className="flex justify-between border-b mb-5 pb-5 cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <p className="hover:text-black transition-colors ease-in duration-150">
            {name}
          </p>
          <span>✖</span>
          <p className="font-semibold text-black">{amount}</p>
        </div>
        <CheckDiscount discount={discount} price={price * amount} onlyDiscounted />
      </Link>
    </li>
  );
};

export default SingleOrderProduct;
