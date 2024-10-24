import React from "react";
import { NavLink } from "react-router-dom";
import '../index.css';
const Navbar = () => {
  return (
    <div>
      <nav>
        <li>
          <NavLink to={"/"}><a href="">Home</a></NavLink>
        </li>
        <li>
          <NavLink to={"/about"}><a href="">About</a></NavLink>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
