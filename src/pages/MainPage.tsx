import DiscountedProducts from "../features/mainPage/discountedProducts/DiscountedProducts";
import PopularCategories from "../features/mainPage/popularCategory/PopularCategories";
import HomeSlider from "../features/mainPage/sliderPage/HomeSlider";
import useScrollToTopOnPageChange from "../hooks/useScrollToTopOnPageChange";

const MainPage = () => {
  useScrollToTopOnPageChange();
  return (
    <section className="section-center section-x">
      <HomeSlider />
      <PopularCategories />
      <DiscountedProducts />
    </section>
  );
};

export default MainPage;
