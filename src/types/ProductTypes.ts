export interface Product {
  id: string;
  category: string;
  type: string;
  name: string;
  price: number;
  discount: number;
  portion: number;
  property: null | string;
  inStock: boolean;
  quantity: null | string;
  weight: null | string;
  desc: string;
  characteristics: string[];
  use: string;
  images: string[];
}
