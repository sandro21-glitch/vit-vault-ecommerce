import soldOutIcon from "/icons/sold-out-sales-svgrepo-com.svg";
import CheckDiscount from "./CheckDiscount";
import { Link } from "react-router-dom";
import { formatPath } from "../utils/formatPath";
import AddToCartBtn from "./AddToCartBtn";
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
    <li
      key={id}
      className="group pt-2 pb-5 flex flex-col justify-between items-center relative w-full h-[350px] bg-white hover:shadow-mainShadow
       hover:scale-105 hover:z-[99999] transition-all ease-in duration-300 cursor-pointer"
    >
      <Link
        to={`/product/${formatPath(name)}`}
        state={{ id }}
        className="flex flex-col items-center text-center"
      >
        <img
          src={images[0]}
          alt={name}
          loading="lazy"
          className="h-[200px] w-auto object-cover my-2"
        />
        <h6 className="text-[14px] px-10">{name}</h6>

        {!inStock && (
          <div className="absolute top-0 right-0">
            <img src={soldOutIcon} alt="sold out" className="w-[3rem] h-auto" />
          </div>
        )}
      </Link>
      <div className="relative w-full">
        <div className="flex items-center justify-center">{CheckDiscount({ price, discount })}</div>
        <div className="absolute py-5 invisible group-hover:visible shadow-mainShadowB
         flex items-center justify-center opacity-0 group-hover:opacity-100
          top-7 left-0 right-0 z-[999999] w-full bg-white transition-all ease-in duration-150">
          <AddToCartBtn name={name} id={id} />
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
