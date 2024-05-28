import OrderProductList from "./orderTableContent/OrderProductList";
import OrderTableFooter from "./orderTableContent/OrderTableFooter";
import OrderTableHeader from "./orderTableContent/OrderTableHeader";

const OrderTable = () => {
  return (
    <div className="bg-white p-3">
      <OrderTableHeader />
      <OrderProductList />
      <OrderTableFooter />
    </div>
  );
};

export default OrderTable;
