import { useAppSelector } from "../../../../hooks/hooks";

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
  console.log(relatedProduct);
  return <div>RelatedProductList</div>;
};

export default RelatedProductList;
