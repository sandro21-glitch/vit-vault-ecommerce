import { useState } from "react";
import SearchProduct from "../../../general/search/SearchProduct";
import MobileNavList from "./MobileNavList";
import NavTabs from "../NavTabs";
import MobileCategories from "../category/MobileCategories";

type MobileNavTypes = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

const MobileNav = ({ isOpen, setOpen }: MobileNavTypes) => {
  const [activeTab, setActiveTab] = useState<string>("menu");

  return (
    <div
      className={`fixed ${
        isOpen ? "translate-x-0" : "translate-x-[-200%]"
      } overflow-y-scroll bg-white top-0 left-0 w-[300px] md:w-[350px] right-0 bottom-0 z-[9999] transition-all ease-in duration-300 delay-100`}
    >
      <div className="overflow-hidden">
        <SearchProduct setOpen={setOpen} />
        <NavTabs setActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === "menu" ? (
          <MobileNavList setOpen={setOpen} />
        ) : (
          <MobileCategories setOpen={setOpen} />
        )}
      </div>
    </div>
  );
};

export default MobileNav;
