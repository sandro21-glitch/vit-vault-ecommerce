import ArticleDetails from "../features/productPages/singleProduct/article/ArticleDetails";
import ProductContent from "../features/productPages/singleProduct/productTopContent/ProductContent";
import RelatedProducts from "../features/productPages/singleProduct/relatedProduct/RelatedProducts";

const SingleProduct = () => {
  return (
    <section>
      <ProductContent />
      <ArticleDetails />
      <RelatedProducts />
    </section>
  );
};

export default SingleProduct;
