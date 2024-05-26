import OrderedProducts from "./orderContent/OrderedProducts";

const Order = () => {
  return (
    <div className="w-1/2 bg-[#F8F8F8]">
      <h3 className="text-[22px] text-center font-semibold mb-10 pt-10">
        თქვენი შეკვეთა
      </h3>
      <OrderedProducts />
    </div>
  );
};

export default Order;
