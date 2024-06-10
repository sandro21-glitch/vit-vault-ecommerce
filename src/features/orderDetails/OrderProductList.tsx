import { ShippingData } from "../../types/orderTypes";
import SingleOrderProduct from "./SingleOrderProduct";

type OrderProductListProps = {
  orderInfo: ShippingData | undefined;
};

const OrderProductList = ({ orderInfo }: OrderProductListProps) => {
  return (
    <ul>
      {orderInfo?.newProduct.map((product) => {
        return <SingleOrderProduct key={product.id} product={product} />;
      })}
    </ul>
  );
};

export default OrderProductList;
