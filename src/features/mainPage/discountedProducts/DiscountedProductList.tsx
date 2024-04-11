import SingleDiscountedProduct from "./SingleDiscountedProduct";

const tempList = [
  {
    id: "1",
    name: "Kevin Levrone - Gold Whey",
    image: "https://vitamini.ge/storage/products/11822/123.jpg",
    price: "210.00₾",
  },
  {
    id: "11",
    name: "Kevin Levrone - Gold Whey",
    image: "https://vitamini.ge/storage/products/11822/123.jpg",
    price: "210.00₾",
  },
  {
    id: "1111",
    name: "Kevin Levrone - Gold Whey",
    image: "https://vitamini.ge/storage/products/11822/123.jpg",
    price: "210.00₾",
  },
  {
    id: "11111",
    name: "Kevin Levrone - Gold Whey",
    image: "https://vitamini.ge/storage/products/11822/123.jpg",
    price: "210.00₾",
  },
  {
    id: "241",
    name: "Kevin Levrone - Gold Whey",
    image: "https://vitamini.ge/storage/products/11822/123.jpg",
    price: "210.00₾",
  },
  {
    id: "11fff4111",
    name: "Kevin Levrone - Gold Whey",
    image: "https://vitamini.ge/storage/products/11822/123.jpg",
    price: "210.00₾",
  },
  {
    id: "11d2ff4111",
    name: "Kevin Levrone - Gold Whey",
    image: "https://vitamini.ge/storage/products/11822/123.jpg",
    price: "210.00₾",
  },
  {
    id: "11d24111",
    name: "Kevin Levrone - Gold Whey",
    image: "https://vitamini.ge/storage/products/11822/123.jpg",
    price: "210.00₾",
  },
];

const DiscountedProductList = () => {
  return (
    <ul className="grid grid-cols-4 w-full gap-2">
      {tempList.map((product) => {
        return <SingleDiscountedProduct key={product.id} product={product} />;
      })}
    </ul>
  );
};

export default DiscountedProductList;
