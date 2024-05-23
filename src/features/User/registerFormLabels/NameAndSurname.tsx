import { UserData } from "../../slices/userSlice";

type NameAndSurnameProps = {
  userData: UserData;
  setUserData: (userData: UserData) => void;
};
const NameAndSurname = ({ setUserData, userData }: NameAndSurnameProps) => {
  const handleUpdateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, name: e.target.value });
  };

  const handleUpdateSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, surname: e.target.value });
  };

  return (
    <div className="w-full">
      <div className="flex flex-col text-end w-full mb-5">
        <label htmlFor="name" className="text-[18px] mb-1">
          სახელი
        </label>
        <input
          type="text"
          id="name"
          className="border-[3px] w-full outline-none px-2 py-3"
          onChange={handleUpdateName}
          value={userData.name}
        />
      </div>
      <div className="flex flex-col text-end w-full mb-5">
        <label htmlFor="surname" className="text-[18px] mb-1">
          გვარი
        </label>
        <input
          type="text"
          id="surname"
          className="border-[3px] w-full outline-none px-2 py-3"
          onChange={handleUpdateSurname}
          value={userData.surname}
        />
      </div>
    </div>
  );
};

export default NameAndSurname;
