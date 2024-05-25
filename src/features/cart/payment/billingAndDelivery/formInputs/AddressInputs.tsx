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
      <div className="flex flex-col mb-5">
        <label htmlFor="country" className="text-end">
          ქვეყანა
        </label>
        <select
          id="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full border-[3px] outline-none px-2 py-3"
          name="country"
        >
          <option value="საქართველო" defaultChecked>საქართველო</option>
        </select>
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="street" className="text-end">
          ქუჩის მისამართი
        </label>
        <Input
          id="street"
          value={formData.street}
          onChange={handleChange}
          name="street"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default AddressInputs;
