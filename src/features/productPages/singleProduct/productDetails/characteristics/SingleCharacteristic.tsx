import { RxDividerHorizontal } from "react-icons/rx";

type SingleCharacteristicTypes = {
  char: string;
};

const SingleCharacteristic = ({ char }: SingleCharacteristicTypes) => {
  return (
    <li className="text-[14px] flex items-center gap-1">
      <span>
        <RxDividerHorizontal />
      </span>

      {char}
    </li>
  );
};

export default SingleCharacteristic;
