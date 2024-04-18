import SingleCharacteristic from "./SingleCharacteristic";

type CharacteristicTypes = {
  characteristics: string[] | null;
  name: string;
};

const Characteristics = ({ characteristics, name }: CharacteristicTypes) => {
  return (
    <div className="mb-5">
      <p className="mb-1 text-black font-semibold">
        {name}-ის ძირითადი თვისებები და მახასიათებლები:
      </p>
      <ul>
        {characteristics?.map((char, index) => {
          return <SingleCharacteristic key={index} char={char} />;
        })}
      </ul>
    </div>
  );
};

export default Characteristics;
