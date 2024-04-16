import Slider from "react-slick";

type ProductImagesTypes = {
  images: string[];
  name: string;
};
const ProductImages = ({ images, name }: ProductImagesTypes) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  if (!images) return null;
  return (
    <Slider {...settings} className="flex-1 ">
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={name}
            className="w-full h-[500px] object-contain"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ProductImages;
