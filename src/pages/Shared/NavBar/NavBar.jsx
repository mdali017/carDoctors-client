import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo.svg";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [bg, setBG] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBG(true) : setBG(false);
    });
  }, []);

  const handleLogOut = () => {
    LogOut()
      .then(() => {
        // localStorage.removeItem("car-access-token");
      })
      .catch((err) => console.log(err));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <button onClick={handleLogOut}>Log Out</button>
          </li>
          <li>
            <Link to="/bookings">My Bookings</Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    // <div className={`${bg ? "bg-gray-600 text-white h-24" : "h-20"}`}>
    <div>
      {/* <div className="navbar bg-base-100 h-28 fixed z-10 max-w-7xl"> */}
      <div
        className={`${
          bg ? "bg-slate-800 h-10 md:h-24 p-5" : "bg-slate-400 h-10 md:h-24"
        } navbar max-w-7xl flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
      >
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className=" text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-warning">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
