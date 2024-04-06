type SingleNavItemTypes = {
  name: string;
  icon: string;
};
const SingleNavItem = ({ icon, name }: SingleNavItemTypes) => {
  return (
    <li className="flex items-center gap-1 cursor-pointer text-[14px]">
      <img src={icon} alt={name} className="w-[24px] h-[24px]" />
      <span>{name}</span>
    </li>
  );
};

export default SingleNavItem;
