import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const bumpAnimation = useSelector((state) => state.bumpAnimation);
  const itemsInCart = useSelector((state) => state.itemsInCart);

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
        </ul>
        <Link to="cart" smooth={true} duration={400}>
          {bumpAnimation ? (
            <button
              // className="cart-btn ml-2 nav-cart-btn"
              className="cart-btn-bump hover:scale-105 ease-in duration-200"
            >
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </span>
              <span>Cart</span>
              <span className="badge">{itemsInCart}</span>
            </button>
          ) : (
            <button
              // className="cart-btn ml-2 nav-cart-btn"
              className="cart-btn hover:scale-105 ease-in duration-200"
            >
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </span>
              <span>Cart</span>
              <span className="badge">{itemsInCart}</span>
            </button>
          )}
        </Link>

        <div
          className="progressMainStyle absolute bottom-0 left-0"
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
