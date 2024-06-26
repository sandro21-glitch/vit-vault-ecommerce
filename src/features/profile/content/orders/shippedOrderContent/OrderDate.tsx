type OrderDateProps = {
  shippingDate: string;
};

const OrderDate = ({ shippingDate }: OrderDateProps) => {
  return (
    <li className="text-wrap whitespace-break-spaces max-w-[50%] text-primaryGray font-medium md:text-[14px] text-[13px]">
      {shippingDate}
    </li>
  );
};

export default OrderDate;
