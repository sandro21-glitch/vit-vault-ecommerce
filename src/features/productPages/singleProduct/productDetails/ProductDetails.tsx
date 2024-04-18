import { Product } from "../../../../types/ProductTypes";
import Characteristics from "./characteristics/Characteristics";
import ProductDescription from "./productDescription/ProductDescription";
import ProductUsage from "./use/ProductUsage";

type ProductDetailTypes = {
  singleProdData: Product;
};

const ProductDetails = ({ singleProdData }: ProductDetailTypes) => {
  const { desc, characteristics, name, use } = singleProdData;

  return (
    <div>
      <ProductDescription desc={desc} />
      <Characteristics characteristics={characteristics} name={name} />
      <ProductUsage use={use} />
    </div>
  );
};

export default ProductDetails;
