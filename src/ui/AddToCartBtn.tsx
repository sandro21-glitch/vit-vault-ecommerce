const AddToCartBtn = () => {
  return (
    <button
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className="font-serif group-hover:visible invisible hover:bg-primaryGreen transition-all ease-in duration-150 font-semibold bg-secondaryGreen
         px-[.5rem] py-[.4rem] min-w-[50%] text-[12px] uppercase leading-normal text-white"
    >
      კალათაში დამატება
    </button>
  );
};

export default AddToCartBtn;
