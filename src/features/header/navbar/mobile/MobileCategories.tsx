import { useAppSelector } from "../../../../hooks/hooks";

const MobileCategories = () => {
  const { productData } = useAppSelector((store) => store.product);
  const uniqueCategories = Array.from(
    new Set(productData?.map((product) => product.category))
  );

  return (
    <ul>
      {uniqueCategories.map((list, index) => {
        return (
          <li
            key={index}
            className="p-[14px] font-semibold border-b cursor-pointer"
          >
            {list}
          </li>
        );
      })}
    </ul>
  );
};

export default MobileCategories;
