import OrderListHeader from "./OrderListHeader";
import ShippedOrderList from "./ShippedOrderList";

const Orders = () => {
  return (
    <div className="w-full">
      <OrderListHeader />
      <ShippedOrderList />
    </div>
  );
};

export default Orders;
