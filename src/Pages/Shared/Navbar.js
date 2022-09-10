import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logoipsum-214.svg";
const Navbar = () => {
  const menuItem = (
    <>
      <li>
        <NavLink className="mr-5" to="/home">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="mr-5" to="/contact">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink className="mr-5" to="/about">
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  shadow-xl rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" srcset="" />
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItem}</ul>
        </div>
        <NavLink to="/" className="btn btn-accent rounded-full lg:px-10">
          Get in Touch
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
