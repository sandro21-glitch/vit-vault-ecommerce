import { PaymentFormData } from "./formTypes";

export interface OrderedProducts {
  name: string;
  price: number;
  discount: number;
  amount: number;
  id: string;
}
export interface ShippingData {
  formData: PaymentFormData;
  newProduct: OrderedProducts[];
  shippingDate: string;
  orderId: string;
}
