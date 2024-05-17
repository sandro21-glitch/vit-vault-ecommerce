import Input from "../../../../ui/Input";
import { UserFormTypes } from "./AccountDetails";

type UserSectionProps = {
  accountInfo: UserFormTypes;
  setAccountInfo: (info: UserFormTypes) => void;
};

const UserNameSection = ({ accountInfo, setAccountInfo }: UserSectionProps) => {
  return (
    <div className="flex items-center gap-10 mb-7">
      <div className="w-full text-end">
        <label htmlFor="userName">სახელი</label>
        <Input
          type="text"
          id="userName"
          className="w-full"
          value={accountInfo.userName}
          onChange={(e) =>
            setAccountInfo({ ...accountInfo, userName: e.target.value })
          }
        />
      </div>
      <div className="w-full text-end">
        <label htmlFor="userSurname" className="text-end">
          გვარი
        </label>
        <Input
          type="text"
          id="userSurname"
          className="w-full"
          value={accountInfo.userSurname}
          onChange={(e) =>
            setAccountInfo({ ...accountInfo, userSurname: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default UserNameSection;
