import Breadcrumb from "../../../../../ui/Breadcrumb";
import CheckDiscount from "../../../../../ui/CheckDiscount";
import AddToCart from "./addToCart/AddToCart";
import AddToWhishlist from "./AddToWhishlist";
import CheckStock from "./CheckStock";
import ProductPortion from "./ProductPortion";
import ProductQuantity from "./ProductQuantity";
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
  const {
    name,
    price,
    discount,
    property,
    weight,
    portion,
    inStock,
    quantity,
  } = singleProdData;
  return (
    <div className="flex-1">
      <Breadcrumb category={name} classname="font-sans" />
      <h1 className="text-[18px] font-semibold my-5">{name}</h1>
      <CheckDiscount
        discount={discount}
        price={price}
        classname="text-[22px]"
      />
      {weight && <ProductWeight weight={weight} />}
      {portion && <ProductPortion portion={portion} />}
      {quantity && <ProductQuantity quantity={quantity} />}
      {property && <Property property={property} />}
      <CheckStock stock={inStock} />
      {inStock && <AddToCart />}
      <AddToWhishlist />
    </div>
  );
};

export default ProductSummary;
