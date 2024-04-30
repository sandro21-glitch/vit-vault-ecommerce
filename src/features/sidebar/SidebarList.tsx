import { useAppSelector } from "../../hooks/hooks";
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
    </div>
  );
};

export default SidebarList;
