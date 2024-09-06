import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa6";

const Navigations = () => {
  return (
    <nav className="zapchain__navigation">
      <NavLink to="/" exact activeClassName="active">
        <span>
          <IoMdHome />
        </span>
        Home
      </NavLink>
      <NavLink to="/task" activeClassName="active">
        <span>
          <FaTasks />
        </span>
        Task
      </NavLink>
      <NavLink to="/frends" activeClassName="active">
        <span>
          <FaPeopleGroup />
        </span>
        Frens
      </NavLink>
      <NavLink to="/wallet" activeClassName="active">
        <span>
          <FaWallet />
        </span>
        Wallet
      </NavLink>
    </nav>
  );
};

export default Navigations;
