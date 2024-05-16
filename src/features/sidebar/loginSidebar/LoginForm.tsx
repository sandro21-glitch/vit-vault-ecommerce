import { useState } from "react";
import ForgotPasswordLink from "./loginFormContent/ForgotPasswordLink";
import LoginButton from "./loginFormContent/LoginButton";
import LoginNameInput from "./loginFormContent/LoginNameInput";
import LoginPasswordInput from "./loginFormContent/LoginPasswordInput";
import SaveCheckbox from "./loginFormContent/SaveCheckbox";
import { UserData, loginUser } from "../../slices/userSlice";
import { useAppDispatch } from "../../../hooks/hooks";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
  });

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser(userData));
  };

  return (
    <form onSubmit={handleSubmitLogin} className="p-5 font-poppins border-b">
      <LoginNameInput userData={userData} setUserData={setUserData} />
      <LoginPasswordInput userData={userData} setUserData={setUserData} />
      <LoginButton />
      <SaveCheckbox />
      <ForgotPasswordLink />
    </form>
  );
};

export default LoginForm;
