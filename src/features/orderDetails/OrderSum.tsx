import { formatToGeorgianLari } from "../../utils/formatPrice";

type OrderSumTypes = {
  totalOrderPrice: number;
};

const OrderSum = ({ totalOrderPrice }: OrderSumTypes) => {
  return (
    <div className="flex justify-between border-b mb-5 pb-5">
      <p className="text-black font-semibold">ჯამი</p>
      <p className="text-primaryGray font-semibold">
        {formatToGeorgianLari(totalOrderPrice)}
      </p>
    </div>
  );
};

export default OrderSum;
