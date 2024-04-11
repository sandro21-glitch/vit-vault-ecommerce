import { useState } from "react";
import SearchProduct from "../../../general/SearchProduct";
import MobileNavList from "./MobileNavList";
import NavTabs from "../NavTabs";
import MobileCategories from "../category/MobileCategories";

type MobileNavTypes = {
  isOpen: boolean;
};

const MobileNav = ({ isOpen }: MobileNavTypes) => {
  const [activeTab, setActiveTab] = useState<string>("menu");

  return (
    <div
      className={`fixed ${
        isOpen ? "translate-x-0" : "translate-x-[-200%]"
      } bg-white top-0 left-0 w-[60%] right-0 bottom-0 z-[9999] transition-all ease-in duration-300 delay-100`}
    >
      <div className="overflow-hidden">
        <SearchProduct />
        <NavTabs setActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === "menu" ? <MobileNavList /> : <MobileCategories />}
      </div>
    </div>
  );
};

export default MobileNav;
