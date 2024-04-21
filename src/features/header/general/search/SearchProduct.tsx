import { FormEvent, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useAppDispatch } from "../../../../hooks/hooks";
import { setFilteredProducts } from "../../../slices/productsSlice";
import SearchResult from "./SearchResult";

const SearchProduct = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();

  const handleSearchProduct = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (search.trim() !== "") {
      dispatch(setFilteredProducts(search));
    }
  };

  useEffect(() => {
    if (search !== "") {
      dispatch(setFilteredProducts(search));
    } else {
      dispatch(setFilteredProducts(""));
    }
  }, [search]);

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
          className="absolute right-0 bottom-0 top-0 w-[50px] bg-transparent text-[#777] flex-center"
        >
          <CiSearch size={25} />
        </button>
      </form>
      <SearchResult />
    </div>
  );
};

export default SearchProduct;
