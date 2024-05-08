import { SubInfo } from "../../../slices/articlesSlice";

type SubInfoTypes = {
  subInfos: SubInfo[];
};
const SubInfos = ({ subInfos }: SubInfoTypes) => {
  return (
    <ul>
      {subInfos.map((info, index) => {
        return (
          <li key={index} className="mb-10">
            <div className="text-[2rem] text-black font-semibold">
              <span>{index + 1}. </span>
              <span>{info.infoTitle}</span>
            </div>
            <p className="font-poppins text-[16px]">{info.answer}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default SubInfos;
