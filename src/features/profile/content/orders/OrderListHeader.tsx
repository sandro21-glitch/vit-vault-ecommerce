const OrderListHeader = () => {
  return (
    <ul className="grid grid-cols-4 md:grid-cols-5 border-b py-3 text-[14px] lg:text-[16px]">
      <li>შეკვეთა</li>
      <li>თარიღი</li>
      <li>სტატუსი</li>
      <li className="hidden md:block">მთლიანი ჯამი</li>
      <li className="text-right">ქმედებები</li>
    </ul>
  );
};

export default OrderListHeader;
