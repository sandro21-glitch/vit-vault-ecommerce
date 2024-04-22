import { ReactNode, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import useScrollToTopOnPageChange from "../hooks/useScrollToTopOnPageChange";
import { useParams } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import ProductsFilter from "../features/filters/ProductsFilter";
import ListHeader from "../features/filters/ListHeader";
import { setFilterPrice } from "../features/slices/filtersSlice";

type ProductsPageTypes = {
  children: ReactNode;
};

const ProductsPage = ({ children }: ProductsPageTypes) => {
  useScrollToTopOnPageChange();
  const { productData } = useAppSelector((store) => store.product);
  const prices = productData?.map((product) => product.price) ?? [];
  const dispatch = useAppDispatch();
  const maxPrice = Math.max(...prices);
  const [filterPrice, setFilterPriceLocal] = useState(maxPrice);

  const { category } = useParams();

  useEffect(() => {
    dispatch(setFilterPrice(filterPrice));
  }, [filterPrice, dispatch]);

  return (
    <section>
      <SectionHeader path={category ? category : "პროდუქტები"} />
      <article className="section-x section-center flex flex-col-reverse lg:flex-row">
        <ProductsFilter
          filterPrice={filterPrice}
          setFilterPrice={setFilterPriceLocal}
        />
        <div className="w-full lg:max-w-[75%]">
          <ListHeader category={category} />
          {children}
        </div>
      </article>
    </section>
  );
};

export default ProductsPage;
