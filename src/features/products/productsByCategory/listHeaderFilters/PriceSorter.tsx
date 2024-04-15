import { useState } from "react";
import { GrSort } from "react-icons/gr";

const PriceSorter = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [showOptions, setShowOptions] = useState(false);
    const toggleOptions = () => {
        setShowOptions(!showOptions);
      };
      const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setShowOptions(false);
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
        value={selectedOption}
        onChange={(e) => handleOptionClick(e.target.value)}
      >
        <option selected defaultChecked>
          ნაგულისხმევი
        </option>
        <option value="ფასი: ზრდადობით">ფასი: ზრდადობით</option>
        <option value="ფასი: კლებადობით">ფასი: კლებადობით</option>
      </select>
    </div>
  );
};

export default PriceSorter;
