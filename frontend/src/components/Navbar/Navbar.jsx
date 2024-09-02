import "./Navbar.css";
import React from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.svg"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/main">
          <img src={logo} alt="Logo"/>
      </Link>
      <label class="hamburger">
        <input type="checkbox" />
        <svg viewBox="0 0 32 32">
          <path
            class="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path class="line" d="M7 16 27 16"></path>
        </svg>
      </label>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
        <div className="user">
           <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
