import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/hooks";
import ProductImages from "./leftSide/ProductImages";
import ProductSummary from "./rightSide/ProductSummary";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelectedProductId } from "../../../slices/productsSlice";

const ProductContent = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const location = useLocation();
  const { productData, selectedProductId } = useAppSelector(
    (store) => store.product
  );
  const singleProdData = productData?.find(
    (product) => product.id === selectedProductId
  );

  useEffect(() => {
    if (state && state.id) {
      dispatch(setSelectedProductId(location.state.id));
    }
  }, [dispatch, location.state]);

  if (!singleProdData) return null;
  return (
    <article className="section-center section-x">
      <div className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-7">
        <ProductImages
          images={singleProdData.images || []}
          name={singleProdData.name}
        />
        <ProductSummary singleProdData={singleProdData} />
      </div>
    </article>
  );
};

export default ProductContent;
