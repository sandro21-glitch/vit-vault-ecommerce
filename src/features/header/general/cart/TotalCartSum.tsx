import { useAppSelector } from "../../../../hooks/hooks";
import { formatToGeorgianLari } from "../../../../utils/formatPrice";

const TotalCartSum = () => {
  const { totalSum } = useAppSelector((store) => store.cart);

  return (
    <span className="ml-3 font-semibold text-[#333] text-[14px]">
      {formatToGeorgianLari(totalSum)}
    </span>
  );
};

export default TotalCartSum;
