import PopularCategories from "../features/mainPage/popularCategory/PopularCategories";
import HomeSlider from "../features/mainPage/sliderPage/HomeSlider";

const MainPage = () => {
  return (
    <section className="section-center section-x">
      <HomeSlider />
      <PopularCategories />
    </section>
  );
};

export default MainPage;
