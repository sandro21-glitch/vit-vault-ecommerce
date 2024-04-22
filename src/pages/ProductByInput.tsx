import ProductsPage from "../ui/ProductsPage";
import CustomPagination from "../ui/CustomPagination";
import { useState } from "react";
import { useAppSelector } from "../hooks/hooks";
import ProductCard from "../ui/ProductCard";

const ProductByInput = () => {
  const { productsPerPage } = useAppSelector((store) => store.filters);
  const { filteredProducts } = useAppSelector((store) => store.product);
  const [currentPage, setCurrentPage] = useState(1);

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
    <ProductsPage>
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
    </ProductsPage>
  );
};

export default ProductByInput;
