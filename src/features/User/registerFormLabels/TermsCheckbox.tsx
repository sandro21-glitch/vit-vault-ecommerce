const TermsCheckbox = () => {
  return (
    <div className="flex items-center mb-5">
      <input type="checkbox" id="terms" className="scale-[1.1] lg:scale-[1.5] mr-2" />
      <label
        htmlFor="terms"
        className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold  cursor-pointer"
      >
        ვეთანხმები{" "}
        <span className="text-secondaryGreen hover:text-primaryGreen transition-colors ease-in duration-150">
          წესებს და პირობებს
        </span>
      </label>
    </div>
  );
};

export default TermsCheckbox;
