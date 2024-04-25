import { FiShoppingCart } from "react-icons/fi";
const AddToCartBtn = () => {
  return (
    <button
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className="font-serif h-[2rem] overflow-hidden group/fade group-hover:visible group-hover:opacity-100 opacity-0 invisible hover:bg-primaryGreen transition-all ease-in duration-150 font-semibold bg-secondaryGreen
         px-[.5rem] py-[.4rem] min-w-[50%] text-[12px] uppercase leading-normal text-white"
    >
      <div className="block group-hover/fade:translate-y-[-200%] transition-transform ease-in duration-200">
        კალათაში დამატება
      </div>
      <div className="flex items-center justify-center translate-y-[200%] group-hover/fade:translate-y-[-100%] transition-transform ease-in duration-200">
        <FiShoppingCart className="text-[1.2rem] font-bold" />
      </div>
    </button>
  );
};

export default AddToCartBtn;
