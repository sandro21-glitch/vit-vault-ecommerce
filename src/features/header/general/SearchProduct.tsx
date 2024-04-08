
import { CiSearch } from "react-icons/ci";

const SearchProduct = () => {
  return (
    <li className="flex-1">
    <form className="relative">
      <input
        type="text"
        name="search"
        id="search"
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
  </li>
  )
}

export default SearchProduct