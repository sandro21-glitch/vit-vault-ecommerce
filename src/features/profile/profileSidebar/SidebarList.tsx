import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/hooks";
import { signOutUser } from "../../slices/userSlice";
import toast from "react-hot-toast";

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
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      toast.error(errorMessage);
      console.log(error);
    }
  };
  return (
    <ul className="mt-2">
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
          selectedTab === "orders" ? "bg-gray-200" : "hover:bg-veryLightGray"
        }`}
        onClick={() => handleTabClick("orders")}
      >
        შეკვეთები
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
