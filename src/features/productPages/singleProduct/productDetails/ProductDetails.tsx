import { Product } from "../../../../types/ProductTypes";
import Characteristics from "./characteristics/Characteristics";
import ProductDescription from "./productDescription/ProductDescription";
import ProductTabs from "./tabs/ProductTabs";
import ProductUsage from "./use/ProductUsage";
import Warning from "./warning/Warning";

type ProductDetailTypes = {
  singleProdData: Product;
};

const ProductDetails = ({ singleProdData }: ProductDetailTypes) => {
  const { desc, characteristics, name, use, category } = singleProdData;

  return (
    <div className="border-t relative">
      <ProductTabs />
      <div className="pt-10">
        <ProductDescription desc={desc} />
        {category !== "სპორტული ტანსაცმელი და ფეხსაცმელი" && (
          <>
            <Characteristics characteristics={characteristics} name={name} />
            <ProductUsage use={use} />
          </>
        )}
        {category !== "სპორტული ტანსაცმელი და ფეხსაცმელი" &&
          category !== "აქსესუარები" && <Warning />}
      </div>
    </div>
  );
};

export default ProductDetails;
