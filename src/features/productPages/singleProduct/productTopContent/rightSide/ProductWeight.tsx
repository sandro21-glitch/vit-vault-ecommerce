type ProductWeightTypes = {
  weight: null | string;
};

const ProductWeight = ({ weight }: ProductWeightTypes) => {
  return (
    <div className="flex justify-between text-[14px] border-b py-2">
      <p className="text-black font-semibold">წონა</p>
      <p>{weight}</p>
    </div>
  );
};

export default ProductWeight;
