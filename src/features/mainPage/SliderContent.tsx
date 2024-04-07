import Slider from "react-slick";
import { sliderContent } from "../../utils/homeSlider";
import { Link } from "react-router-dom";
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
        const { id, image, name, para, path } = item;
        return (
          <div>
            <div className="flex items-center gap-2 w-full" key={id}>
              <div className=" w-1/2 p-[50px]">
                <h2 className="font-semibold leading-[3rem] mb-[20px]">
                  {name}
                </h2>
                <p className="mb-[20px]">{para}</p>
                <button
                  className="button relative overflow-hidden bg-secondaryGreen w-[6rem] h-[2rem] p-5
           text-white rounded-full flex items-center justify-center font-sans font-semibold transition-width duration-300 hover:w-[7rem]"
                >
                  <Link to={path}>ნახვა</Link>
                </button>
              </div>
              <div className="w-1/2">
                <img src={image} alt="slider-image" />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderContent;
