import { formatToGeorgianLari } from "../utils/formatPrice";

type CheckDiscountTypes = {
  price: number;
  discount: number;
};

const CheckDiscount = ({ price, discount }: CheckDiscountTypes) => {
  if (discount > 0) {
    const discountedPrice = price - (price * discount) / 100;
    return (
      <div className="flex items-center gap-1">
        <p className="line-through text-primaryGray">
          {formatToGeorgianLari(price)}
        </p>
        <p className="text-secondaryGreen font-bold">
          {formatToGeorgianLari(discountedPrice)}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p className="text-secondaryGreen font-bold">
          {formatToGeorgianLari(price)}
        </p>
      </div>
    );
  }
};

export default CheckDiscount;
