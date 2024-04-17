import { formatToGeorgianLari } from "../utils/formatPrice";

type CheckDiscountTypes = {
  price: number;
  discount: number;
  classname?: string;
};

const CheckDiscount = ({ price, discount, classname }: CheckDiscountTypes) => {
  if (discount > 0) {
    const discountedPrice = price - (price * discount) / 100;
    return (
      <div className="flex items-center gap-1">
        <p className={`line-through text-primaryGray ${classname}`}>
          {formatToGeorgianLari(price)}
        </p>
        <p className={`text-secondaryGreen font-bold ${classname}`}>
          {formatToGeorgianLari(discountedPrice)}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p className={`text-secondaryGreen font-bold ${classname}`}>
          {formatToGeorgianLari(price)}
        </p>
      </div>
    );
  }
};

export default CheckDiscount;
