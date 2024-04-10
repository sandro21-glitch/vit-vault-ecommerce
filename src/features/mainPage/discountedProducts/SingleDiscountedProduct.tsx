type DiscountedProductListTypes = {
  product: {
    id: string;
    name: string;
    image: string;
    price: string;
  };
};
const SingleDiscountedProduct = ({
  product: { image, name, price },
}: DiscountedProductListTypes) => {
  return (
    <li className="group flex flex-col items-center text-center hover:shadow-mainShadow hover:scale-105 transition-all ease-in duration-150 cursor-pointer">
      <img
        src={image}
        alt=""
        className="max-h-[268px] w-full object-cover max-w-[250px]"
      />
      <h6 className="mb-5">{name}</h6>
      <p className="mb-2">{price}</p>
      <button className="invisible group-hover:visible mb-5 bg-secondaryGreen text-white font-semibold text-[11px] py-[8px] px-[12px]">
        <span>კალათაში დამატება</span>
      </button>
    </li>
  );
};

export default SingleDiscountedProduct;
