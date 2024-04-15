import { useAppSelector } from "../../../hooks/hooks";
import { useEffect, useState } from "react";
import SingleRandomProduct from "./SingleRandomProduct";
import { Product } from "../../../types/ProductTypes";
import { useLocation } from "react-router-dom";

const RandomProductList = () => {
  const { productData } = useAppSelector((store) => store.product);
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);
  const location = useLocation();

  useEffect(() => {
    if (productData) {
      const copiedProductData = [...productData];
      const shuffledProducts = copiedProductData.sort(
        () => Math.random() - 0.5
      );
      const products = shuffledProducts.slice(0, 10);
      setRandomProducts(products);
    }
  }, [location]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="flex flex-col">
      {randomProducts.map((product) => (
        <SingleRandomProduct key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default RandomProductList;
