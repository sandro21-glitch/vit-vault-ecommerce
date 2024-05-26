const TermsAndConditionsCheckbox = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      <input
        type="checkbox"
        name="check"
        id="check"
        className="cursor-pointer"
      />
      <label htmlFor="check" className="cursor-pointer text-[18px] text-[#464646]">
        ვეთანხმები{" "}
        <span className="text-secondaryGreen">წესებს და პირობებს</span>
      </label>
    </div>
  );
};

export default TermsAndConditionsCheckbox;
