type CheckStockTypes = {
  stock: boolean;
};

const CheckStock = ({ stock }: CheckStockTypes) => {
  if (stock) {
    return <p className="text-primaryGreen mt-5 font-bold">მარაგშია</p>;
  } else {
    return <p className="text-red-900 mt-5 font-bold">არ არის მარაგში</p>;
  }
};

export default CheckStock;
