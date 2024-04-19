import { Link } from "react-router-dom";
import { Product } from "../../../types/ProductTypes";
import CheckDiscount from "../../../ui/CheckDiscount";

type DiscountedProductListTypes = {
  product: Product;
};
const SingleDiscountedProduct = ({
  product: { images, name, price, discount, id },
}: DiscountedProductListTypes) => {
  const formattedName = name
    .replace(/\+/g, " ")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/-$/, "");

  return (
    <li className="h-[380px] group flex flex-col items-center text-center hover:shadow-mainShadow hover:scale-105 transition-all ease-in duration-150 cursor-pointer">
      <Link to={`product/${formattedName}`} state={{ id }}>
        <div className="w-full h-[268px] overflow-hidden flex justify-center items-center pt-10 mb-2">
          <img
            src={images[0]}
            alt=""
            className="object-cover w-[150px]  h-auto "
          />
        </div>
        <h6 className="mb-5">{name}</h6>
        <CheckDiscount discount={discount} price={price} />
        <button className="invisible group-hover:visible mb-5 bg-secondaryGreen text-white font-semibold text-[11px] py-[8px] px-[12px]">
          <span>კალათაში დამატება</span>
        </button>
      </Link>
    </li>
  );
};

export default SingleDiscountedProduct;
