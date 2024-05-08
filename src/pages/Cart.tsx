import CartHeader from "../features/cart/CartHeader";
import CartLayout from "../features/cart/CartLayout";
import ArticleWidgets from "../ui/ArticleWidgets";

const Cart = () => {
  return (
    <section>
      <CartHeader />
      <div
        style={{ marginBottom: "40px" }}
        className="flex flex-col lg:flex-row section-center section-x md:gap-7"
      >
        <CartLayout />
        <ArticleWidgets />
      </div>
    </section>
  );
};

export default Cart;
