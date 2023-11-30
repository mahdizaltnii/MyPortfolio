import React from "react";

const Footer = ({darkMode}) => {
  return (
    <div className={darkMode ? "dark" : ""}> 

    <div className="py-4 text-center bg-primary text-white ">
      {" "}
      &copy; 2023 Mahdi all right reserved
    </div>
    </div>
  );
};

export default Footer;
