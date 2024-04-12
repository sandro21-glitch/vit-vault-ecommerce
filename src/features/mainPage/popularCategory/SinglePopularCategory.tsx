import { useAppSelector } from "../../../hooks/hooks";

type SinglePopCategoryTypes = {
  item: {
    image: string;
    name: string;
  };
};

const SinglePopularCategory = ({ item }: SinglePopCategoryTypes) => {
  const { productData } = useAppSelector((store) => store.product);

  const handleCheckCategory = (category: string) => {
    const isSameCategory = productData?.filter(
      (cat) => cat.category === category
    );
    if (isSameCategory) return isSameCategory?.length;
  };

  return (
    <li className="group cursor-pointer">
      <div className="shadow-mainShadow bg-white overflow-hidden rounded-full">
        <img
          src={item.image}
          alt={item.name}
          className="w-full p-5 border-2 border-primaryGreen  object-center h-auto group-hover:scale-105 transition-all ease-in duration-300 rounded-full"
        />
      </div>
      <div className="text-center mt-2">
        <h4 className="mb-1">{item.name}</h4>
        <p>{handleCheckCategory(item.name)} პროდუქტი</p>
      </div>
    </li>
  );
};

export default SinglePopularCategory;
