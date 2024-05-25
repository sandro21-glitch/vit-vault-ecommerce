import { PaymentFormData } from "../../../../../types/formTypes";
import Input from "../../../../../ui/Input";

type AddressInputTypes = {
  formData: PaymentFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AddressInputs = ({ formData, handleChange }: AddressInputTypes) => {
  return (
    <div>
      <div className="flex flex-col mb-5">
        <label htmlFor="country" className="text-end">ქვეყანა</label>
        <Input
          id="country"
          value={formData.country}
          onChange={handleChange}
          name="country"
          className="w-full"
        />
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="street" className="text-end">ქუჩის მისამართი</label>
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
