import OrderTable from "./orderContent/OrderTable";

const Order = () => {
  return (
    <div className="w-1/2 bg-[#F8F8F8] p-10">
      <h3 className="text-[22px] text-center font-semibold mb-10 ">
        თქვენი შეკვეთა
      </h3>
      <OrderTable />
    </div>
  );
};

export default Order;
