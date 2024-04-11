import { RotatingSquare } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <RotatingSquare
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="rotating-square-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Spinner;
