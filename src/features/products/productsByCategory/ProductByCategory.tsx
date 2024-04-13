import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import CheckDiscount from "../../../ui/CheckDiscount";

const ProductByCategory = () => {
  const { productData } = useAppSelector((store) => store.product);
  const { category } = useParams();

  const selectedCategory = productData?.filter(
    (product) => product.category === category
  );

  return (
    <section className="section-x section-center">
      <article className="flex">
        <div className="w-full max-w-[25%] h-auto">
          testtttffffffffffffffffffffff
        </div>
        <ul className="grid grid-cols-4 gap-5 w-full max-w-[75%] mt-20">
          {selectedCategory?.map((categoryItem) => {
            const { name, images, price, id, discount } = categoryItem;
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
          })}
        </ul>
      </article>
    </section>
  );
};

export default ProductByCategory;
