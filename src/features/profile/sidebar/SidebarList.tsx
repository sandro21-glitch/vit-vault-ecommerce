const SidebarList = () => {
  return (
    <ul className="mt-2">
      <li className="p-2 cursor-pointer hover:bg-veryLightGray transition-all ease-in duration-150 font-semibold">
        შეკვეთები
      </li>
      <li className="p-2 cursor-pointer hover:bg-veryLightGray transition-all ease-in duration-150 font-semibold">
        მისამართები
      </li>
      <li className="p-2 cursor-pointer hover:bg-veryLightGray transition-all ease-in duration-150 font-semibold">
        ანგარიშის დეტალები
      </li>
      <li className="p-2 cursor-pointer hover:bg-veryLightGray transition-all ease-in duration-150 font-semibold">
        გამოსვლა
      </li>
    </ul>
  );
};

export default SidebarList;
