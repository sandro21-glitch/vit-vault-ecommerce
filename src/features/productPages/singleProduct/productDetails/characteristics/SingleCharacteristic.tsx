type SingleCharacteristicTypes = {
  char: string;
};
const SingleCharacteristic = ({ char }: SingleCharacteristicTypes) => {
  return <li className="list-disc text-[14px]">{char}</li>;
};

export default SingleCharacteristic;
