type SidebarListProps = {
  setSelectedTab: (tab: string) => void;
  selectedTab: string;
};

const SidebarList = ({ setSelectedTab, selectedTab }: SidebarListProps) => {
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <ul className="mt-2">
      <li
        className={`p-2 cursor-pointer transition-all ease-in duration-150 font-semibold ${
          selectedTab === "orders" ? "bg-gray-200" : "hover:bg-veryLightGray"
        }`}
        onClick={() => handleTabClick("orders")}
      >
        შეკვეთები
      </li>
      <li
        className={`p-2 cursor-pointer  transition-all ease-in duration-150 font-semibold ${
          selectedTab === "addresses" ? "bg-gray-200" : "hover:bg-veryLightGray"
        }`}
        onClick={() => handleTabClick("addresses")}
      >
        მისამართები
      </li>
      <li
        className={`p-2 cursor-pointer transition-all ease-in duration-150 font-semibold ${
          selectedTab === "accountDetails"
            ? "bg-gray-200"
            : "hover:bg-veryLightGray"
        }`}
        onClick={() => handleTabClick("accountDetails")}
      >
        ანგარიშის დეტალები
      </li>
      <li
        className={`p-2 cursor-pointer transition-all ease-in duration-150 font-semibold ${
          selectedTab === "logout" ? "bg-gray-200" : "hover:bg-veryLightGray"
        }`}
        onClick={() => handleTabClick("logout")}
      >
        გამოსვლა
      </li>
    </ul>
  );
};

export default SidebarList;
