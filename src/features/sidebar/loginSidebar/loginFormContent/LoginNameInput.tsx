import Input from "../../../../ui/Input";

type LoginNameTypes = {
  userData: { email: string; password: string };
  setUserData: (userData: { email: string; password: string }) => void;
};

const LoginNameInput = ({ setUserData, userData }: LoginNameTypes) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="name" className="text-right text-[18px] text-primaryGray">
        სახელი, ან ელფოსტა
      </label>
      <Input
        id="name"
        type="text"
        className={`${userData.email === "" ? "border-[1px] border-red-600" : ""}`}
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
    </div>
  );
};

export default LoginNameInput;
