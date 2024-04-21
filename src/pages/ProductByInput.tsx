import { useParams } from "react-router-dom";

const ProductByInput = () => {
  const { input } = useParams();
  return <div>{input}</div>;
};

export default ProductByInput;
