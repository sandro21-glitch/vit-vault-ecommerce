import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { setProductPerPage } from "../../../slices/filtersSlice";

const PerPageFilter = () => {
  const { productsPerPage } = useAppSelector((store) => store.filters);
  const dispatch = useAppDispatch();

  const handleSetPerPage = (perPage: number) => {
    dispatch(setProductPerPage(perPage));
  };

  return (
    <div className="hidden lg:block">
      <span className="font-semibold mr-1 text-[14px]">აჩვენე:</span>
      <button
        onClick={() => handleSetPerPage(12)}
        className={`${
          productsPerPage === 12 ? "text-black font-bold" : "text-primaryGray"
        } `}
      >
        12
      </button>{" "}
      /{" "}
      <button
        onClick={() => handleSetPerPage(24)}
        className={`${
          productsPerPage === 24 ? "text-black font-bold" : "text-primaryGray"
        } `}
      >
        24
      </button>{" "}
      /{" "}
      <button
        onClick={() => handleSetPerPage(48)}
        className={`${
          productsPerPage === 48 ? "text-black font-bold" : "text-primaryGray"
        } `}
      >
        48
      </button>
    </div>
  );
};

export default PerPageFilter;
