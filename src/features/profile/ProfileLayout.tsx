import { useState } from "react";
import AccountSidebar from "./sidebar/AccountSidebar";

const ProfileLayout = () => {
  const [selectedTab, setSelectedTab] = useState("orders");

  return (
    <div className="py-20">
      <AccountSidebar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
    </div>
  );
};

export default ProfileLayout;
