import { useState } from "react";
import UserEmailSection from "./UserEmailSection";
import UserNameSection from "./UserNameSection";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { updateUserData } from "../../../slices/userSlice";
import toast from "react-hot-toast";

export interface UserFormTypes {
  userName: string;
  userSurname: string;
}

const AccountDetails = () => {
  const user = useAppSelector((state) => state.user.user);
  const [accountInfo, setAccountInfo] = useState<UserFormTypes>({
    userName: user?.name ? user.name : "",
    userSurname: user?.surname ? user.surname : "",
  });
  const dispatch = useAppDispatch();

  const handleSubmitUserData = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      dispatch(
        updateUserData({
          uid: user.uid,
          name: accountInfo.userName,
          surname: accountInfo.userSurname,
        })
      );
      toast.success("მომხმარებლის მონაცემები წარმატებით განახლდა!");
    }
  };

  return (
    <form onSubmit={handleSubmitUserData}>
      <div>
        <UserNameSection
          accountInfo={accountInfo}
          setAccountInfo={setAccountInfo}
        />
        <UserEmailSection />
      </div>
      <button
        type="submit"
        className="bg-secondaryGreen py-3 px-5 text-white mt-7 font-poppins tracking-wide
         font-bold text-[14px] hover:bg-primaryGreen transition-all ease-in duration-150"
      >
        ცვლილებების შენახვა
      </button>
    </form>
  );
};

export default AccountDetails;
