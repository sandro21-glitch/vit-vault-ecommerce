import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
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
      <div className="section-center py-[15px] flex items-center justify-center">
        <button
          onClick={navigateBack}
          className="mr-5 rotate-180 text-[2rem] text-white "
        >
          <FaLongArrowAltRight />
        </button>
        <h1 className="text-white font-bold text-[1rem] md:text-[1.5rem] lg:text-[2rem] whitespace-nowrap">
          {categoryName}
        </h1>
      </div>
    </header>
  );
};

export default SectionHeader;
