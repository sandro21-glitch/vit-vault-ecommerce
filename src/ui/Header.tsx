import GeneralHeader from "../features/header/GeneralHeader";
import MainNavbar from "../features/header/MainNavbar";
import TopBar from "../features/header/TopBar";

const Header = () => {
  return (
    <header>
      <TopBar />
      <GeneralHeader />
      <MainNavbar />
    </header>
  );
};

export default Header;
