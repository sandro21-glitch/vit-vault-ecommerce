import { Link } from "react-router-dom";
import { Product } from "../../../../types/ProductTypes";
import { formatPath } from "../../../../utils/formatPath";
import CheckDiscount from "../../../../ui/CheckDiscount";

type SingleResultTypes = {
  data: Product;
  setIsTyping: (typeing: boolean) => void;
  setSearch: (search: string) => void;
};

const SingelResult = ({ data, setIsTyping, setSearch }: SingleResultTypes) => {
  const { name, images, discount, price, id } = data;

  const handleStopTyping = () => {
    setSearch("");
    setIsTyping(false);
  };

  return (
    <li onClick={handleStopTyping}>
      <Link
        to={`/product/${formatPath(name)}`}
        state={{ id }}
        className="w-full flex items-center border p-5 cursor-pointer"
      >
        <div className="flex justify-center items-center">
          <div className="w-[65px] h-[65px] overflow-hidden">
            <img
              src={images[0]}
              alt={name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="ml-3">
          <h6>{name}</h6>
          <CheckDiscount discount={discount} price={price} />
        </div>
      </Link>
    </li>
  );
};

export default SingelResult;
