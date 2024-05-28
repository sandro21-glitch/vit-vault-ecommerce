const OrderCheckout = () => {
  return (
    <div>
      <div className="flex items-center gap-1 mb-5">
        <input type="radio" name="" id="" defaultChecked />
        <label htmlFor="" className="cursor-pointer">
          ადგილზე გადახდა კურიერთან
        </label>
      </div>
      <button
        type="submit"
        className="bg-secondaryGreen w-full py-3 text-white font-bold font-poppins text-[18px] hover:bg-primaryGreen transition-colors ease-in duration-150"
      >
        გადახდა
      </button>
    </div>
  );
};

export default OrderCheckout;
