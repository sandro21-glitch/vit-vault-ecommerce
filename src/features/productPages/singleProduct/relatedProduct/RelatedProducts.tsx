import RelatedProductList from "./RelatedProductList";

const RelatedProducts = () => {
  return (
    <article
      className="section-center section-x"
      style={{ marginBottom: "40px", marginTop: "50px" }}
    >
      <h6 className="font-semibold text-[14px] mb-5 border-b-2 border-secondaryGreen w-fit">
        შესაძლოა, ასევე მოგეწონოთ…
      </h6>
      <RelatedProductList />
    </article>
  );
};

export default RelatedProducts;
