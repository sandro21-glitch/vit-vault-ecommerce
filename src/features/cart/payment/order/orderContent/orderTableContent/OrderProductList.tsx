import { useAppSelector } from "../../../../../../hooks/hooks";
import SingleOrderProduct from "./SingleOrderProduct";

const OrderProductList = () => {
  const { orders } = useAppSelector((store) => store.order);

  return (
    <ul>
      {orders.map((order) => {
        return <SingleOrderProduct key={order.id} order={order} />;
      })}
    </ul>
  );
};

export default OrderProductList;
