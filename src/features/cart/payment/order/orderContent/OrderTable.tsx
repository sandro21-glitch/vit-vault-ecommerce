import OrderTableFooter from "./orderTableContent/OrderTableFooter";
import OrderTableHeader from "./orderTableContent/OrderTableHeader";

const OrderTable = () => {
  return (
    <div className="bg-white p-3">
    <OrderTableHeader />
      <ul>
        <li className="flex justify-between border-b-2 mb-3 pb-3 cursor-pointer text-black hover:text-[rgba(51,51,51,.7)] transition-colors ease-in duration-150">
          <p className="w-full max-w-1/2 text-inherit">
            Rule 1 - Sample Whey Blend
          </p>
          <p className="w-full text-end text-inherit">4.00₾ x 1</p>
        </li>
      </ul>
    <OrderTableFooter />
    </div>
  );
};

export default OrderTable;
