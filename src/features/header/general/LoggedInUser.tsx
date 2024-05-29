import { Link } from "react-router-dom";

type LoggedUserTypes = {
  setOpen?: (open: boolean) => void;
};

const LoggedInUser = ({ setOpen }: LoggedUserTypes) => {
  const handleOpenAuthSidebar = () => {
    setOpen && setOpen(false);
  };
  return (
    <li onClick={handleOpenAuthSidebar}>
      <Link
        to="/profile"
        className="text-[#808080] font-bold text-[13px] cursor-pointer p-[14px] md:p-0
         inline-flex items-center gap-2"
      >
        ჩემი ანგარიში
      </Link>
    </li>
  );
};

export default LoggedInUser;
