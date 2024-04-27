import { useAppSelector } from "../../../hooks/hooks";
import SingleCartProduct from "./SingleCartProduct";

const TableBody = () => {
  const { cartProducts } = useAppSelector((store) => store.cart);
  if (cartProducts.length < 1)
    return <div className="max-w-[65%] flex-1">test</div>;
  return (
    <tbody>
      {cartProducts.map((product) => {
        return <SingleCartProduct key={product.id} product={product} />;
      })}
    </tbody>
  );
};

export default TableBody;
