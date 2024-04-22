import { useEffect, useState } from "react";
import CustomPagination from "../../../ui/CustomPagination";
import ProductCard from "../../../ui/ProductCard";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { useParams } from "react-router-dom";
import { setProductsByCategory } from "../../slices/productsSlice";

const ProductsByCategoryList = () => {
  const { productsPerPage } = useAppSelector((store) => store.filters);
  const { productsByCategory } = useAppSelector((store) => store.product);

  const { category } = useParams<{ category?: string }>() || "";
  const formattedCategory = category ? category.replace(/-/g, " ") : "";
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  console.log(formattedCategory);
  
  useEffect(() => {
    dispatch(setProductsByCategory(formattedCategory));
  }, [category]);
  // handle page change
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  if (!productsByCategory || productsByCategory.length < 1) {
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
  const currentProducts = productsByCategory.slice(
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
        totalPages={Math.ceil(productsByCategory.length / productsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductsByCategoryList;
