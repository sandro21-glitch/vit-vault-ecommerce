import React from "react";

type CloseButtonProps = {
  onClick: () => void;
};

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      className="
    relative group w-[30px] h-[30px]
    before:absolute before:left-0 before:w-[14px] before:h-[2px] before:bg-black before:-rotate-45 before:hover:rotate-0
    before:transition-all before:ease-in before:duration-200
    after:absolute after:left-0 after:w-[14px] after:h-[2px] after:bg-black after:rotate-45 after:hover:rotate-0
    after:transition-all after:ease-in after:duration-200"
      onClick={onClick}
    ></button>
  );
};

export default CloseButton;
