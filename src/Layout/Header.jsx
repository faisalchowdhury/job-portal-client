import React from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../Hooks/useAuth";

const Header = () => {
  const { user, logoutUser } = useAuth();
  const menu = (
    <>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {menu}
            </ul>
          </div>
          <Link to={"/"} className=" font-bold text-xl">
            Job Portal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {!user ? (
              menu
            ) : (
              <>
                <div className="navbar-end">
                  <button onClick={logoutUser} className="btn">
                    Logout
                  </button>
                  <li>
                    <NavLink to={"/my-application"}>My Application</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/add-jobs"}>Add Jobs</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/my-jobs"}>My Posted Jobs</NavLink>
                  </li>
                </div>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
