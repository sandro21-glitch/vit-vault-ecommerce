import { useAppSelector } from "../../../../hooks/hooks";

const UserEmailSection = () => {
  const { user } = useAppSelector((store) => store.user);

  return (
    <div className="flex flex-col text-end">
      <label htmlFor="userEmail">ელფოსტის მისამართი</label>
      <input
        type="email"
        name="email"
        id="email"
        disabled
        defaultValue={user?.email}
        className="border-[3px] outline-none p-2 opacity-50"
      />
    </div>
  );
};

export default UserEmailSection;
