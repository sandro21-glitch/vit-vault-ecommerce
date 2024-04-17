type ProductPortion = {
  portion: number | null;
};
const ProductPortion = ({ portion }: ProductPortion) => {
  return (
    <div className="flex justify-between text-[14px] border-b py-2">
      <p className="text-black font-semibold">პორცია</p>
      <p>{portion}</p>
    </div>
  );
};

export default ProductPortion;
