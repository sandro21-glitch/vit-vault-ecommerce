import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";

type ProductsFilterTypes = {
  filterPrice: number;
  setFilterPrice: (price: number) => void;
};

const ProductsFilter = ({
  filterPrice,
  setFilterPrice,
}: ProductsFilterTypes) => {
  return (
      <div className="w-full lg:max-w-[25%] h-auto px-[15px]">
      <FilterByCategory />
      <FilterByPrice
        filterPrice={filterPrice}
        setFilterPrice={setFilterPrice}
      />
    </div>
  );
};

export default ProductsFilter;
