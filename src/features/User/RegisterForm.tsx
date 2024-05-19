import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { UserData, clearError, registerUser } from "../slices/userSlice";
import EmailInput from "./registerFormLabels/EmailInput";
import PasswordInput from "./registerFormLabels/PasswordInput";
import TermsCheckbox from "./registerFormLabels/TermsCheckbox";
import SubmitRegisterBtn from "./registerFormLabels/SubmitRegisterBtn";
import FormHeader from "./registerFormLabels/FormHeader";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const { error } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      email: e.target.value,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      password: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(registerUser(userData));
      navigate("/profile");
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
    <form onSubmit={handleSubmit} className="mb-[40px] font-poppins">
      <div className="flex items-center justify-center flex-col max-w-[600px] mx-auto  p-10">
        <FormHeader />
        <EmailInput
          emailValue={userData.email}
          handleEmailChange={handleEmailChange}
        />
        <PasswordInput
          passwordValue={userData.password}
          handlePasswordChange={handlePasswordChange}
        />
        <TermsCheckbox />
        <SubmitRegisterBtn />
      </div>
    </form>
  );
};

export default RegisterForm;
