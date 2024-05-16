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
      <input
        type="text"
        id="name"
        className="border-2 outline-none p-2"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
    </div>
  );
};

export default LoginNameInput;
