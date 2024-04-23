import soldOutIcon from "/icons/sold-out-sales-svgrepo-com.svg";
import CheckDiscount from "./CheckDiscount";
import { Link } from "react-router-dom";
import { formatPath } from "../utils/formatPath";
type ProductCardProps = {
  categoryItem: {
    name: string;
    images: string[];
    price: number;
    id: string;
    discount: number;
    inStock: boolean;
  };
};

const ProductCard: React.FC<ProductCardProps> = ({ categoryItem }) => {
  const { discount, price, id, images, inStock, name } = categoryItem;

  return (
    <li key={id}
     className="group flex flex-col items-center relative w-full h-[350px] bg-white hover:shadow-mainShadow hover:scale-105 transition-all ease-in duration-200 cursor-pointer">
      <Link
        to={`/product/${formatPath(name)}`}
        state={{ id }}
        className="flex flex-col items-center text-center"
      >
        <img
          src={images[0]}
          alt={name}
          loading="lazy"
          className="h-[200px] w-auto object-cover mt-10 mb-2"
        />
        <h6 className="text-[14px] px-10">{name}</h6>
        <div className="mb-1">{CheckDiscount({ price, discount })}</div>
        {!inStock && (
          <div className="absolute top-0 right-0">
            <img src={soldOutIcon} alt="sold out" className="w-[3rem] h-auto" />
          </div>
        )}
      </Link>
      <button
        type="button"
        data-twe-ripple-init
        data-twe-ripple-color="light"
        className="hidden font-serif font-semibold group-hover:block rounded bg-secondaryGreen px-6 pb-2 pt-2.5 text-[12px] uppercase leading-normal text-white shadow-primary-3"
      >
        კალათაში დამატება
      </button>
    </li>
  );
};

export default ProductCard;
