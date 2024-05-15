import { useState } from "react";
import { UserData, registerUser } from "../features/slices/userSlice";
import { useAppDispatch } from "../hooks/hooks";

const Register = () => {
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="mail">eMail</label>
        <input
          type="email"
          id="mail"
          className="border"
          value={userData.email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          id="pass"
          className="border"
          value={userData.password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
