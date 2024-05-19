import Input from "../../../../ui/Input";

type LoginPasswordTypes = {
  userData: { email: string; password: string };
  setUserData: (userData: { email: string; password: string }) => void;
};

const LoginPasswordInput = ({ setUserData, userData }: LoginPasswordTypes) => {
  return (
    <div className="flex flex-col mt-5">
      <label
        htmlFor="password"
        className="text-right text-[18px] text-primaryGray"
      >
        პაროლი
      </label>
      <Input
        type="password"
        id="password"
        className={`${userData.password === "" ? "border-[1px] border-red-600" : ""}`}
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
    </div>
  );
};

export default LoginPasswordInput;
