import { useAppSelector } from "../../../../hooks/hooks";
import CheckDiscount from "../../../../ui/CheckDiscount";

const SearchResult = () => {
  const { filteredProducts } = useAppSelector((store) => store.product);
  if (!filteredProducts || filteredProducts.length < 1) return null;
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-mainShadow z-[999999]">
      <ul className="grid grid-cols-2 max-h-[50vh] overflow-y-scroll">
        {filteredProducts?.map((data, index) => {
          const { name, images, discount, price } = data;
          return (
            <li
              key={index}
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
              <div className="">
                <h6>{name}</h6>
                <CheckDiscount discount={discount} price={price} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchResult;
