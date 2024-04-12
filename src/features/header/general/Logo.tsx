import { Link } from "react-router-dom";
import logo from "/logo-no-background.svg";

const Logo = () => {
  return (
    <li className="cursor-pointer">
      <Link to="/">
        <img src={logo} alt="logo" className="max-w-[250px] max-h-[95px]" />
      </Link>
    </li>
  );
};

export default Logo;
