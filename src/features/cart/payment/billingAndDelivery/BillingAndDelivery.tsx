import { PaymentFormData } from "../../../../types/formTypes";
import AddressInputs from "./formInputs/AddressInputs";
import ContactInputs from "./formInputs/ContactInputs";
import NameInputs from "./formInputs/NameInputs";

type BillingAndDeliveryTypes = {
  formData: PaymentFormData;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

const BillingAndDelivery = ({
  formData,
  handleChange,
}: BillingAndDeliveryTypes) => {
  return (
    <div className="w-1/2">
      <h3 className="text-[22px] text-center font-semibold mb-10">
        ანგარიშსწორება და მიწოდება
      </h3>
      <NameInputs formData={formData} handleChange={handleChange} />
      <AddressInputs formData={formData} handleChange={handleChange} />
      <ContactInputs formData={formData} handleChange={handleChange} />
    </div>
  );
};

export default BillingAndDelivery;
