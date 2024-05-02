import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";

type SinglePopCategoryTypes = {
  item: {
    image: string;
    name: string;
    path: string;
  };
};

const SinglePopularCategory = ({ item }: SinglePopCategoryTypes) => {
  const { productData } = useAppSelector((store) => store.product);

  const handleCheckCategory = (category: string) => {
    const isSameCategory = productData?.filter(
      (cat) => cat.category.toLowerCase() === category.toLowerCase()
    );
    if (isSameCategory) return isSameCategory?.length;
  };

  return (
    <li className="group cursor-pointer rounded-full">
      <Link to={`/product-category/${item.path}`}>
        <div className="shadow-mainShadow bg-white overflow-hidden rounded-full mb-4 border-2 border-primaryGreen ">
          <img
            src={item.image}
            alt={item.name}
            className="w-full p-5 object-center h-auto group-hover:scale-105 transition-all ease-in duration-300 rounded-full"
          />
        </div>
        <div className="text-center mt-2">
          <h4 className="mb-1">{item.name}</h4>
          <p>{handleCheckCategory(item.name)} პროდუქტი</p>
        </div>
      </Link>
    </li>
  );
};

export default SinglePopularCategory;
