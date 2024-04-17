import Slider from "react-slick";

type ProductImagesTypes = {
  images: string[];
  name: string;
};

const ProductImages = ({ images, name }: ProductImagesTypes) => {
  const settings = {
    dots: false,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!images || images.length === 0) return null;

  return (
    <Slider {...settings} arrows={false}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={name}
          className="w-full h-[500px] object-contain"
        />
      ))}
    </Slider>
  );
};

export default ProductImages;
