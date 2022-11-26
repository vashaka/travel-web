import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 px-4">
      <div>
        <h1>BREATHE.</h1>
      </div>

      <ul className="flex">
        <li className="hidden md:flex">GEORGIA</li>
        <li>HOTELS</li>
        <li>CARS</li>
        <li>MATCH</li>
      </ul>
    </div>
  );
};

export default Navbar;
