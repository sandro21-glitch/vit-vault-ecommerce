import { useState } from "react";
import ForgotPasswordLink from "./loginFormContent/ForgotPasswordLink";
import LoginButton from "./loginFormContent/LoginButton";
import LoginNameInput from "./loginFormContent/LoginNameInput";
import LoginPasswordInput from "./loginFormContent/LoginPasswordInput";
import SaveCheckbox from "./loginFormContent/SaveCheckbox";
import { UserData, loginUser } from "../../slices/userSlice";
import { useAppDispatch } from "../../../hooks/hooks";
import { closeLoginSidebar } from "../../slices/modalSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(userData));
      dispatch(closeLoginSidebar());
      navigate("/profile");
    } catch (error) {
      console.error("Login failed:", error);
    }
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
