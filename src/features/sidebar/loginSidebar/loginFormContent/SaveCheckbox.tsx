const SaveCheckbox = () => {
  return (
    <div className="flex items-center gap-1 mt-5">
      <input type="checkbox" id="save" />
      <label
        htmlFor="save"
        className="cursor-pointer text-[17px] text-primaryGray"
      >
        დამახსოვრება
      </label>
    </div>
  );
};

export default SaveCheckbox;
