export interface Product {
  id: string;
  category: string;
  type: string | null;
  name: string;
  price: number;
  discount: number;
  portion: number | null;
  property: null | { available: boolean; name: string }[];
  inStock: boolean;
  quantity: null | string;
  weight: null | string;
  desc: string | null;
  characteristics: string[] | null;
  use: string | null;
  images: string[];
}
