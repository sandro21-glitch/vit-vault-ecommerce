const OrderListHeader = () => {
  return (
    <ul className="grid grid-cols-5 border-b py-3 text-center text-[14px] lg:text-[16px]">
      <li>შეკვეთა</li>
      <li>თარიღი</li>
      <li>სტატუსი</li>
      <li>მთლიანი ჯამი</li>
      <li className="text-right">ქმედებები</li>
    </ul>
  );
};

export default OrderListHeader;
