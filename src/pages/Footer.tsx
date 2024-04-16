const Footer = () => {
  return (
    <footer className="border border-t py-5">
      <div className="section-center section-x flex justify-between items-center">
        <p>
          © 2024{" "}
          <span className="text-primaryGreen cursor-pointer">VitVault</span>.
          All rights reserved
        </p>
        <p>
          <a
            href="https://www.top.ge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://www.top.ge/source/img/logo.gif" alt="top link" />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
