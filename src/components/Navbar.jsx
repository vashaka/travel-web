import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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
      <div className="flex items-center justify-between h-16 px-4 bg-white">
        <div>
          <h1 className="cursor-pointer	hover:scale-110 ease-in duration-300 text-[#f51767]">
            <Link to="slider" smooth={true} duration={400}>
              BREATHE.
            </Link>
          </h1>
        </div>

        <ul className="flex items-center sticky">
          {/* <li className="cursor-pointer	hover:scale-110 ease-in duration-300">
            <Link to="slider" smooth={true} duration={400}>
              HOME
            </Link>
          </li> */}
          <li className="cursor-pointer	hover:scale-110 ease-in duration-300">
            <Link to="Map" smooth={true} duration={400}>
              GEORGIA
            </Link>
          </li>
          <li className="cursor-pointer	hover:scale-110 ease-in duration-300">
            <Link to="Landmarks" smooth={true} duration={400}>
              LANDMARKS
            </Link>
          </li>
          <li className="cursor-pointer	hover:scale-110 ease-in duration-300">
            <Link to="hotels" smooth={true} duration={400}>
              HOTELS
            </Link>
          </li>
          <li className="cursor-pointer	hover:scale-110 ease-in duration-300">
            <Link to="slider" smooth={true} duration={400}>
              CARS
            </Link>
          </li>
          <button className="cart-btn ml-2">
            <Link to="slider" smooth={true} duration={400}>
              MATCH
            </Link>
          </button>
        </ul>

        <div
          className="progressMainStyle absolute bottom-0 left-0"
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
