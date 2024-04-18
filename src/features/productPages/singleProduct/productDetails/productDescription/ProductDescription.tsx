type DescriptionTypes = {
  desc: string;
};

const ProductDescription = ({ desc }: DescriptionTypes) => {
  return (
    <div className="mb-5">
      <p className="text-[14px]">{desc}</p>
    </div>
  );
};

export default ProductDescription;
