type EmailInputTypes = {
  emailValue: string;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const EmailInput = ({ emailValue, handleEmailChange }: EmailInputTypes) => {
  return (
    <div className="flex flex-col text-end w-full mb-5">
      <label htmlFor="mail" className="text-[18px] mb-1">
        ელფოსტის მისამართი
      </label>
      <input
        type="email"
        id="mail"
        className="border-[3px] w-full outline-none px-2 py-3"
        value={emailValue}
        onChange={handleEmailChange}
      />
    </div>
  );
};

export default EmailInput;
