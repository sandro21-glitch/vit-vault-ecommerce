type OrderIdProps = {
  orderId: string;
};

const OrderId = ({ orderId }: OrderIdProps) => {
  return (
    <li className="font-semibold cursor-pointer ">#{orderId.slice(0, 7)}</li>
  );
};

export default OrderId;
