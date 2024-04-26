import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./addToCartBtn.css";
import { formatPath } from "../utils/formatPath";
type AddToCartBtnTypes = {
  name: string;
  id: string;
};

const AddToCartBtn = ({ name, id }: AddToCartBtnTypes) => {
  return (
    <button className="btn invisible group-hover:visible">
      <Link to={`/product/${formatPath(name)}`} state={{ id }}>
        <span className="btn-text-one">კალათაში დამატება</span>
        <span className="btn-text-two">
          <FiShoppingCart className="text-[18px] text-center w-full font-semibold" />
        </span>
      </Link>
    </button>
  );
};

export default AddToCartBtn;
