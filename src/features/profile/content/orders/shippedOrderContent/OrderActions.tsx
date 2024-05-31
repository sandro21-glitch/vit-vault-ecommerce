import { Link } from "react-router-dom";
import CloseButton from "../../../../../ui/CloseButton";

type OrderTypes = {
  orderId: string;
};

const OrderActions = ({ orderId }: OrderTypes) => {
  const handleRemoveOrder = () => {
    console.log(orderId);
  };

  return (
    <li className="flex items-center justify-end">
      <CloseButton onClick={handleRemoveOrder} />
      <Link
        to={`/order/${orderId}`}
        className="bg-secondaryGreen text-white px-4 py-2 font-semibold
        text-[14px] hover:bg-primaryGreen transition-colors ease-in duration-150 ml-2"
      >
        ნახვა
      </Link>
    </li>
  );
};

export default OrderActions;
