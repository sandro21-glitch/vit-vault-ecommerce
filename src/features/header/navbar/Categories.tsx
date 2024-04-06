import { IoIosArrowForward } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import CategoryList from "./CategoryList";
const Categories = () => {
  return (
    <div className="h-full mr-[15px]">
      <div className="relative min-w-[270px] max-w-[320px] h-full bg-secondaryGreen flex items-center justify-between">
        <div className="flex items-center gap-1 pl-5 text-white text-[15px] font-bold">
          <GiHamburgerMenu />
          <span>კატეგორიები</span>
        </div>
        <span className="pr-3 text-white">
          <IoIosArrowForward />
        </span>
        <CategoryList />
      </div>
    </div>
  );
};

export default Categories;
