import { useAppSelector } from "../../../../hooks/hooks";
import SingleShippedOrder from "./SingleShippedOrder";

const ShippedOrderList = () => {
  const { shippedOrders } = useAppSelector((store) => store.order);
  return (
    <div className="mt-5">
      {shippedOrders.map((order) => {
        return <SingleShippedOrder key={order.orderId} order={order} />;
      })}
    </div>
  );
};

export default ShippedOrderList;
