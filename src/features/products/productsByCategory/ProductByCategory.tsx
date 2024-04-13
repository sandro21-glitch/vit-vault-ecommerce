import { useParams } from "react-router-dom";
import SectionHeader from "../../../ui/SectionHeader";
import ProductsByCategoryList from "./ProductsByCategoryList";
import ProductsFilter from "./ProductsFilter";
import ListHeader from "./ListHeader";

const ProductByCategory = () => {
  const { category } = useParams();
  return (
    <section>
      <SectionHeader path={category ? category : ""} />
      <article className="section-x section-center flex">
        <ProductsFilter />
        <div className=" w-full max-w-[75%]">
          <ListHeader category={category} />
          <ProductsByCategoryList />
        </div>
      </article>
    </section>
  );
};

export default ProductByCategory;
