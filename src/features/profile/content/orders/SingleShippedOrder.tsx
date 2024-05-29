import { ShippingData } from "../../../../types/orderTypes";
import { formatToGeorgianLari } from "../../../../utils/formatPrice";

type SingleShipingTypes = {
  order: ShippingData;
};

const SingleShippedOrder = ({
  order: { orderId, shippingDate, newProduct },
}: SingleShipingTypes) => {
  const orderSum = newProduct.reduce((acc, cur) => {
    const discountedPrice = cur.price - (cur.price * cur.discount) / 100;
    const productTotal = cur.amount * discountedPrice;
    return acc + productTotal;
  }, 0);

  return (
    <ul className="grid grid-cols-5 font-poppins mb-5 py-5 border-b border-dotted">
      <li className="font-semibold cursor-pointer ">#{orderId.slice(0, 7)}</li>
      <li className="text-wrap whitespace-break-spaces max-w-[50%] text-primaryGray font-medium">
        {shippingDate}
      </li>
      <li className="max-w-[50%] text-wrap text-primaryGray font-medium">
        გადახდის მოლოდინში
      </li>
      <li className="text-primaryGray font-medium">
        სულ{" "}
        <span className="font-semibold text-secondaryGreen">
          {formatToGeorgianLari(orderSum)}
        </span>
      </li>
      <li className="flex items-center justify-end">
        <button
          className="bg-secondaryGreen text-white px-4 py-2 font-semibold
         text-[14px] hover:bg-primaryGreen transition-colors ease-in duration-150"
        >
          ნახვა
        </button>
      </li>
    </ul>
  );
};

export default SingleShippedOrder;
