import { useState } from "react";
import { GrSort } from "react-icons/gr";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { setPriceSort } from "../../../slices/filtersSlice";

const PriceSorter = () => {
  const { sort } = useAppSelector((store) => store.filters);
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useAppDispatch();
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option: string) => {
    setShowOptions(false);
    dispatch(setPriceSort(option));
  };

  return (
    <div className="relative">
      <GrSort
        size={20}
        onClick={toggleOptions}
        className="cursor-pointer lg:hidden"
      />
      <select
        className={`lg:static ${
          showOptions ? "block" : "hidden"
        } absolute top-full right-0 z-[99999] outline-none font-semibold border-b-2 max-w-[200px] cursor-pointer text-[14px] border-primaryGreen lg:block`}
        onBlur={() => setShowOptions(false)}
        value={sort}
        onChange={(e) => handleOptionClick(e.target.value)}
      >
        <option value="normal">ნაგულისხმევი</option>
        <option value="highest">ფასი: ზრდადობით</option>
        <option value="lowest">ფასი: კლებადობით</option>
      </select>
    </div>
  );
};

export default PriceSorter;
