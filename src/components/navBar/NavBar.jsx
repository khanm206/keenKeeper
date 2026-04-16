import { History } from "lucide-react";
import { ChartLine } from "lucide-react";
import { House } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";
import logo from "/logo.png";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-base-100 shadow-sm md:px-[2%] justify-between">
        <div className="w-fit">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="md:flex hidden">
          <ul className="menu menu-horizontal px-1 md:gap-2">
            <li>
              <NavLink to={"/"} className="flex items-center gap-0.5">
                <House size={18} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/timeline"} className="flex items-center gap-0.5">
                <History size={18} />
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink to={"/stats"} className="flex items-center gap-0.5">
                <ChartLine size={18} />
                Stats
              </NavLink>
            </li>
          </ul>
        </div>

        {/* sm */}
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow w-fit"
          >
            <li>
              <NavLink
                to={"/"}
                className="flex items-center gap-0.5 w-fit mx-auto"
              >
                <House size={18} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/timeline"}
                className="flex items-center gap-0.5 w-fit mx-auto"
              >
                <History size={18} />
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/stats"}
                className="flex items-center gap-0.5 w-fit mx-auto"
              >
                <ChartLine size={18} />
                Stats
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
