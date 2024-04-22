import { Link } from "react-router-dom";
import { Product } from "../../../../types/ProductTypes";
import CheckDiscount from "../../../../ui/CheckDiscount";
import { formatPath } from "../../../../utils/formatPath";

type SearchResultTypes = {
  localData: Product[] | null;
};

const SearchResult = ({ localData }: SearchResultTypes) => {
  if (!localData || localData.length < 1) return null;
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-mainShadow z-[999999]">
      <ul className="grid grid-cols-2 max-h-[50vh] overflow-y-scroll">
        {localData?.map((data, index) => {
          const { name, images, discount, price, id } = data;
          return (
            <li key={index}>
              <Link
                 to={`/product/${formatPath(name)}`}
                state={{ id }}
                className="w-full flex items-center border p-5 cursor-pointer"
              >
                <div className="flex justify-center items-center">
                  <div className="w-[65px] h-[65px] overflow-hidden">
                    <img
                      src={images[0]}
                      alt={name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="ml-3">
                  <h6>{name}</h6>
                  <CheckDiscount discount={discount} price={price} />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchResult;
