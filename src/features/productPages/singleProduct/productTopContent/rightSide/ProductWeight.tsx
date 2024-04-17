type ProductWeightTypes = {
  weight: null | string;
};

const ProductWeight = ({ weight }: ProductWeightTypes) => {
  return (
    <div className="flex justify-between text-[14px] border-b border-dashed py-2">
      <p className="text-black font-semibold">წონა</p>
      <p className="font-sans">{weight}</p>
    </div>
  );
};

export default ProductWeight;
