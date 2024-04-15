import { useAppSelector } from "../../../hooks/hooks";
import SingleRandomProduct from "./SingleRandomProduct";

const RandomProductList = () => {
  const { productData } = useAppSelector((store) => store.product);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const copiedProductData = [...productData];
  const shuffledProducts = copiedProductData.sort(() => Math.random() - 0.5);
  const randomProducts = shuffledProducts.slice(0, 10);

  return (
    <ul className="flex flex-col">
      {randomProducts.map((product) => (
        <SingleRandomProduct key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default RandomProductList;
