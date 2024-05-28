import { formatToGeorgianLari } from "../utils/formatPrice";

type CheckDiscountTypes = {
  price: number;
  discount: number;
  classname?: string;
  br?: boolean;
  onlyDiscounted?: boolean;
};

const CheckDiscount = ({
  price,
  discount,
  classname,
  br,
  onlyDiscounted,
}: CheckDiscountTypes) => {
  if (discount > 0) {
    const discountedPrice = price - (price * discount) / 100;
    return (
      <>
        {onlyDiscounted && discount > 0 ? (
          <p className={`text-secondaryGreen font-bold ${classname}`}>
            {formatToGeorgianLari(discountedPrice)}
          </p>
        ) : (
          <div className={`flex ${br ? "flex-col" : "gap-1"} items-center`}>
            <p className={`line-through text-primaryGray ${classname}`}>
              {formatToGeorgianLari(price)}
            </p>
            <p className={`text-secondaryGreen font-bold ${classname}`}>
              {formatToGeorgianLari(discountedPrice)}
            </p>
          </div>
        )}
      </>
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
