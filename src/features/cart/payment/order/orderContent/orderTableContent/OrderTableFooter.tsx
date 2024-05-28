const OrderTableFooter = () => {
  return (
    <footer>
      <div className="flex justify-between border-b-2 mb-3 pb-3 cursor-pointer">
        <p className="text-black font-semibold">ჯამი</p>
        <p className="text-secondaryGreen font-semibold">7₾</p>
      </div>
      <div className="flex justify-between border-b-2 mb-3 pb-3 cursor-pointer">
        <p className="text-black font-semibold">მიწოდება</p>
        <p className="text-secondaryGreen font-semibold">4₾</p>
      </div>
      <div className="flex justify-between border-b-2 mb-3 pb-3 cursor-pointer">
        <p className="text-[20px] font-semibold text-black">მთლიანი ჯამი</p>
        <p className="text-[20px] font-semibold text-secondaryGreen">11₾</p>
      </div>
    </footer>
  );
};

export default OrderTableFooter;
