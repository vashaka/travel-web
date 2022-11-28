import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 px-4">
      <div>
        <h1 className="cursor-pointer	hover:scale-110 ease-in duration-300">BREATHE.</h1>
      </div>

      <ul className="flex">
        <li className="cursor-pointer	hover:scale-110 ease-in duration-300 hidden md:flex">GEORGIA</li>
        <li className="cursor-pointer	hover:scale-110 ease-in duration-300">HOTELS</li>
        <li className="cursor-pointer	hover:scale-110 ease-in duration-300">CARS</li>
        <li className="cursor-pointer	hover:scale-110 ease-in duration-300">MATCH</li>
      </ul>
    </div>
  );
};

export default Navbar;
