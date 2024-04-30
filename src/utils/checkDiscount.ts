export const checkDiscount = (price: number, discount: number) => {
  const discountedPrice = price - (price * (discount || 0)) / 100;
  if (discountedPrice > 0) return discountedPrice;
  return price;
};
