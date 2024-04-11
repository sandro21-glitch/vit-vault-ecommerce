type CheckDiscountTypes = {
  price: number;
  discount: number;
};

const CheckDiscount = ({ price, discount }: CheckDiscountTypes) => {
  if (discount > 0) {
    const discountedPrice = price - (price * discount) / 100;
    return (
      <div className="flex items-center gap-2">
        <p className="line-through text-primaryGray">{price}₾</p>
        <p className="text-secondaryGreen font-semibold">{discountedPrice}₾</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>{price}₾</p>
      </div>
    );
  }
};

export default CheckDiscount;
