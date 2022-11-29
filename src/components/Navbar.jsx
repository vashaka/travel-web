import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 px-4">
      <div>
        <h1 className="cursor-pointer	hover:scale-110 ease-in duration-300"><Link to='/'>BREATHE.</Link></h1>
      </div>

      <ul className="flex">
        <li className="cursor-pointer	hover:scale-110 ease-in duration-300"><NavLink activeClassName="activeGeorgia" exact={true} to="/">MAIN</NavLink></li>
        <li className="cursor-pointer	hover:scale-110 ease-in duration-300"><NavLink activeClassName="activeGeorgia" exact={true}  to="/georgia">GEORGIA</NavLink></li>
        <li className="cursor-pointer	hover:scale-110 ease-in duration-300"><NavLink activeClassName="activeNavbarButton" exact={true}  to="/trips">TRIPS</NavLink></li>
        <li className="cursor-pointer	hover:scale-110 ease-in duration-300"><NavLink activeClassName="activeNavbarButton" exact={true}  to="/hotels">HOTELS</NavLink></li>
        <li className="cursor-pointer	hover:scale-110 ease-in duration-300"><NavLink activeClassName="activeNavbarButton" exact={true}  to="/cars">CARS</NavLink></li>
        <li className="cursor-pointer	hover:scale-110 ease-in duration-300"><NavLink activeClassName="activeNavbarButton" exact={true}  to="/match">MATCH</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
