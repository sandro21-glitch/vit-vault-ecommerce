import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";

const ProductByCategory = () => {
  const { productData } = useAppSelector((store) => store.product);
  const { category } = useParams();

  const selectedCategory = productData?.filter(
    (product) => product.category === category
  );

  return (
    <section className="section-x section-center">
      <article className="flex">
        <div className="w-full max-w-[30%] h-auto">
          testtttffffffffffffffffffffff
        </div>
        <ul className="grid grid-cols-4 gap-5 w-full max-w-[70%]">
          {selectedCategory?.map((categoryItem) => {
            const { name, images, price, id } = categoryItem;
            return (
              <li key={id} className="flex flex-col items-center bg-red-900">
                <img src={images[0]} alt={name} className="h-[200px] w-auto" />
                <h6>{name}</h6>
                <p>{price}</p>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default ProductByCategory;
