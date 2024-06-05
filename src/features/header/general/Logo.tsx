import { Link } from "react-router-dom";
import logoMobile from "/logo-mobile.svg";

const Logo = () => {
  return (
    <li className="cursor-pointer">
      <Link to="/">
        <img
          src={logoMobile}
          alt="logo"
          className="max-w-[150px] lg:max-w-[250px] lg:max-h-[95px]"
        />
      </Link>
    </li>
  );
};

export default Logo;
