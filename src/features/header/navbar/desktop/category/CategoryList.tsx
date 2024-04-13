import { useEffect } from "react";
import { useAppSelector } from "../../../../../hooks/hooks";
import SingleCategory from "./SingleCategory";
import { useLocation } from "react-router-dom";

type CategoryListTypes = {
  isLocationChanged: boolean;
  setIsLocationChanged: (isOpen: boolean) => void;
};

const CategoryList = ({
  isLocationChanged,
  setIsLocationChanged,
}: CategoryListTypes) => {
  const { productData } = useAppSelector((store) => store.product);

  const uniqueCategories = Array.from(
    new Set(
      productData?.map((product) => {
        return product.category;
      })
    )
  );
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setIsLocationChanged(false);
    } else {
      setIsLocationChanged(true);
    }
  }, [location.pathname]);

  return (
    <div
      className={`${
        isLocationChanged ? "hidden" : ""
      }  group-hover:block absolute z-[9999] left-0 top-full w-full bg-white`}
    >
      <ul className="border-l border-b border-r ">
        {uniqueCategories.map((category, index) => {
          return <SingleCategory key={index} category={category} />;
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
