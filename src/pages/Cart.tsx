import CartHeader from "../features/cart/cartLayout/CartHeader";
// import CartLayout from "../features/cart/cartLayout/CartLayout";
import Payment from "../features/cart/payment/Payment";
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
        {/* <CartLayout /> */}
        <Payment />
        <ArticleWidgets />
      </div>
    </section>
  );
};

export default Cart;
