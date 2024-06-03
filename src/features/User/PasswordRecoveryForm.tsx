import { useState } from "react";

const PasswordRecoveryForm = () => {
  const [email, setEmail] = useState<string>("");

  const handleResetPasswrd = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("working");
  };

  return (
    <form onSubmit={handleResetPasswrd} className="mb-[40px] font-poppins">
      <div className="max-w-[470px] mx-auto p-10 ">
        <p className="mb-5 text-wrap border-b pb-5">
          დაგავიწყდათ პაროლი? მიუთითეთ თქვენი ელფოსტა. თქვენ მიიღებთ პაროლის
          აღდგენის ბმულს ელფოსტის მისამართზე.
        </p>
        <div className="mb-5">
          <label htmlFor="reset-password" className="float-end mb-2">
            ელფოსტა
          </label>
          <input
            type="email"
            id="reset-password"
            className="border-[2px] w-full outline-none px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full px-3 py-2 bg-secondaryGreen text-white font-bold
           hover:bg-primaryGreen transition-colors ease-in duration-150 outline-none"
        >
          გაგზავნა
        </button>
      </div>
    </form>
  );
};

export default PasswordRecoveryForm;
