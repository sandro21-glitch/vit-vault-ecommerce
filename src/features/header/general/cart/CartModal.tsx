const CartModal = () => {
  return (
    <div className="absolute top-[100%] py-5 right-0 w-[330px]  z-[9999] hidden group-hover:block">
      <div className="pt-[15px] bg-white shadow-mainShadow p-[20px]">
        <p className="text-center">თქვენ კალათში პროდუქტები არ არის.</p>
      </div>
    </div>
  );
};

export default CartModal;
