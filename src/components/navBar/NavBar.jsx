import { History } from "lucide-react";
import { ChartLine } from "lucide-react";
import { House } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";
import logo from "/logo.png";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-base-100 shadow-sm md:px-[2%]">
        <div className="flex-1">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
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
      </div>
    </div>
  );
};

export default NavBar;
