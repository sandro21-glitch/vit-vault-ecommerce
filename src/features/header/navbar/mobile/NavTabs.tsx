type NavTabTypes = {
  setActiveTab: (tab: string) => void;
  activeTab: string;
};

const NavTabs = ({ setActiveTab, activeTab }: NavTabTypes) => {
  return (
    <ul
      className={`border-b flex font-sans select-none relative
    after:absolute after:w-1/2 after:h-[2px]
     after:bg-secondaryGreen ${
       activeTab === "menu" ? "after:left-0" : "after:right-0"
     } transition-all ease-in duration-150 after:bottom-0`}
    >
      <li
        onClick={() => setActiveTab("menu")}
        className={`py-[18px] px-[15px] w-1/2 text-center font-bold text-primaryGray
         cursor-pointer ${
           activeTab === "menu" ? "bg-transparentBlack" : "bg-veryLightGray"
         } 
         
         `}
      >
        მენიუ
      </li>
      <li
        onClick={() => setActiveTab("categories")}
        className={`py-[18px] px-[15px] w-1/2 text-center font-bold text-primaryGray
         cursor-pointer ${
           activeTab === "categories"
             ? "bg-transparentBlack"
             : "bg-veryLightGray"
         } `}
      >
        კატეგორიები
      </li>
    </ul>
  );
};

export default NavTabs;
