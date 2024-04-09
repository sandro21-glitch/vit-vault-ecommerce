import HeaderText from "../../../ui/HeaderText";
import { popularCategory } from "../../../constants/popularCategories";
import SinglePopularCategory from "./SinglePopularCategory";
const PopularCategories = () => {
  return (
    <article>
      <HeaderText text="პოპულარული კატეგორიები" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {popularCategory.map((item) => {
          return <SinglePopularCategory key={item.id} item={item} />;
        })}
      </ul>
    </article>
  );
};

export default PopularCategories;
