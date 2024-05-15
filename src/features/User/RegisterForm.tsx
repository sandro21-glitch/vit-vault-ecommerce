import { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { UserData, registerUser } from "../slices/userSlice";

const RegisterForm = () => {
  const dispatch = useAppDispatch();
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser(userData));
    console.log(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-[40px] font-poppins">
      <div className="flex items-center justify-center flex-col max-w-[600px] mx-auto  p-10">
        <h4
          className="mb-10 relative after:absolute after:-bottom-2 after:left-0 after:right-0
         after:bg-secondaryGreen after:h-[3px] after:w-full"
        >
          მომხმარებელი
        </h4>
        <div className="flex flex-col text-end w-full mb-5">
          <label htmlFor="mail" className="text-[18px] mb-1">
            ელფოსტის მისამართი
          </label>
          <input
            type="email"
            id="mail"
            className="border-[3px] w-full outline-none px-2 py-3"
            value={userData.email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="flex flex-col text-end w-full mb-5">
          <label htmlFor="pass" className="text-[18px] mb-1">
            პაროლი
          </label>
          <input
            type="password"
            id="pass"
            className="border-[3px] w-full outline-none px-2 py-3"
            value={userData.password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center mb-5">
          <input type="checkbox" id="terms" className="scale-[1.5] mr-2" />
          <label
            htmlFor="terms"
            className="text-[18px] font-semibold  cursor-pointer"
          >
            ვეთანხმები{" "}
            <span className="text-secondaryGreen hover:text-primaryGreen transition-colors ease-in duration-150">
              წესებს და პირობებს
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-secondaryGreen text-white py-3 text-[18px] font-semibold tracking-widest"
        >
          რეგისტრაცია
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
