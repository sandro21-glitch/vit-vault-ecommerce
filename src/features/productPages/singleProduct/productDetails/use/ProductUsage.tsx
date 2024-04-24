type ProdUsageTypes = {
  use: string | null;
};

const ProductUsage = ({ use }: ProdUsageTypes) => {
  if (!use) return null;

  return (
    <div className="mb-5">
      <p className="font-semibold text-black">მიღების წესი და დოზირება:</p>
      <p className="text-[14px] font-poppins">{use}</p>
    </div>
  );
};

export default ProductUsage;
