import React from "react";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container- mx-auto">
        <div className="flex justify-between items-center">
          <a href=".">
            <img className="w-auto h-32" src={Logo} alt="logo" />
          </a>
          <div className="pr-10">
             <button className="btn btn-sm">
            Trabaja Conmigo
          </button>
          </div>
         
        </div>
      </div>
    </header>
  );
};

export default Header;
