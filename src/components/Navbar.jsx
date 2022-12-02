import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="z-20"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        margin: "auto",
        width: "100%",
        borderBottom: "0.5px solid hsl(0, 0%, 88%)",
      }}
    >
      <div className="flex items-center justify-between h-14 px-4 bg-white">
        <div>
          <h1 className="cursor-pointer	hover:scale-110 ease-in duration-300 text-[#f51767]">
            <Link to="/">BREATHE.</Link>
          </h1>
        </div>

        <ul className="flex items-center sticky">
          <li className="cursor-pointer	hover:scale-110 ease-in duration-300">
            <NavLink activeClassName="activeGeorgia" exact={true} to="/">
              HOME
            </NavLink>
          </li>
          <li className="cursor-pointer	hover:scale-110 ease-in duration-300">
            <NavLink activeClassName="activeGeorgia" exact={true} to="/georgia">
              GEORGIA
            </NavLink>
          </li>
          <li className="cursor-pointer	hover:scale-110 ease-in duration-300">
            <NavLink
              activeClassName="activeNavbarButton"
              exact={true}
              to="/trips"
            >
              TRIPS
            </NavLink>
          </li>
          <li className="cursor-pointer	hover:scale-110 ease-in duration-300">
            <NavLink
              activeClassName="activeNavbarButton"
              exact={true}
              to="/hotels"
            >
              HOTELS
            </NavLink>
          </li>
          <li className="cursor-pointer	hover:scale-110 ease-in duration-300">
            <NavLink
              activeClassName="activeNavbarButton"
              exact={true}
              to="/cars"
            >
              CARS
            </NavLink>
          </li>
          {/* <li className="cursor-pointer	hover:scale-110 ease-in duration-300">
          <NavLink
            activeClassName="activeNavbarButton"
            exact={true}
            to="/match"
          >
            MATCH
          </NavLink>
        </li> */}

          {/* This is not main branch */}
          <button className="cart-btn ml-2">
            <NavLink activeClassName="cart-btnActive" exact={true} to="/match">
              MATCH
            </NavLink>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
