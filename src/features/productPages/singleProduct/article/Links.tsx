import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Links = () => {
  return (
    <div className="flex gap-1">
      <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF
          size={15}
          className="text-primaryGray hover:text-black transition-colors ease-in duration-150"
        />
      </a>
      <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn
          size={15}
          className="text-primaryGray hover:text-black transition-colors ease-in duration-150"
        />
      </a>
    </div>
  );
};

export default Links;
