import { useAppSelector } from "../../../../hooks/hooks";

const SearchResult = () => {
  const { filteredProducts } = useAppSelector((store) => store.product);
  if (!filteredProducts || filteredProducts.length < 1)
    return <p>NO PRODUCT FOUND</p>;
  return (
    <div className="absolute top-full left-0 right-0 bg-red-900 z-[999999]">
      <ul>
        {filteredProducts?.map((data,index) => {
          return <li key={index}>{data.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchResult;
