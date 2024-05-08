import { SubInfo } from "../../../slices/articlesSlice";

type SubInfoTypes = {
  subInfos: SubInfo[];
};
const SubInfos = ({ subInfos }: SubInfoTypes) => {
  return (
    <ul>
      {subInfos.map((info, index) => {
        const splitInfo = info.answer.split(" - ");
        return (
          <li key={index} className="mb-10">
            <div className="text-[2rem] text-black font-semibold">
              <span>{index + 1}. </span>
              <span>{info.infoTitle}</span>
            </div>
            {splitInfo.map((part, index) => (
              <p className="font-poppins text-[16px] mb-3">
                {part.trim()}
                {index < splitInfo.length - 1 && <br />}
              </p>
            ))}
          </li>
        );
      })}
    </ul>
  );
};

export default SubInfos;
