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
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!images) return null;
  return (
    <Slider {...settings} arrows={false} className="flex-1">
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
