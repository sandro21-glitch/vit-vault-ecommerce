import Slider from "react-slick";

type ProductImagesTypes = {
  images: string[];
  name: string;
};

const ProductImages = ({ images, name }: ProductImagesTypes) => {
  const settings = {
    dots: true,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="mb-5">
      <Slider {...settings} arrows={false}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-[350px] lg:h-[500px] object-contain"
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductImages;
