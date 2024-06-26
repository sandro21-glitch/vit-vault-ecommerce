import { useEffect, useState } from "react";
import ForgotPasswordLink from "./loginFormContent/ForgotPasswordLink";
import LoginButton from "./loginFormContent/LoginButton";
import LoginNameInput from "./loginFormContent/LoginNameInput";
import LoginPasswordInput from "./loginFormContent/LoginPasswordInput";
import SaveCheckbox from "./loginFormContent/SaveCheckbox";
import { UserData, clearError, loginUser } from "../../slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { closeLoginSidebar } from "../../slices/modalSlice";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = () => {
  const { error } = useAppSelector((store) => store.user);
  const storedInputMail = localStorage.getItem("userEmail");

  const [userData, setUserData] = useState<UserData>({
    email: storedInputMail ? JSON.parse(storedInputMail) : "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(userData)).unwrap();
      dispatch(closeLoginSidebar());
      if (location.pathname !== "/cart") {
        navigate("/profile");
      }
      if (isChecked) {
        localStorage.setItem("userEmail", JSON.stringify(userData.email));
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  return (
    <form onSubmit={handleSubmitLogin} className="p-5 font-poppins border-b">
      <LoginNameInput userData={userData} setUserData={setUserData} />
      <LoginPasswordInput userData={userData} setUserData={setUserData} />
      <LoginButton />
      <SaveCheckbox setIsChecked={setIsChecked} isChecked={isChecked} />
      <ForgotPasswordLink />
    </form>
  );
};

export default LoginForm;
