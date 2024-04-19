import React from "react";
import soldOutIcon from "/icons/sold-out-sales-svgrepo-com.svg";
import CheckDiscount from "./CheckDiscount";
import { Link } from "react-router-dom";

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
  // format the name
  const formattedName = name
    .replace(/\+/g, " ")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/-$/, "");
  return (
    <li key={id}>
      <Link
        to={`/product/${formattedName}`}
        state={{ id }}
        className="relative w-full h-[350px] flex flex-col items-center text-center bg-white hover:shadow-mainShadow hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
      >
        <img
          src={images[0]}
          alt={name}
          loading="lazy"
          className="h-[200px] w-auto object-cover mt-10 mb-2"
        />
        <h6 className="text-[14px]">{name}</h6>
        <div>{CheckDiscount({ price, discount })}</div>
        {!inStock && (
          <div className="absolute top-0 right-0">
            <img src={soldOutIcon} alt="sold out" className="w-[3rem] h-auto" />
          </div>
        )}
      </Link>
    </li>
  );
};

export default ProductCard;
