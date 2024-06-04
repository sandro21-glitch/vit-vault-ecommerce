import { TbCodeAsterix } from "react-icons/tb";
import { PaymentFormData } from "../../../../../types/formTypes";
import Input from "../../../../../ui/Input";

interface ContactInputs {
  formData: PaymentFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactInputs = ({ formData, handleChange }: ContactInputs) => {
  return (
    <div>
      <div className="flex flex-col mb-5 relative">
        <label
          htmlFor="email"
          className="text-end text-[18px] text-[#464646] mb-1"
        >
          ელფოსტის მისამართი
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TbCodeAsterix
          className="absolute right-[-15px] text-red-600 cursor-help"
          title="სავალდებულო ველი"
        />
      </div>
      <div className="flex flex-col mb-5 relative ">
        <label
          htmlFor="mobile"
          className="text-end text-[18px] text-[#464646] mb-1"
        >
          ტელეფონი
        </label>
        <Input
          id="mobile"
          name="mobile"
          type="number"
          value={formData.mobile}
          onChange={handleChange}
        />
        <TbCodeAsterix
          className="absolute right-[-15px] text-red-600 cursor-help"
          title="სავალდებულო ველი"
        />
      </div>
    </div>
  );
};

export default ContactInputs;
