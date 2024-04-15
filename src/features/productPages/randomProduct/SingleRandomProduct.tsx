import { Link } from "react-router-dom";
import CheckDiscount from "../../../ui/CheckDiscount";

type SingleRandomProdTypes = {
  product: {
    name: string;
    images: string[];
    discount: number;
    price: number;
  };
};

const SingleRandomProduct = ({
  product: { name, images, discount, price },
}: SingleRandomProdTypes) => {
  return (
    <li>
      <Link
        to="/"
        className="flex items-center gap-5 border-b pb-[15px] mb-[15px]"
      >
        <img
          src={images[0]}
          alt={name}
          loading="lazy"
          className="min-w-[50px] max-w-[50px]"
        />
        <div>
          <p>{name}</p>
          <CheckDiscount discount={discount} price={price} />
        </div>
      </Link>
    </li>
  );
};

export default SingleRandomProduct;
