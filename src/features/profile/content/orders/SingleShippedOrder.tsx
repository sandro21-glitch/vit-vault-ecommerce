import { ShippingData } from "../../../../types/orderTypes";
import OrderActions from "./shippedOrderContent/OrderActions";
import OrderDate from "./shippedOrderContent/OrderDate";
import OrderId from "./shippedOrderContent/OrderId";
import OrderTotalSum from "./shippedOrderContent/OrderTotalSum";
import PendingPayment from "./shippedOrderContent/PendingPayment";

type SingleShipingTypes = {
  order: ShippingData;
};

const SingleShippedOrder = ({
  order: { orderId, shippingDate, newProduct },
}: SingleShipingTypes) => {
  const orderSum = newProduct.reduce((acc, cur) => {
    const discountedPrice = cur.price - (cur.price * cur.discount) / 100;
    const productTotal = cur.amount * discountedPrice;
    return acc + productTotal;
  }, 0);

  return (
    <ul className="grid grid-cols-5 font-poppins mb-5 py-5 border-b border-dotted">
      <OrderId orderId={orderId} />
      <OrderDate shippingDate={shippingDate} />
      <PendingPayment />
      <OrderTotalSum orderSum={orderSum} />
      <OrderActions />
    </ul>
  );
};

export default SingleShippedOrder;
