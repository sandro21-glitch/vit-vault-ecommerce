import CheckDiscount from "../../../ui/CheckDiscount";

type SingleProductByCategoryTypes = {
  categoryItem: {
    name: string;
    images: string[];
    price: number;
    id: string;
    discount: number;
  };
};

const SingleProductByCategory = ({
  categoryItem: { name, images, price, id, discount },
}: SingleProductByCategoryTypes) => {
  return (
    <li
      key={id}
      className="w-full h-[350px] flex flex-col items-center text-center bg-white hover:shadow-mainShadow hover:scale-105 transition-all ease-in duration-200 cursor-pointer"
    >
      <img
        src={images[0]}
        alt={name}
        loading="lazy"
        className="h-[200px] w-auto object-cover mt-10"
      />
      <h6 className="text-[14px]">{name}</h6>
      <p>{CheckDiscount({ price, discount })}</p>
    </li>
  );
};

export default SingleProductByCategory;
