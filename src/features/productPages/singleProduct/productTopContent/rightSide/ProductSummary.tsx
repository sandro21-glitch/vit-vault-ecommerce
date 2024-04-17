import Breadcrumb from "../../../../../ui/Breadcrumb";
import CheckDiscount from "../../../../../ui/CheckDiscount";
import ProductPortion from "./ProductPortion";
import ProductWeight from "./ProductWeight";
import Property from "./Property";

type ProductSummaryTypes = {
  singleProdData: {
    id: string;
    type: string | null;
    name: string;
    price: number;
    discount: number;
    portion: number | null;
    property: null | { available: boolean; name: string }[];
    inStock: boolean;
    quantity: null | string;
    weight: null | string;
  };
};

const ProductSummary = ({ singleProdData }: ProductSummaryTypes) => {
  const { name, price, discount, property, weight, portion } = singleProdData;
  return (
    <div className="flex-1">
      <Breadcrumb category={name} classname="font-sans" />
      <h1 className="text-[18px] font-semibold my-5">{name}</h1>
      <CheckDiscount discount={discount} price={price} classname="text-[22px]" />
      {weight && <ProductWeight weight={weight} />}
      {portion && <ProductPortion portion={portion} />}
      {property && <Property property={property} />}
    </div>
  );
};

export default ProductSummary;
