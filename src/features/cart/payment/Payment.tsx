import { useState } from "react";
import BillingAndDelivery from "./billingAndDelivery/BillingAndDelivery";
import Order from "./order/Order";
import { PaymentFormData } from "../../../types/formTypes";

const Payment = () => {
  const [formData, setFormData] = useState<PaymentFormData>({
    firstName: "",
    lastName: "",
    country: "",
    street: "",
    city: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="w-full lg:max-w-[75%] flex flex-col lg:flex-row gap-7 mb-10 md:mb-0">
      <BillingAndDelivery handleChange={handleChange} formData={formData} />
      <Order />
    </form>
  );
};

export default Payment;
