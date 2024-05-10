import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ArticleFooter = () => {
  return (
    <div className="border-t-4 py-5">
      <ul className="flex items-center justify-end gap-5">
        <li className="text-[2rem] cursor-pointer group">
          <FaFacebook className="text-[#365493] group-hover:scale-110 transition-all ease-in duration-200" />
        </li>
        <li className="text-[2rem] cursor-pointer group">
          <FaLinkedin className="text-[#0274B3] group-hover:scale-110 transition-all ease-in duration-200" />
        </li>
      </ul>
    </div>
  );
};

export default ArticleFooter;
