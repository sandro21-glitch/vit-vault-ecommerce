import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import OrderProductList from "./OrderProductList";
import DetailsHeader from "./DetailsHeader";
import OrderSum from "./OrderSum";
import OrderDelivery from "./OrderDelivery";
import OrderTotalPrice from "./OrderTotalPrice";
import OrderPayment from "./OrderPayment";
import DeliveryFee from "./DeliveryFee";

const OrderDetailsContent = () => {
  const { shippedOrders } = useAppSelector((store) => store.order);
  const { orderId } = useParams();

  if (!orderId) return null;
  const orderInfo = shippedOrders.find((order) => order.orderId === orderId);

  return (
    <div className="mb-52 mt-10">
      <div>
        <DetailsHeader />
        <OrderProductList orderInfo={orderInfo} />
        <OrderSum />
        <OrderDelivery />
        <OrderPayment />
        <DeliveryFee />
        <OrderTotalPrice />
      </div>
    </div>
  );
};

export default OrderDetailsContent;
