import { useAppSelector } from "../../../hooks/hooks";
import SingleCartProduct from "./SingleCartProduct";

const TableBody = () => {
  const { cartProducts } = useAppSelector((store) => store.cart);
  return (
    <tbody className="w-full">
      {cartProducts.map((product) => {
        return <SingleCartProduct key={product.id} product={product} />;
      })}
    </tbody>
  );
};

export default TableBody;
