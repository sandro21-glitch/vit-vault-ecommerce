import RelatedProductList from "./RelatedProductList";

const RelatedProducts = () => {
  return (
    <article
      className="section-center section-x"
      style={{ marginBottom: "40px", marginTop: "50px" }}
    >
      <h6 className="font-semibold">შესაძლოა, ასევე მოგეწონოთ…</h6>
      <RelatedProductList />
    </article>
  );
};

export default RelatedProducts;
