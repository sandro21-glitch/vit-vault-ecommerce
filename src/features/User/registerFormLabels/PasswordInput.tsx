type PasswordInputTypes = {
  passwordValue: string;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PasswordInput = ({
  handlePasswordChange,
  passwordValue,
}: PasswordInputTypes) => {
  return (
    <div className="flex flex-col text-end w-full mb-5">
      <label htmlFor="pass" className="text-[18px] mb-1">
        პაროლი
      </label>
      <input
        type="password"
        id="pass"
        className="border-[3px] w-full outline-none px-2 py-3"
        value={passwordValue}
        onChange={handlePasswordChange}
      />
    </div>
  );
};

export default PasswordInput;
