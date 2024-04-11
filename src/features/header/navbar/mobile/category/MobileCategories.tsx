import { useAppSelector } from "../../../../../hooks/hooks";
import SingleMobileCategoryList from "./SingleMobileCategoryList";

const MobileCategories = () => {
  const { productData } = useAppSelector((store) => store.product);
  const uniqueCategories = Array.from(
    new Set(productData?.map((product) => product.category))
  );
  return (
    <ul>
      {uniqueCategories.map((list, index) => {
        return <SingleMobileCategoryList key={index} list={list} />;
      })}
    </ul>
  );
};

export default MobileCategories;
