import { useAppSelector } from "../../../../../hooks/hooks";
import SingleMobileTable from "./SingleMobileTable";

const TableMobile = () => {
  const { cartProducts } = useAppSelector((store) => store.cart);
  if (cartProducts.length < 1) return null;

  return (
    <div className="text-[14px] mb-[40px] block md:hidden">
      {cartProducts.map((product) => {
        return <SingleMobileTable key={product.id} product={product} />;
      })}
    </div>
  );
};

export default TableMobile;
