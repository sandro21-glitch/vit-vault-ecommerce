import { useState } from "react";
import MobileTypesList from "./MobileTypesList";
import { useAppSelector } from "../../../../../hooks/hooks";
import { IoMdArrowDropright } from "react-icons/io";
type SingleMobileCategory = {
  list: string;
};

const SingleMobileCategoryList = ({ list }: SingleMobileCategory) => {
  const [isTypeOpen, setIsTypesOpen] = useState<boolean>(false);
  const { productData } = useAppSelector((store) => store.product);

  const categoryTypes = productData
    ?.filter((data) => data.category === list)
    .flatMap((data) => data.type ?? [])
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <li className="font-semibold border-b cursor-pointer">
      <div className={`flex justify-between items-center h-[3rem] ${isTypeOpen ? 'border-b' :'border-none'}`}>
        <span className="pl-5">{list}</span>
        {categoryTypes && categoryTypes.length > 0 && (
          <button
            onClick={() => setIsTypesOpen(!isTypeOpen)}
            className={`h-full w-[3.5rem] ${
              isTypeOpen ? "bg-secondaryGreen" : "bg-transparent"
            } flex justify-center items-center border-b border-t-transparent border-b-transparent border`}
          >
            <IoMdArrowDropright
              size={25}
              className={`${isTypeOpen ? "rotate-90" : ""} transition-all ease-in duration-300`}
            />
          </button>
        )}
      </div>
      <MobileTypesList isTypeOpen={isTypeOpen} categoryTypes={categoryTypes} />
    </li>
  );
};

export default SingleMobileCategoryList;
