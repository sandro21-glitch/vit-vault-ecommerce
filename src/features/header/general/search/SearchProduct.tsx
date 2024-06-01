import { FormEvent, useEffect, useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import {
  setFilteredProducts,
  setSearchTerm,
} from "../../../slices/productsSlice";
import SearchResult from "./SearchResult";
import { useNavigate } from "react-router-dom";

type SearchProductTypes = {
  setOpen: (open: boolean) => void;
};

const SearchProduct = ({ setOpen }: SearchProductTypes) => {
  const dispatch = useAppDispatch();
  const { productData } = useAppSelector((store) => store.product);
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleSearchProduct = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (search.trim() !== "") {
      dispatch(setSearchTerm(search));
      dispatch(setFilteredProducts());
      navigate(
        `/shop?search=${encodeURIComponent(search).replace(/%20/g, "+")}`
      );
      setIsTyping(false);
      setSearch("");
      setOpen(false)
    }
  };

  const filteredData = useMemo(() => {
    if (!search || !productData) return null;
    return productData.filter((data) =>
      data.name.toLowerCase().startsWith(search.toLowerCase())
    );
  }, [search, productData]);

  useEffect(() => {
    if (search !== "" && productData) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  }, [search, productData]);

  return (
    <div className="flex-1 relative">
      <form className="relative" onSubmit={handleSearchProduct}>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="მოძებნე პროდუქცია"
          className="min-w-[290px] w-full xl:border-2 border-b outline-none p-5 h-[65px] xl:h-[46px]"
        />
        <button
          type="submit"
          className="absolute right-0 bottom-0 top-0 w-[50px] text-[#777] flex-center"
        >
          <CiSearch size={25} />
        </button>
      </form>
      {isTyping && (
        <SearchResult
          localData={filteredData}
          setIsTyping={setIsTyping}
          setSearch={setSearch}
        />
      )}
    </div>
  );
};

export default SearchProduct;
