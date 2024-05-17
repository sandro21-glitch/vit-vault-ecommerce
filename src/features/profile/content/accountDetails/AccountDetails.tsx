import { useState } from "react";
import UserEmailSection from "./UserEmailSection";
import UserNameSection from "./UserNameSection";

export interface UserFormTypes {
  userName: string;
  userSurname: string;
}

const AccountDetails = () => {
  const [accountInfo, setAccountInfo] = useState<UserFormTypes>({
    userName: "",
    userSurname: "",
  });

  return (
    <form>
      <div>
        <UserNameSection
          accountInfo={accountInfo}
          setAccountInfo={setAccountInfo}
        />
        <UserEmailSection />
      </div>
    </form>
  );
};

export default AccountDetails;
