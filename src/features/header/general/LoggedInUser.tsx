type LoggedUserTypes = {
  email: string;
};

const LoggedInUser = ({email }: LoggedUserTypes) => {
  return (
    <li
      className="text-[#808080] font-bold text-[13px] cursor-pointer"
    >
      {email}
    </li>
  );
};

export default LoggedInUser;
