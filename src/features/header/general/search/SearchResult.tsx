import { Product } from "../../../../types/ProductTypes";
import SingelResult from "./SingelResult";

type SearchResultTypes = {
  localData: Product[] | null;
};

const SearchResult = ({ localData }: SearchResultTypes) => {
  if (!localData || localData.length < 1) return null;
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-mainShadow z-[999999]">
      <ul className="grid grid-cols-2 max-h-[50vh] overflow-y-scroll">
        {localData?.map((data, index) => {
          return <SingelResult key={index} data={data} />;
        })}
      </ul>
    </div>
  );
};

export default SearchResult;
