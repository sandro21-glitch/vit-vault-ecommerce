import { useEffect, useState } from "react";
import ForgotPasswordLink from "./loginFormContent/ForgotPasswordLink";
import LoginButton from "./loginFormContent/LoginButton";
import LoginNameInput from "./loginFormContent/LoginNameInput";
import LoginPasswordInput from "./loginFormContent/LoginPasswordInput";
import SaveCheckbox from "./loginFormContent/SaveCheckbox";
import { UserData, clearError, loginUser } from "../../slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { closeLoginSidebar } from "../../slices/modalSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { error } = useAppSelector((store) => store.user);
  const storedInputMail = localStorage.getItem("userEmail");
  const [localError, setLocalError] = useState<string | null>(null);

  const [userData, setUserData] = useState<UserData>({
    email: storedInputMail ? JSON.parse(storedInputMail) : "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(userData)).unwrap();
      dispatch(closeLoginSidebar());
      navigate("/profile");
      if (isChecked) {
        localStorage.setItem("userEmail", JSON.stringify(userData.email));
      }
    } catch (error) {
      console.error("Login failed:", error);
      setLocalError(error as string);
    }
  };

  useEffect(() => {
    if (error) {
      setLocalError(error);
      alert(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  return (
    <form onSubmit={handleSubmitLogin} className="p-5 font-poppins border-b">
      <LoginNameInput userData={userData} setUserData={setUserData} />
      <LoginPasswordInput userData={userData} setUserData={setUserData} />
      {localError && (
        <p className="text-red-600 text-[14px] mt-1">{localError}</p>
      )}
      <LoginButton />
      <SaveCheckbox setIsChecked={setIsChecked} isChecked={isChecked} />
      <ForgotPasswordLink />
    </form>
  );
};

export default LoginForm;
