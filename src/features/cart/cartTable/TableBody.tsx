import { Link } from "react-router-dom";

const TableBody = () => {
  return (
    <tbody className="w-full">
      <tr className="text-left">
        <td>
          <button>X</button>
        </td>
        <td className="">
          <Link to="">
            <img
              src="https://vitamini.ge/storage/products/8435/h.webp"
              alt=""
              className="max-w-[80px] min-w-[80px]"
            />
          </Link>
        </td>
        <td className="">Ronnie Coleman - Creatine XS</td>
        <td className="">
          <p>
            78.00₾ <br /> 55.00₾
          </p>
        </td>
        <td className="">2</td>
        <td className="">110₾</td>
      </tr>
    </tbody>
  );
};

export default TableBody;
