import Breadcrumb from "../../../ui/Breadcrumb";

type ListHeaderTypes = {
  category?: string;
};
const ListHeader = ({ category }: ListHeaderTypes) => {
  return (
    <div className="flex justify-between">
      <Breadcrumb category={category ? category : ""} />
      <div className="flex gap-5 ">
        <div>აჩვენე: 12 / 24 / 48</div>
        <select name="" id="">
        <option value="" disabled selected hidden>ფასი: აირჩიეთ</option>
          <option>ფასი: ზრდადობით</option>
          <option>ფასი: კლებადობით</option>
        </select>
      </div>
    </div>
  );
};

export default ListHeader;
