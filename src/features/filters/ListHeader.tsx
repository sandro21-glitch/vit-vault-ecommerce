import Breadcrumb from "../../ui/Breadcrumb";
import PerPageFilter from "./listHeaderFilters/PerPageFilter";
import PriceSorter from "./listHeaderFilters/PriceSorter";

type ListHeaderTypes = {
  category?: string;
};

const ListHeader = ({ category }: ListHeaderTypes) => {
  return (
    <div className="flex justify-between">
      <Breadcrumb category={category ? category : "პროდუქტები"} />
      <div className="flex gap-5 relative">
        <PerPageFilter />
        <PriceSorter />
      </div>
    </div>
  );
};

export default ListHeader;
