import { useAppSelector } from "../../../hooks/hooks";
import { formatToGeorgianLari } from "../../../utils/formatPrice";

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

  // find the maximum price
  const maxPrice = Math.max(...prices);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(event.target.value);
    setFilterPrice(newPrice);
  };

  return (
    <div className="mt-4">
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
        value={filterPrice}
        onChange={handlePriceChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        ფასი: <span className="font-semibold">₾0</span>
        <span className="mx-1">—</span>
        <span className="font-semibold">
          {formatToGeorgianLari(filterPrice)}
        </span>
      </p>
    </div>
  );
};

export default FilterByPrice;
