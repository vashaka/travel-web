import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 px-4">
      <div>
        <h1 className="cursor-pointer	hover:scale-110 ease-in duration-300">BREATHE.</h1>
      </div>

      <ul className="flex">
        <li className="cursor-pointer	hover:scale-110 ease-in duration-300 "><NavLink activeClassName="activeGeorgia" to="/georgia">GEORGIA</NavLink></li>
        <li className="cursor-pointer	hover:scale-110 ease-in duration-300"><NavLink activeClassName="activeNavbarButton" to="/trips">TRIPS</NavLink></li>
        <li className="cursor-pointer	hover:scale-110 ease-in duration-300"><NavLink activeClassName="activeNavbarButton" to="/hotles">HOTELS</NavLink></li>
        <li className="cursor-pointer	hover:scale-110 ease-in duration-300"><NavLink activeClassName="activeNavbarButton" to="/cars">CARS</NavLink></li>
        <li className="cursor-pointer	hover:scale-110 ease-in duration-300"><NavLink activeClassName="activeNavbarButton" to="/match">MATCH</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
