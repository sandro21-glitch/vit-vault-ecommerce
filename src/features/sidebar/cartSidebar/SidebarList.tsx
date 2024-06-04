import { useAppSelector } from "../../../hooks/hooks";
import CartSidebarFooter from "./CartSidebarFooter";
import SingleSidebarListItem from "./SingleSidebarListItem";

const SidebarList = () => {
  const { cartProducts } = useAppSelector((store) => store.cart);

  return (
    <div className="flex flex-col h-full">
      <ul className="flex-grow overflow-x-hidden overflow-y-auto small-scrollbar">
        {cartProducts.map((product) => (
          <SingleSidebarListItem key={product.id} product={product} />
        ))}
      </ul>
      <CartSidebarFooter />
    </div>
  );
};

export default SidebarList;
