import { TbCodeAsterix } from "react-icons/tb";
import { PaymentFormData } from "../../../../../types/formTypes";
import Input from "../../../../../ui/Input";

type AddressInputTypes = {
  formData: PaymentFormData;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

const AddressInputs = ({ formData, handleChange }: AddressInputTypes) => {
  return (
    <div>
      <div className="flex flex-col mb-5 relative">
        <label
          htmlFor="country"
          className="text-end text-[18px] text-[#464646] mb-1"
        >
          ქვეყანა
        </label>
        <select
          id="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full border-[3px] outline-none px-2 py-3"
          name="country"
        >
          <option value="საქართველო" defaultChecked>
            საქართველო
          </option>
        </select>
        <TbCodeAsterix
          className="absolute right-[-15px] text-red-600 cursor-help"
          title="სავალდებულო ველი"
        />
      </div>
      <div className="flex flex-col mb-5 relative">
        <label
          htmlFor="street"
          className="text-end text-[18px] text-[#464646] mb-1"
        >
          ქუჩის მისამართი
        </label>
        <Input
          id="street"
          value={formData.street}
          onChange={handleChange}
          name="street"
          className="w-full"
        />
        <TbCodeAsterix
          className="absolute right-[-15px] text-red-600 cursor-help"
          title="სავალდებულო ველი"
        />
      </div>
    </div>
  );
};

export default AddressInputs;
