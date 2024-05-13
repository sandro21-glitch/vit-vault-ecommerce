const LoginForm = () => {
  return (
    <form className="p-5 font-poppins border-b">
      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="text-right text-[18px] text-primaryGray"
        >
          სახელი, ან ელფოსტა
        </label>
        <input type="text" id="name" className="border-2 outline-none p-2" />
      </div>
      <div className="flex flex-col mt-5">
        <label
          htmlFor="password"
          className="text-right text-[18px] text-primaryGray"
        >
          პაროლი
        </label>
        <input
          type="password"
          id="password"
          className="border-2 outline-none p-2"
        />
      </div>
      <button
        className="mt-5 w-full bg-secondaryGreen py-2 text-white text-[15px] lg:text-[18px]
       font-bold tracking-widest hover:bg-primaryGreen transition-all ease-in duration-150"
      >
        შესვლა
      </button>
      <div className="flex items-center gap-1 mt-5">
        <input type="checkbox" id="save" />
        <label
          htmlFor="save"
          className="cursor-pointer text-[17px] text-primaryGray"
        >
          დამახსოვრება
        </label>
      </div>
      <p className="text-secondaryGreen mt-5 hover:underline cursor-pointer text-[20px]">
        დაგავიწყდათ პაროლი?
      </p>
    </form>
  );
};

export default LoginForm;
