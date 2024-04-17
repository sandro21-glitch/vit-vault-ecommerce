import { useState } from "react";
import MobileTypesList from "./MobileTypesList";
import { useAppSelector } from "../../../../../hooks/hooks";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
type SingleMobileCategory = {
  list: string;
  setOpen: (isOpen: boolean) => void;
};

const SingleMobileCategoryList = ({ list, setOpen }: SingleMobileCategory) => {
  const [isTypeOpen, setIsTypesOpen] = useState<boolean>(false);
  const { productData } = useAppSelector((store) => store.product);

  const categoryTypes = productData
    ?.filter((data) => data.category === list)
    .flatMap((data) => data.type ?? [])
    .filter((value, index, self) => self.indexOf(value) === index);

  const handleCloseNav = () => {
    setOpen(false);
  };

  return (
    <li className="font-semibold border-b cursor-pointer">
      <div
        className={`flex justify-between items-center w-full h-[3rem] ${
          isTypeOpen ? "border-b" : "border-none"
        }`}
      >
        <Link
          to={`/product-category/${list.replace(/ /g, "-")}`}
          className="pl-5 h-full w-full flex items-center"
          onClick={handleCloseNav}
        >
          <div>{list}</div>
        </Link>
        {categoryTypes && categoryTypes.length > 0 && (
          <button
            onClick={() => setIsTypesOpen(!isTypeOpen)}
            className={`h-full min-w-[3.5rem] ${
              isTypeOpen ? "bg-secondaryGreen" : "bg-transparent"
            } flex justify-center items-center border-b border-t-transparent border-b-transparent border`}
          >
            <IoMdArrowDropright
              size={25}
              className={`${
                isTypeOpen ? "rotate-90" : ""
              } transition-all ease-in duration-300`}
            />
          </button>
        )}
      </div>
      <MobileTypesList
        isTypeOpen={isTypeOpen}
        categoryTypes={categoryTypes}
        setOpen={setOpen}
      />
    </li>
  );
};

export default SingleMobileCategoryList;
