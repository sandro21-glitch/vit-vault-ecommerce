import { Product } from "../../../../types/ProductTypes";
import Characteristics from "./characteristics/Characteristics";
import ProductDescription from "./productDescription/ProductDescription";
import ProductTabs from "./tabs/ProductTabs";
import ProductUsage from "./use/ProductUsage";

type ProductDetailTypes = {
  singleProdData: Product;
};

const ProductDetails = ({ singleProdData }: ProductDetailTypes) => {
  const { desc, characteristics, name, use } = singleProdData;

  return (
    <div className="border-t relative">
      <ProductTabs />
      <div className="pt-10">
        <ProductDescription desc={desc} />
        <Characteristics characteristics={characteristics} name={name} />
        <ProductUsage use={use} />
      </div>
    </div>
  );
};

export default ProductDetails;
