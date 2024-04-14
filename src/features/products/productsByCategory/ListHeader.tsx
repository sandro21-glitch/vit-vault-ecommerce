import { useState } from "react";
import Breadcrumb from "../../../ui/Breadcrumb";
import { GrSort } from "react-icons/gr";

type ListHeaderTypes = {
  category?: string;
};

const ListHeader = ({ category }: ListHeaderTypes) => {
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
    <div className="flex justify-between">
      <Breadcrumb category={category ? category : ""} />
      <div className="flex gap-5 relative">
        <div className="hidden lg:block">აჩვენე: 12 / 24 / 48</div>
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
      </div>
    </div>
  );
};

export default ListHeader;
