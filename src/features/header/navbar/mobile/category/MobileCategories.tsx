import { useAppSelector } from "../../../../../hooks/hooks";
import SingleMobileCategoryList from "./SingleMobileCategoryList";

type MobileCategoriesTypes = {
  setOpen: (open: boolean) => void;
};

const MobileCategories = ({setOpen}:MobileCategoriesTypes) => {
  const { productData } = useAppSelector((store) => store.product);
  const uniqueCategories = Array.from(
    new Set(productData?.map((product) => product.category))
  );
  return (
    <ul>
      {uniqueCategories.map((list, index) => {
        return <SingleMobileCategoryList key={index} list={list} setOpen={setOpen} />;
      })}
    </ul>
  );
};

export default MobileCategories;
