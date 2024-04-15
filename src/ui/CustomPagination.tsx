import React from "react";
import Pagination from "react-responsive-pagination";
import "./customPagination.css";

type CustomPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <Pagination
      className="pagination"
      current={currentPage}
      total={totalPages}
      onPageChange={onPageChange}
    />
  );
};

export default CustomPagination;
