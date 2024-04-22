import { useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { formatToGeorgianLari } from "../../utils/formatPrice";

type FilterByPriceProps = {
  filterPrice: number;
  setFilterPrice: (price: number) => void;
};

const FilterByPrice: React.FC<FilterByPriceProps> = ({
  filterPrice,
  setFilterPrice,
}) => {
  const { productData } = useAppSelector((store) => store.product);
  const prices = productData?.map((product) => product.price) ?? [];
  const [newPrice, setNewPrice] = useState<number>(filterPrice);
  // find the maximum price
  const maxPrice = Math.max(...prices);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPrice(parseInt(event.target.value));
  };

  const handleFilterPrice = () => setFilterPrice(newPrice);

  return (
    <div className="my-5 pb-5 border-gray-300 border-b">
      <label
        htmlFor="price-range"
        className="block mb-2 text-[1rem] font-semibold text-gray-900 dark:text-white"
      >
        ფასით გაფილტვრა
      </label>
      <input
        id="price-range"
        type="range"
        min={0}
        max={maxPrice}
        value={newPrice}
        onChange={handlePriceChange}
        className="w-full h-2 mb-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <div className="flex items-center justify-between">
        <p className=" text-gray-700 dark:text-gray-300 whitespace-nowrap">
          ფასი: <span className="font-semibold text-[14px]">₾0</span> —
          <span className="font-semibold text-[14px]">
            {formatToGeorgianLari(newPrice)}
          </span>
        </p>
        <button
          type="button"
          onClick={handleFilterPrice}
          className="py-[10px] px-[14px] text-[12px] font-semibold text-[#3E3E3E] bg-[#F3F3F3] hover:bg-[#efefef] transition-all ease-in duration-150"
        >
          გაფილტვრა
        </button>
      </div>
    </div>
  );
};

export default FilterByPrice;
