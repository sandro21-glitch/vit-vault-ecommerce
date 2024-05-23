import { useState } from "react";
import AccountSidebar from "./profileSidebar/AccountSidebar";
import Orders from "./content/orders/Orders";
import AccountDetails from "./content/accountDetails/AccountDetails";

const ProfileLayout = () => {
  const [selectedTab, setSelectedTab] = useState("orders");

  return (
    <div className="py-20 flex gap-5 flex-col lg:flex-row">
      <AccountSidebar
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
      />
      <div className="lg:w-[75%] w-full">
        {selectedTab === "orders" && <Orders />}
        {selectedTab === "accountDetails" && <AccountDetails />}
      </div>
    </div>
  );
};

export default ProfileLayout;
