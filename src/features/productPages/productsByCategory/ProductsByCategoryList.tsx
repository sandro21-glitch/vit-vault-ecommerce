import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import ProductCard from "../../../ui/ProductCard";
import CustomPagination from "../../../ui/CustomPagination";

type ProductsByCategoryListProps = {
  filterPrice: number;
};

const ProductsByCategoryList: React.FC<ProductsByCategoryListProps> = ({
  filterPrice,
}) => {
  const { productData } = useAppSelector((store) => store.product);
  const { productsPerPage, sort } = useAppSelector((store) => store.filters);
  const { category } = useParams<{ category: string }>();
  const [currentPage, setCurrentPage] = useState(1);

  // filter products based on category and price
  const selectedCategory = productData
    ?.filter((product) => {
      return (
        (product.price <= filterPrice &&
          product.category === category?.replace(/-/g, " ")) ||
        product.type === category?.replace(/-/g, " ")
      );
    })
    .sort((a, b) => {
      if (sort === "lowest") {
        return b.price - a.price;
      } else if (sort === "highest") {
        return a.price - b.price;
      }
      return 0;
    });

  // handle page change
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  if (!selectedCategory || selectedCategory.length < 1) {
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
  const currentProducts = selectedCategory.slice(
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
        totalPages={Math.ceil(selectedCategory.length / productsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductsByCategoryList;
