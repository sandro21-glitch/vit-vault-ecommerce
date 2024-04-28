type ProductQuantityTypes = {
  itemCount: number;
  handleIncreaseCount: () => void;
  handleDecreaseCount: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const UpdateQuantity = ({
  itemCount,
  handleIncreaseCount,
  handleDecreaseCount,
  handleInputChange,
}: ProductQuantityTypes) => {
  return (
    <div className="flex">
      <button
        onClick={handleDecreaseCount}
        className="border-2 min-w-[25px] h-[42px] font-semibold hover:bg-secondaryGreen hover:text-white hover:border-secondaryGreen transition-all ease-in duration-150"
      >
        -
      </button>
      <input
        type="number"
        value={itemCount}
        onChange={handleInputChange}
        className="w-[30px] h-[42px] text-center border-t-2 border-b-2 outline-none"
      />
      <button
        onClick={handleIncreaseCount}
        className="border-2 min-w-[25px] h-[42px] font-semibold hover:bg-secondaryGreen hover:text-white hover:border-secondaryGreen transition-all ease-in duration-150"
      >
        +
      </button>
    </div>
  );
};

export default UpdateQuantity;
