import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import SingleShippedOrder from "./SingleShippedOrder";
import { fetchShippedOrdersFromFirebase } from "../../../slices/orderSlice";
import SmallSpinner from "../../../../ui/SmallSpinner";

const ShippedOrderList = () => {
  const { shippedOrders, status, error } = useAppSelector((store) => store.order);
  const { user } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user?.uid) {
      dispatch(fetchShippedOrdersFromFirebase(user?.uid));
    }
  }, [dispatch, user?.uid]);

  if (status === "loading") return <SmallSpinner />;
  if (status === "failed") return <p className="text-center">{error && error}</p>;

  return (
    <div className="mt-5">
      {shippedOrders.map((order) => {
        return <SingleShippedOrder key={order.orderId} order={order} />;
      })}
    </div>
  );
};

export default ShippedOrderList;
