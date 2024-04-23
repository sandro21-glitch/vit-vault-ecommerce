import { SliderTypes } from "../../../constants/homeSlider";

type SingleSliderTypes = {
  item: SliderTypes;
};

const SingleSlider = ({ item }: SingleSliderTypes) => {
  const { id, image, name, para, path } = item;
  return (
    <div
      key={id}
      className="w-full xl:h-[500px] min-h-full xl:max-w-[900px] xl:float-right"
    >
      <div className="flex items-center gap-2 w-full justify-center flex-col lg:flex-row">
        <div className=" xl:w-1/2 w-full py-[40px] lg:p-[50px] flex flex-col items-center lg:block">
          <h2 className="font-semibold text-center md:text-left leading-[3rem] mb-[20px]">
            {name}
          </h2>
          <p className="mb-[20px] text-center lg:text-left">{para}</p>
          <button
            className="button relative overflow-hidden bg-secondaryGreen w-[6rem] h-[2rem] p-5
           text-white rounded-full flex items-center justify-center font-sans font-semibold transition-width duration-300 hover:w-[7rem]"
          >
            <a href={path} target="_blank">
              ნახვა
            </a>
          </button>
        </div>
        <div className="xl:w-1/2 w-full flex flex-col items-center lg:block">
          <img src={image} alt="slider-image" />
        </div>
      </div>
    </div>
  );
};

export default SingleSlider;
