import { useState } from "react";
import CartHeader from "../features/cart/cartLayout/CartHeader";
import CartLayout from "../features/cart/cartLayout/CartLayout";
import Payment from "../features/cart/payment/Payment";
import ArticleWidgets from "../ui/ArticleWidgets";

const Cart = () => {
  const [cartPage, setCartPage] = useState<string>("cart");

  return (
    <section>
      <CartHeader cartPage={cartPage} />
      {/* cart */}
      <div
        style={{ marginBottom: "40px" }}
        className="flex flex-col lg:flex-row section-center section-x md:gap-7"
      >
        {cartPage === "cart" && <CartLayout setCartPage={setCartPage} />}
        {cartPage === "payment" && <Payment />}
        <ArticleWidgets />
      </div>
    </section>
  );
};

export default Cart;
