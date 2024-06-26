import { PaymentFormData } from "../../../../types/formTypes";
import AddressInputs from "./formInputs/AddressInputs";
import ContactInputs from "./formInputs/ContactInputs";
import NameInputs from "./formInputs/NameInputs";
import TermsAndConditionsCheckbox from "./formInputs/TermsAndConditionsCheckbox";

type BillingAndDeliveryTypes = {
  formData: PaymentFormData;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  terms: boolean;
  setTerms: (isChecked: boolean) => void;
};

const BillingAndDelivery = ({
  formData,
  handleChange,
  terms,
  setTerms,
}: BillingAndDeliveryTypes) => {
  return (
    <div className="w-full lg:w-1/2 font-poppins">
      <h3 className="text-[22px] text-center font-semibold mb-10 pt-10">
        ანგარიშსწორება და მიწოდება
      </h3>
      <NameInputs formData={formData} handleChange={handleChange} />
      <AddressInputs formData={formData} handleChange={handleChange} />
      <ContactInputs formData={formData} handleChange={handleChange} />
      <TermsAndConditionsCheckbox terms={terms} setTerms={setTerms} />
    </div>
  );
};

export default BillingAndDelivery;
