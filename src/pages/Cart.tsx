import CartHeader from "../features/cart/cartLayout/CartHeader";
import CartLayout from "../features/cart/cartLayout/CartLayout";
import ArticleWidgets from "../ui/ArticleWidgets";

const Cart = () => {
  return (
    <section>
      <CartHeader />
      {/* cart */}
      <div
        style={{ marginBottom: "40px" }}
        className="flex flex-col lg:flex-row section-center section-x md:gap-7"
      >
        <CartLayout />
        {/* <div className="w-full flex">
          <div className="w-1/2">1</div>
          <div className="w-1/2">2</div>
        </div> */}
        <ArticleWidgets />
      </div>
    </section>
  );
};

export default Cart;
