type SinglePopCategoryTypes = {
  item: {
    image: string;
    name: string;
  };
};

const SinglePopularCategory = ({ item }: SinglePopCategoryTypes) => {
  return (
    <li className="group cursor-pointer">
      <div className="shadow-mainShadow bg-white overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-auto group-hover:scale-110 transition-all ease-in duration-300 rounded-full"
        />
      </div>
      <div className="text-center mt-2">
        <h4 className="mb-1">{item.name}</h4>
        <p>220 პროდუქტი</p>
      </div>
    </li>
  );
};

export default SinglePopularCategory;
