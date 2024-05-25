import { PaymentFormData } from "../../../../types/formTypes";
import AddressInputs from "./formInputs/AddressInputs";
import ContactInputs from "./formInputs/ContactInputs";
import NameInputs from "./formInputs/NameInputs";

type BillingAndDeliveryTypes = {
  formData: PaymentFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const BillingAndDelivery = ({
  formData,
  handleChange,
}: BillingAndDeliveryTypes) => {
  return (
    <div className="w-1/2">
      <NameInputs formData={formData} handleChange={handleChange} />
      <AddressInputs formData={formData} handleChange={handleChange} />
      <ContactInputs />
    </div>
  );
};

export default BillingAndDelivery;
