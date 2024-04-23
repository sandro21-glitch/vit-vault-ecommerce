import { Product } from "../types/ProductTypes";

export const filterProductPage = (
  products: Product[],
  filterPrice: number,
  sort: string
) => {
  let filteredProducts = products.filter((data) => data.price <= filterPrice);

  if (sort === "lowest") {
    filteredProducts.sort((a, b) => b.price - a.price); // sort from highest to lowest
  } else if (sort === "highest") {
    filteredProducts.sort((a, b) => a.price - b.price); // sort from lowest to highest
  }

  return filteredProducts;
};
