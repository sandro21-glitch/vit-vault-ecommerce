import { useState } from "react";
import CustomPagination from "../../../ui/CustomPagination";
import ProductCard from "../../../ui/ProductCard";
import { selectFilteredProducts } from "../../slices/productsSlice";
import { useAppSelector } from "../../../hooks/hooks";
import { useParams } from "react-router-dom";

const ProductsByCategoryList = () => {
  const { productsPerPage, sort, filterPrice } = useAppSelector(
    (store) => store.filters
  );
  const { category } = useParams<{ category: string }>();
  const [currentPage, setCurrentPage] = useState(1);

  // filter products based on category and price
  const filteredProducts = useAppSelector((state) =>
    selectFilteredProducts(state, category || "", filterPrice, sort)
  );
  // handle page change
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  if (!filteredProducts || filteredProducts.length < 1) {
    return (
      <p className="text-[1.5rem] h-full flex items-center justify-center">
        პროდუქტები ვერ მოიძებნა
      </p>
    );
  }

  // calculate index range for current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // get current products for the current page
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
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
    </div>
  );
};

export default ProductsByCategoryList;
