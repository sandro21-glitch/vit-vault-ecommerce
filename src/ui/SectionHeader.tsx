import { Link } from "react-router-dom";
type SectionHeaderTypes = {
  path: string;
};

const SectionHeader = ({ path }: SectionHeaderTypes) => {
  const categoryName = path ? path.replace(/-/g, " ") : "პროდუქტები";

  return (
    <header className="bg-secondaryGreen mb-[40px] ">
      <div className="section-center px-5 py-[15px]">
        <h1 className="text-white font-bold text-[1rem] text-center md:text-[1.7rem] lg:text-[2rem] mb-2">
          {categoryName}
        </h1>
        <div className="flex items-center justify-center text-white font-semibold text-[10px] md:text-[14px]">
          <Link to="/" className="hover:opacity-70 tracking-widest">
            მთავარი
          </Link>
          <span className="mx-2">/</span>
          <span className="tracking-widest">{path}</span>
        </div>
      </div>
    </header>
  );
};

export default SectionHeader;
