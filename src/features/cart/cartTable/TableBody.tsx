import { useAppSelector } from "../../../hooks/hooks";
import SingleCartProduct from "./singleCartProduct/SingleCartProduct";

const TableBody = () => {
  const { cartProducts } = useAppSelector((store) => store.cart);
  if (cartProducts.length < 1) return null;
  return (
    <tbody>
      {cartProducts.map((product) => {
        return <SingleCartProduct key={product.id} product={product} />;
      })}
    </tbody>
  );
};

export default TableBody;
