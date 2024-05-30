import CloseButton from "../../../../../ui/CloseButton";

const OrderActions = () => {
  const handleRemoveOrder = () => {
    console.log("remove");
  };

  return (
    <li className="flex items-center justify-end">
      <CloseButton onClick={handleRemoveOrder} />
      <button
        className="bg-secondaryGreen text-white px-4 py-2 font-semibold
     text-[14px] hover:bg-primaryGreen transition-colors ease-in duration-150 ml-2"
      >
        ნახვა
      </button>
    </li>
  );
};

export default OrderActions;
