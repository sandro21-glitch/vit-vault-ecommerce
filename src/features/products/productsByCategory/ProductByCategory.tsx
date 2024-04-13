import { useParams } from "react-router-dom";
import SectionHeader from "../../../ui/SectionHeader";
import ProductsByCategoryList from "./ProductsByCategoryList";
import ProductsFilter from "./ProductsFilter";

const ProductByCategory = () => {
  const { category } = useParams();
  return (
    <section>
      <SectionHeader path={category ? category : ""} />
      <article className="section-x section-center flex">
        <ProductsFilter />
        <ProductsByCategoryList />
      </article>
    </section>
  );
};

export default ProductByCategory;
