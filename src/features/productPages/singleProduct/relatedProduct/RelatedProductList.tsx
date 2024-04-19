import { useAppSelector } from "../../../../hooks/hooks";
import ProductCard from "../../../../ui/ProductCard";

const RelatedProductList = () => {
  const { selectedProductId, productData } = useAppSelector(
    (store) => store.product
  );
  const selectedProduct = productData?.find(
    (data) => data.id === selectedProductId
  );
  const selectedCategory = selectedProduct ? selectedProduct.category : null;
  const relatedProduct = productData
    ?.filter((data) => {
      if (data.category === selectedCategory) {
        return data;
      }
    })
    .slice(0, 8);
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {relatedProduct?.map((product) => {
        return <ProductCard key={product.id} categoryItem={product} />;
      })}
    </ul>
  );
};

export default RelatedProductList;
