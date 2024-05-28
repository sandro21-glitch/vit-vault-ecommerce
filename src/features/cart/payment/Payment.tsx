import { useState } from "react";
import BillingAndDelivery from "./billingAndDelivery/BillingAndDelivery";
import Order from "./order/Order";
import { PaymentFormData } from "../../../types/formTypes";
import { useAppSelector } from "../../../hooks/hooks";
import toast from "react-hot-toast";

const Payment = () => {
  const { user } = useAppSelector((state) => state.user);
  const [terms, setTerms] = useState<boolean>(false);

  const [formData, setFormData] = useState<PaymentFormData>({
    firstName: user?.name ? user.name : "",
    lastName: user?.surname ? user.surname : "",
    country: "საქართველო",
    street: "",
    email: user?.email ? user.email : "",
    mobile: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!terms) {
      toast.error("check");
      return;
    }
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.country ||
      !formData.street ||
      !formData.mobile
    ) {
      toast.error("fill all input");
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmitOrder}
      className="w-full lg:max-w-[75%] flex flex-col lg:flex-row gap-7 mb-10 md:mb-0 "
    >
      <BillingAndDelivery
        handleChange={handleChange}
        formData={formData}
        terms={terms}
        setTerms={setTerms}
      />
      <Order />
    </form>
  );
};

export default Payment;
