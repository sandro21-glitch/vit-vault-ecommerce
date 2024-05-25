import { Link } from "react-router-dom";
import { formatPath } from "../../../../../utils/formatPath";

type ProductNameTypes = {
  id: string;
  name: string;
};
const ProductName = ({ id, name }: ProductNameTypes) => {
  return (
    <td className="cursor-pointer">
      <Link
        to={`/product/${formatPath(name)}`}
        state={{ id }}
        className="hover:text-primaryGray transition-colors w-full ease-in duration-150"
      >
        {name}
      </Link>
    </td>
  );
};

export default ProductName;
