import { useAppSelector } from "../../../hooks/hooks";
import { formatToGeorgianLari } from "../../../utils/formatPrice";

const CartTotalList = () => {
  const { totalSum, totalDiscount } = useAppSelector((store) => store.cart);

  return (
    <ul>
      <li className="py-3 border-b text-[14px]">
        <div className="flex items-center justify-between">
          <p className="text-black ">ჯამი</p>
          <p>{formatToGeorgianLari(totalSum)}</p>
        </div>
      </li>
      <li className="py-3 border-b text-[14px]">
        <div className="flex items-center justify-between">
          <p className="text-[16px] text-black font-semibold">
            საერთო ფასდაკლება
          </p>
          <p className="text-secondaryGreen font-semibold  text-[20px]">
            {formatToGeorgianLari(totalDiscount)}
          </p>
        </div>
      </li>
      <li className="py-3">
        <div className="flex items-center justify-between">
          <p className="text-[16px] text-black font-semibold">მთლიანი ჯამი</p>
          <p className="text-secondaryGreen font-semibold  text-[20px]">
            {formatToGeorgianLari(totalSum)}
          </p>
        </div>
      </li>
    </ul>
  );
};

export default CartTotalList;
