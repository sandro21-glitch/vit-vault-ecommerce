import { PaymentFormData } from "../../../../../types/formTypes";
import Input from "../../../../../ui/Input";

type AddressInputTypes = {
  formData: PaymentFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AddressInputs = ({ formData, handleChange }: AddressInputTypes) => {
  return (
    <div>
      <div>
        <label htmlFor="country">ქვეყანა</label>
        <Input
          id="country"
          value={formData.country}
          onChange={handleChange}
          name="country"
        />
      </div>
      <div>
        <label htmlFor="street">ქუჩის მისამართი</label>
        <Input
          id="street"
          value={formData.street}
          onChange={handleChange}
          name="street"
        />
      </div>
    </div>
  );
};

export default AddressInputs;
