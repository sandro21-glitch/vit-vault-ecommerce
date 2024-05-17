import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/hooks";
import { signOutUser } from "../../slices/userSlice";

type SidebarListProps = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};

const SidebarList = ({ setSelectedTab, selectedTab }: SidebarListProps) => {
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSignOutUser = async () => {
    try {
      await dispatch(signOutUser());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
        onClick={handleSignOutUser}
      >
        გამოსვლა
      </li>
    </ul>
  );
};

export default SidebarList;
