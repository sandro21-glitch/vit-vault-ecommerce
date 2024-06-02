import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import OrderProductList from "./OrderProductList";
import DetailsHeader from "./DetailsHeader";
import OrderSum from "./OrderSum";
import OrderDelivery from "./OrderDelivery";
import OrderTotalPrice from "./OrderTotalPrice";
import OrderPayment from "./OrderPayment";
import DeliveryFee from "./DeliveryFee";
import { useEffect } from "react";

const OrderDetailsContent = () => {
  const { shippedOrders } = useAppSelector((store) => store.order);
  const { orderId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!orderId || !shippedOrders.find((order) => order.orderId === orderId)) {
      navigate("/");
    }
  }, [orderId, shippedOrders, navigate]);

  const orderInfo = shippedOrders.find((order) => order.orderId === orderId);

  const totalOrderPrice =
    orderInfo?.newProduct.reduce((acc, cur) => {
      const discountedPrice =
        cur.price * cur.amount - (cur.price * cur.discount) / 100;
      return acc + discountedPrice;
    }, 0) ?? 0;

  return (
    <div className="mb-52 mt-10">
      <div>
        <DetailsHeader />
        <OrderProductList orderInfo={orderInfo} />
        <OrderSum totalOrderPrice={totalOrderPrice} />
        <OrderDelivery />
        <OrderPayment />
        <DeliveryFee />
        <OrderTotalPrice totalOrderPrice={totalOrderPrice} />
      </div>
    </div>
  );
};

export default OrderDetailsContent;
