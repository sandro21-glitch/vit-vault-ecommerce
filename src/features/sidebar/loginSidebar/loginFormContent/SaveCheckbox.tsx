type CheckboxTypes = {
  setIsChecked: (isChecked: boolean) => void;
  isChecked: boolean;
};
const SaveCheckbox = ({ setIsChecked, isChecked }: CheckboxTypes) => {
  return (
    <div className="flex items-center gap-1 mt-5">
      <input
        type="checkbox"
        id="save"
        onChange={() => setIsChecked(!isChecked)}
      />
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
