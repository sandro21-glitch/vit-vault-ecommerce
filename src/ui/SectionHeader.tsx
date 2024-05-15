import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
type SectionHeaderTypes = {
  path: string;
};

const SectionHeader = ({ path }: SectionHeaderTypes) => {
  const navigate = useNavigate();
  const categoryName = path ? path.replace(/-/g, " ") : "პროდუქტები";

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <header className="bg-secondaryGreen mb-[40px] ">
      <div className="section-center px-5 py-[15px]">
        <div className=" flex items-center justify-center mb-2">
          <button
            onClick={navigateBack}
            className="mr-5 rotate-180 text-[2rem] text-white "
          >
            <FaLongArrowAltRight />
          </button>
          <h1 className="text-white font-bold text-[1rem] text-center md:text-[1.7rem] lg:text-[2rem]">
            {categoryName}
          </h1>
        </div>
        <div className="flex items-center justify-center text-white font-bold text-[14px]">
          <Link to="/" className="hover:opacity-70">
            მთავარი
          </Link>
          <span className="mx-2">/</span>
          <span>{path}</span>
        </div>
      </div>
    </header>
  );
};

export default SectionHeader;
