type ProductQuantityTypes = {
  quantity: string | null;
};

const ProductQuantity = ({ quantity }: ProductQuantityTypes) => {
  return (
    <div className="flex justify-between text-[14px] border-b py-2">
      <p className="text-black font-semibold">რაოდენობა</p>
      <p className="font-sans">{quantity}</p>
    </div>
  );
};

export default ProductQuantity;
