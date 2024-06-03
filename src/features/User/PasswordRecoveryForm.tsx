import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { clearMessage, resetPassword } from "../slices/userSlice";
import SmallSpinner from "../../ui/SmallSpinner";

const PasswordRecoveryForm = () => {
  const { error, isLoading, message } = useAppSelector((store) => store.user);

  const [email, setEmail] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleResetPasswrd = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(resetPassword(email));
  };

  useEffect(() => {
    if (message || error) {
      setSuccessMessage(message);
      const timer = setTimeout(() => {
        dispatch(clearMessage());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [message, error, dispatch]);

  if (error) return <p>{error || "Error"}</p>;
  return (
    <form onSubmit={handleResetPasswrd} className="mb-[40px] font-poppins">
      {successMessage !== "" ? (
        <p className="min-h-[30vh] text-center">{successMessage}</p>
      ) : (
        <div className="max-w-[470px] mx-auto p-10 relative">
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
          {isLoading && <SmallSpinner />}
        </div>
      )}
    </form>
  );
};

export default PasswordRecoveryForm;
