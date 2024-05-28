import { Link } from "react-router-dom";
import { OrderedProducts } from "../../../../../../types/orderTypes";
import CheckDiscount from "../../../../../../ui/CheckDiscount";
import { formatPath } from "../../../../../../utils/formatPath";

type SingleOrderTypes = {
  order: OrderedProducts;
};

const SingleOrderProduct = ({
  order: { amount, id, name, price, discount },
}: SingleOrderTypes) => {
  return (
    <li className=" border-b-2 mb-3 pb-3 cursor-pointer text-black hover:text-[rgba(51,51,51,.7)] transition-colors ease-in duration-150">
      <Link
        to={`/product/${formatPath(name)}`}
        state={{ id }}
        className="flex justify-between"
      >
        <p className="w-full max-w-1/2 text-inherit">{name}</p>
        <div className="w-full text-end text-inherit flex justify-end items-center">
          <CheckDiscount price={price} discount={discount} onlyDiscounted />
          <span className="mx-1">x</span>
          <span>{amount}</span>
        </div>
      </Link>
    </li>
  );
};

export default SingleOrderProduct;
