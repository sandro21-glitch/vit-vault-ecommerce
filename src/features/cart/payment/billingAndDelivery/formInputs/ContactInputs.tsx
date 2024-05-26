import { PaymentFormData } from "../../../../../types/formTypes";
import Input from "../../../../../ui/Input";

interface ContactInputs {
  formData: PaymentFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactInputs = ({ formData, handleChange }: ContactInputs) => {
  return (
    <div>
      <div className="flex flex-col mb-5">
        <label htmlFor="email" className="text-end text-[18px] text-[#464646] mb-1">ელფოსტის მისამართი</label>
        <Input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="mobile" className="text-end text-[18px] text-[#464646] mb-1">ტელეფონი</label>
        <Input
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ContactInputs;
