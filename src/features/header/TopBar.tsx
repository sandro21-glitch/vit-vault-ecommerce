import ge from "/flag-ge.svg";
import ru from "/flag-ru.svg";
import en from "/flag-en.svg";

const TopBar = () => {
  return (
    <div className=" bg-primaryGreen">
      <div className="h-[40px] px-[15px] section-center flex items-center justify-end">
        <ul className="h-full border-l px-3 text-center flex items-center gap-2">
          <li className="cursor-pointer hover:scale-105 transition-all ease-in duration-150">
            <img
              src={ge}
              alt="flag ge"
              loading="lazy"
              className="w-[20px] h-auto"
            />
          </li>
          <li className="cursor-pointer hover:scale-105 transition-all ease-in duration-150">
            <img
              src={en}
              alt="flag en"
              loading="lazy"
              className="w-[20px] h-auto"
            />
          </li>
          <li className="cursor-pointer hover:scale-105 transition-all ease-in duration-150">
            <img
              src={ru}
              alt="flag ru"
              loading="lazy"
              className="w-[20px] h-auto"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
