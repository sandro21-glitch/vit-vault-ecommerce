import { useAppSelector } from "../../../hooks/hooks";
import CartSidebarFooter from "./CartSidebarFooter";
import SingleSidebarListItem from "./SingleSidebarListItem";

const SidebarList = () => {
  const { cartProducts } = useAppSelector((store) => store.cart);
  return (
    <div>
      <ul>
        {cartProducts.map((product) => {
          return <SingleSidebarListItem key={product.id} product={product} />;
        })}
      </ul>
      <CartSidebarFooter />
    </div>
  );
};

export default SidebarList;
