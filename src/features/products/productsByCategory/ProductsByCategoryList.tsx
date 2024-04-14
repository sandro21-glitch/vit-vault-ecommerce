import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import ProductCard from "../../../ui/ProductCard";

type ProductsByCategoryList = {
  filterPrice: number;
};

const ProductsByCategoryList = ({ filterPrice }: ProductsByCategoryList) => {
  const { productData } = useAppSelector((store) => store.product);
  const { category } = useParams();

  const selectedCategory = productData?.filter((product) => {
    return (
      product.price <= filterPrice &&
      product.category === category?.replace(/-/g, " ")
    );
  });

  if (selectedCategory && selectedCategory?.length < 1) {
    return <p className="text-[1.5rem] h-full flex items-center justify-center">პროდუქტები ვერ მოიძებნა</p>;
  }

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
      {selectedCategory?.map((categoryItem) => {
        return (
          <ProductCard key={categoryItem.id} categoryItem={categoryItem} />
        );
      })}
    </ul>
  );
};

export default ProductsByCategoryList;
