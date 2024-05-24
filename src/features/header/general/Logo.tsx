import { Link } from "react-router-dom";
import logo from "/logo-no-background.svg";
import logoMobile from "/logo-mobile.svg";

const Logo = () => {
  return (
    <li className="cursor-pointer">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="max-w-[250px] max-h-[95px] md:block hidden"
        />
        <img
          src={logoMobile}
          alt="logo"
          className="max-w-[150px] md:hidden block"
        />
      </Link>
    </li>
  );
};

export default Logo;
