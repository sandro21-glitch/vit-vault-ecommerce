import { useParams } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";
import ProductsByCategoryList from "../features/products/productsByCategory/ProductsByCategoryList";
import ProductsFilter from "../features/products/productsByCategory/ProductsFilter";
import ListHeader from "../features/products/productsByCategory/ListHeader";
import { useState } from "react";
import { useAppSelector } from "../hooks/hooks";

const ProductByCategory = () => {
  const { productData } = useAppSelector((store) => store.product);
  const prices = productData?.map((product) => product.price) ?? [];
  
  // find the maximum price
  const maxPrice = Math.max(...prices);
  const [filterPrice, setFilterPrice] = useState(maxPrice);

  const { category } = useParams();
  return (
    <section>
      <SectionHeader path={category ? category : ""} />
      <article className="section-x section-center flex flex-col-reverse lg:flex-row">
        <ProductsFilter filterPrice={filterPrice} setFilterPrice={setFilterPrice} />
        <div className="w-full lg:max-w-[75%]">
          <ListHeader category={category} />
          <ProductsByCategoryList filterPrice={filterPrice} />
        </div>
      </article>
    </section>
  );
};

export default ProductByCategory;
