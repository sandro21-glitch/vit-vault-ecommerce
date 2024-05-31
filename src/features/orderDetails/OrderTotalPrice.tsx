import { formatToGeorgianLari } from "../../utils/formatPrice";

type OrderTotalPriceTypes = {
  totalOrderPrice: number;
};

const OrderTotalPrice = ({ totalOrderPrice }: OrderTotalPriceTypes) => {
  return (
    <div className="flex justify-between border-b mb-5 pb-5">
      <p className="text-black font-semibold">მთლიანი ჯამი</p>
      <p className="text-primaryGray font-semibold">
        {formatToGeorgianLari(totalOrderPrice + 10)}
      </p>
    </div>
  );
};

export default OrderTotalPrice;
