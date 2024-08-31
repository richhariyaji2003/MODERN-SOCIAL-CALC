import React from "react";
import "./Header.css";
import download from "./assets/download.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={download} />
      </div>
    </header>
  );
};

export default Header;
