const CartTotal = () => {
  return (
    <div className="w-full lg:max-w-[40%]">
      <div className="p-[25px] w-full border-2">
        <h3 className="text-[25px] font-medium text-wrap mb-5">
          მთლიანი ღირებულება
        </h3>
        <ul>
          <li className="py-3 border-b text-[14px]">
            <div className="flex items-center justify-between">
              <p className="text-black ">ჯამი</p>
              <p>168 ₾</p>
            </div>
          </li>
          <li className="py-3 border-b text-[14px]">
            <div className="flex items-center justify-between">
              <p className="text-black ">მიწოდება</p>
              <p className="text-right text-[15px] text-secondaryGreen font-semibold cursor-pointer">
                მიწოდების <br /> ღირებულების <br /> დაანგარიშება
              </p>
            </div>
          </li>
          <li className="py-3">
            <div className="flex items-center justify-between">
              <p className="text-[16px] text-black font-semibold">
                მთლიანი ჯამი
              </p>
              <p className="text-secondaryGreen font-semibold  text-[20px]">
                168₾
              </p>
            </div>
          </li>
        </ul>
        <button className="py-3 w-full bg-secondaryGreen text-white font-semibold mt-3 hover:bg-primaryGreen transition-all ease-in duration-150">
          შეკვეთის გაფორმება
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
