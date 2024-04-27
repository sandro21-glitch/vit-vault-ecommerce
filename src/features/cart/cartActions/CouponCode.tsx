const CouponCode = () => {
  return (
    <div className="mb-5">
      <input
        type="text"
        placeholder="კუპონის კოდი"
        className="max-w-[230px] px-[15px] h-[42px] border-2 outline-none text-[14px] mr-5"
      />
      <button className="bg-secondaryGreen hover:bg-primaryGreen transition-colors ease-in duration-150 py-[12px] px-[20px] font-semibold text-white text-[13px] leading-[18px]">
        კუპონის გამოყენება
      </button>
    </div>
  );
};

export default CouponCode;
