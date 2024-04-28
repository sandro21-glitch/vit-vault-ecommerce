import { Link } from "react-router-dom";
import { formatPath } from "../../../../utils/formatPath";

type ProductImageTypes = {
  name: string;
  id: string;
  image: string;
};

const ProductImage = ({ id, image, name }: ProductImageTypes) => {
  return (
    <td>
      <Link to={`/product/${formatPath(name)}`} state={{ id }}>
        <img
          src={image}
          alt={name}
          className="max-w-[80px] min-w-[80px] max-h-[80px] object-contain"
        />
      </Link>
    </td>
  );
};

export default ProductImage;
