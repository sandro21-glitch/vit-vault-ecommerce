import { FormEvent, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useAppDispatch } from "../../../../hooks/hooks";
import { setFilteredProducts } from "../../../slices/productsSlice";
import SearchResult from "./SearchResult";
import { useNavigate } from "react-router-dom";

const SearchProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleSearchProduct = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (search.trim() !== "") {
      dispatch(setFilteredProducts(search));
      navigate(`/shop/${search}`);
      setIsClicked(true);
    }
  };

  useEffect(() => {
    if (search !== "") {
      dispatch(setFilteredProducts(search));
    } else {
      dispatch(setFilteredProducts(""));
      setIsClicked(false);
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
      {!isClicked && <SearchResult />}
    </div>
  );
};

export default SearchProduct;
