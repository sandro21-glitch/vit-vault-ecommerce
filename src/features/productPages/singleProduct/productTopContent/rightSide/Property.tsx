type PropertyTypes = {
  property: null | { available: boolean; name: string }[];
};

const Property = ({ property }: PropertyTypes) => {
  return (
    <div className="flex justify-between items-center mt-5 border-b">
      <div className="text-[14px] mr-5">აირჩიეთ პარამეტრი</div>
      <select className="border-2 flex-1 py-2 text-[14px] cursor-pointer outline-none">
        {property?.map((prop, index) => {
          return (
            <option
              key={index}
              disabled={!prop.available}
              value={prop.name}
              className={` text-[14px] cursor-not-allowed ${
                prop.available ? "text-primaryGray" : "text-gray-200"
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
