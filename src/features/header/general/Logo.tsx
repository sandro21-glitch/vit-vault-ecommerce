import logo from "/logo-no-background.svg";

const Logo = () => {
  return (
    <li>
      <img src={logo} alt="logo" className="max-w-[250px] max-h-[95px]" />
    </li>
  );
};

export default Logo;
