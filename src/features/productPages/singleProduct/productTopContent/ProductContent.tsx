import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/hooks";
import ProductImages from "./leftSide/ProductImages";

const ProductContent = () => {
  const { state } = useLocation();

  const { productData } = useAppSelector((store) => store.product);
  const singleProdData = productData?.find(
    (product) => product.id === state.id
  );
  if (!singleProdData) return null;
  return (
    <article className="section-center section-x">
      <div className="grid grid-cols-2 py-10">
        <ProductImages
          images={singleProdData.images || []}
          name={singleProdData.name}
        />
        <div className="flex-1 ">test</div>
      </div>
    </article>
  );
};

export default ProductContent;
