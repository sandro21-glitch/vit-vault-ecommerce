import { useState } from "react";
import BillingAndDelivery from "./billingAndDelivery/BillingAndDelivery";
import Order from "./order/Order";
import { PaymentFormData } from "../../../types/formTypes";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import toast from "react-hot-toast";
import { addShippedOrders } from "../../slices/orderSlice";
import {v4 as uuidv4} from 'uuid';
const Payment = () => {
  const { user } = useAppSelector((state) => state.user);
  const { orders } = useAppSelector((store) => store.order);
  const [terms, setTerms] = useState<boolean>(false);
  const newProduct = orders.map((order) => {
    const { amount, discount, id, name, price } = order;
    return { amount, discount, id, name, price };
  });

  const [formData, setFormData] = useState<PaymentFormData>({
    firstName: user?.name ? user.name : "",
    lastName: user?.surname ? user.surname : "",
    country: "საქართველო",
    street: "",
    email: user?.email ? user.email : "",
    mobile: "",
  });

  const dispatch = useAppDispatch();
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
      toast.error("გთხოვთ დაეთანხმოთ პირობებს გასაგრძელებლად.");
      return;
    }
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.country ||
      !formData.street ||
      !formData.mobile
    ) {
      toast.error("გთხოვთ შეავსოთ ყველა საჭირო ველი.");
      return;
    }
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 10).replace(/-/g, "/");
    const formattedTime = now.toTimeString().split(" ")[0];
    const shippingDate = `${formattedDate} ${formattedTime}`;
    const combinedData = {
      formData,
      newProduct,
      shippingDate,
      orderId: uuidv4(),
    };
    dispatch(addShippedOrders(combinedData));
    console.log(combinedData);
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
