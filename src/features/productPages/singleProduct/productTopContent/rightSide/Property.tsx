type PropertyTypes = {
  property: null | { available: boolean; name: string }[];
};

const Property = ({ property }: PropertyTypes) => {
  return (
    <div className="flex justify-between items-center mt-5">
      <div className="text-[14px] mr-5">აირჩიეთ პარამეტრი</div>
      <select className="border-2 flex-1 py-2 cursor-pointer outline-none">
        {property?.map((prop, index) => {
          return (
            <option
              key={index}
              disabled={prop.available}
              className={` text-[14px] cursor-not-allowed ${
                !prop.available ? "text-primaryGray" : "text-gray-200"
              }`}
            >
              {prop.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Property;
