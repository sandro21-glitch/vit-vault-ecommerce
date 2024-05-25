import { PaymentFormData } from "../../../../../types/formTypes";
import Input from "../../../../../ui/Input";

interface NameInputTypes {
  formData: PaymentFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameInputs = ({ formData, handleChange }: NameInputTypes) => {
  return (
    <div>
      <div>
        <label htmlFor="name">სახელი</label>
        <Input
          id="name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="surname">გვარი</label>
        <Input
          id="surname"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default NameInputs;
