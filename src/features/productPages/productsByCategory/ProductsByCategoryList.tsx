import { useEffect, useState } from "react";
import CustomPagination from "../../../ui/CustomPagination";
import ProductCard from "../../../ui/ProductCard";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { useParams } from "react-router-dom";
import { setProductsByCategory } from "../../slices/productsSlice";
import { filterProductPage } from "../../../utils/productFilters";
import NoProducts from "../../../ui/NoProducts";

const ProductsByCategoryList = () => {
  const { productsPerPage, filterPrice, sort } = useAppSelector(
    (store) => store.filters
  );
  const { productsByCategory } = useAppSelector((store) => store.product);

  const { category } = useParams<{ category?: string }>() || "";
  const formattedCategory = category ? category.replace(/-/g, " ") : "";
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProductsByCategory(formattedCategory));
  }, [category]);
  // handle page change
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  if (!productsByCategory || productsByCategory.length < 1) {
    return <NoProducts />;
  }

  // filter and sort products
  const productWithFilters = filterProductPage(
    productsByCategory,
    filterPrice,
    sort
  );

  // calculate index range for current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // get current products for the current page
  const currentProducts = productWithFilters.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <div>
      {currentProducts.length === 0 ? (
        <NoProducts />
      ) : (
        <>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
            {currentProducts.map((categoryItem, index) => (
              <ProductCard key={index} categoryItem={categoryItem} />
            ))}
          </ul>
          <CustomPagination
            currentPage={currentPage}
            totalPages={Math.ceil(productsByCategory.length / productsPerPage)}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default ProductsByCategoryList;
