import { useState } from "react";
import { useAppSelector } from "../../../hooks/hooks";
import ProductCard from "../../../ui/ProductCard";
import CustomPagination from "../../../ui/CustomPagination";
import { filterProductPage } from "../../../utils/productFilters";
import NoProducts from "../../../ui/NoProducts";

const ProductsByInputList = () => {
  const { productsPerPage, sort, filterPrice } = useAppSelector(
    (store) => store.filters
  );
  const { filteredProducts } = useAppSelector((store) => store.product);
  const [currentPage, setCurrentPage] = useState(1);

  // handle page change
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  if (!filteredProducts || filteredProducts.length < 1) {
    return <NoProducts />;
  }

  const productWithFilters = filterProductPage(
    filteredProducts,
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
            totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default ProductsByInputList;
