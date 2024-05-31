import { formatToGeorgianLari } from "../../../../../utils/formatPrice";

type OrderTotalSumProps = {
  orderSum: number;
};

const OrderTotalSum = ({ orderSum }: OrderTotalSumProps) => {
  return (
    <li className="text-primaryGray font-medium hidden md:block ">
      სულ{" "}
      <span className="font-semibold text-secondaryGreen">
        {formatToGeorgianLari(orderSum)}
      </span>
    </li>
  );
};

export default OrderTotalSum;
