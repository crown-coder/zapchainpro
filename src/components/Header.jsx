import React from "react";
import { CiSettings } from "react-icons/ci";

const Header = () => {
  return (
    <header className="zapchain__header">
      <div>
        <h2>ZapChain</h2>
        <p>slogan goes here..</p>
      </div>
      <div>
        <button><CiSettings /></button>
      </div>
    </header>
  );
};

export default Header;
