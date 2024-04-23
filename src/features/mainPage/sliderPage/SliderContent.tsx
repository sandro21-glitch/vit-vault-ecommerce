import Slider from "react-slick";
import { sliderContent } from "../../../constants/homeSlider";
import SingleSlider from "./SingleSlider";
const SliderContent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings} dots={false}>
      {sliderContent.map((item) => {
        return (
          <SingleSlider item={item} />
        );
      })}
    </Slider>
  );
};

export default SliderContent;
