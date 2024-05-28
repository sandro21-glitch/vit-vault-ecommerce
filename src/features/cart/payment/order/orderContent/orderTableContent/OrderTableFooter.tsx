import { useAppSelector } from "../../../../../../hooks/hooks";
import { formatToGeorgianLari } from "../../../../../../utils/formatPrice";

const OrderTableFooter = () => {
  const { totalSum } = useAppSelector((store) => store.cart);

  return (
    <footer>
      <div className="flex justify-between border-b-2 mb-3 pb-3 cursor-pointer">
        <p className="text-black font-semibold">ჯამი</p>
        <p className="text-secondaryGreen font-semibold">
          {formatToGeorgianLari(totalSum)}
        </p>
      </div>
      <div className="flex justify-between border-b-2 mb-3 pb-3 cursor-pointer">
        <p className="text-black font-semibold">მიწოდება</p>
        <p className="text-secondaryGreen font-semibold">10₾</p>
      </div>
      <div className="flex justify-between border-b-2 mb-3 pb-3 cursor-pointer">
        <p className="text-[20px] font-semibold text-black">მთლიანი ჯამი</p>
        <p className="text-[20px] font-semibold text-secondaryGreen">
          {formatToGeorgianLari(totalSum + 10)}
        </p>
      </div>
    </footer>
  );
};

export default OrderTableFooter;
