import { useAppSelector } from "../../../../hooks/hooks";
import Links from "./Links";

const ArticleDetails = () => {
  const { productData, selectedProductId } = useAppSelector(
    (store) => store.product
  );
  const singleProdData = productData?.find(
    (product) => product.id === selectedProductId
  );

  return (
    <article className="bg-veryLightGray py-[15px] mb-[40px]">
      <div className="section-center section-x">
        <ul className="flex justify-evenly flex-col md:flex-row">
          <li className="text-[14px]">
            <strong>კატეგორია:</strong> {singleProdData?.category}
            {singleProdData?.type && ", "}
            {singleProdData?.type}
          </li>
          <li className="text-[14px]">
            <strong>პროდუქტი:</strong> {singleProdData?.name}
          </li>
          <li className="text-[14px] flex">
            <strong>გაზიარება:</strong> <Links />
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ArticleDetails;
