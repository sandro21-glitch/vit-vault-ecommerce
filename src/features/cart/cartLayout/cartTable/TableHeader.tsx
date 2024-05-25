const TableHeader = () => {
  return (
    <thead className="hidden sm:table-header-group">
      <tr className="text-left">
        <th className="invisible w-[40px]">&nbsp</th>
        <th className="invisible">&nbsp</th>
        <th>პროდუქტი</th>
        <th>ფასი</th>
        <th>რაოდენობა</th>
        <th>ჯამი</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
