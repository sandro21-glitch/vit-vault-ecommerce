import { IoIosArrowForward } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import CategoryList from "./CategoryList";
import { useState } from "react";
const Categories = () => {
  const [isLocationChanged, setIsLocationChanged] = useState<boolean>(false);
  return (
    <div className="h-full mr-[15px]">
      <div className="relative group min-w-[270px] max-w-[320px] h-full bg-yellow-500 flex items-center justify-between">
        <div className="flex items-center gap-1 pl-5 text-white text-[15px] font-bold">
          <GiHamburgerMenu className="text-[20px]" />
          <span>კატეგორიები</span>
        </div>
        <div
          className={`mr-2 text-white ${
            isLocationChanged
              ? "group-hover:rotate-[-90deg] transform origin-center"
              : ""
          } rotate-90 transform origin-center transition-all ease-in duration-200`}
        >
          <IoIosArrowForward />
        </div>
        <CategoryList
          isLocationChanged={isLocationChanged}
          setIsLocationChanged={setIsLocationChanged}
        />
      </div>
    </div>
  );
};

export default Categories;
