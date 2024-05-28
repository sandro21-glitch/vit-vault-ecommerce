import { PaymentFormData } from "../../../../../types/formTypes";
import Input from "../../../../../ui/Input";
import { TbCodeAsterix } from "react-icons/tb";
interface NameInputTypes {
  formData: PaymentFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameInputs = ({ formData, handleChange }: NameInputTypes) => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col mb-5 w-full relative">
        <label
          htmlFor="name"
          className="text-end text-[18px] text-[#464646] mb-1"
        >
          სახელი
        </label>
        <Input
          id="name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full"
        />
        <TbCodeAsterix
          className="absolute right-[-15px] text-red-600 cursor-help"
          title="სავალდებულო ველი"
        />
      </div>
      <div className="flex flex-col mb-5 w-full relative">
        <label
          htmlFor="surname"
          className="text-end text-[18px] text-[#464646] mb-1"
        >
          გვარი
        </label>
        <Input
          id="surname"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
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

export default NameInputs;
