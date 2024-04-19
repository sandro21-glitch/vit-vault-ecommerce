import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/hooks";
import ProductImages from "./leftSide/ProductImages";
import ProductSummary from "./rightSide/ProductSummary";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelectedProductId } from "../../../slices/productsSlice";
import ProductDetails from "../productDetails/ProductDetails";

const ProductContent = () => {
  const navigate = useNavigate();
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
    } else {
      navigate("/");
    }
  }, [dispatch, location.state]);

  if (!singleProdData) return null;
  return (
    <article
      className="section-center section-x"
      style={{ marginBottom: "40px", marginTop: "50px" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 pb-10 gap-5">
        <ProductImages
          images={singleProdData.images || []}
          name={singleProdData.name}
        />
        <ProductSummary singleProdData={singleProdData} />
      </div>
      <ProductDetails singleProdData={singleProdData} />
    </article>
  );
};

export default ProductContent;
