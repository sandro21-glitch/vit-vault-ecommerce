import { formatToGeorgianLari } from "../../../../utils/formatPrice";

type ProductTotalSumTypes = {
  totalPrice: number;
};
const ProductTotalSum = ({ totalPrice }: ProductTotalSumTypes) => {
  return (
    <td>
      <span className="font-semibold text-secondaryGreen text-[16px]">
        {formatToGeorgianLari(totalPrice)}
      </span>
    </td>
  );
};

export default ProductTotalSum;
