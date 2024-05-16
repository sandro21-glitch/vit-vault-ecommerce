import { Link } from "react-router-dom";

const LoggedInUser = () => {
  return (
    <li>
      <Link
        to="/profile"
        className="text-[#808080] font-bold text-[13px] cursor-pointer"
      >
        ჩემი ანგარიში
      </Link>
    </li>
  );
};

export default LoggedInUser;
