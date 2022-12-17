import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(true);
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
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        setHideNavbar(false);
        console.log(lastScrollY);
      } else {
        setHideNavbar(false);
      }
      if (lastScrollY > 720) {
        setHideNavbar(true);
      }
      if (lastScrollY < 50) {
        setHideNavbar(true);
      }
      lastScrollY = window.scrollY;
    });

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="z-20"
      style={{
        display: hideNavbar ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        margin: "auto",
        width: "100%",
        borderBottom: "0.5px solid hsl(0, 0%, 88%)",
      }}
    >
      <div className="flex items-center justify-between h-16 px-4 bg-white opacity-95">
        <div>
          <h1 className="cursor-pointer ease-in duration-300 text-[#f51767] text-3xl">
            <Link to="slider" smooth={true} duration={400}>
              BREATHE.
            </Link>
          </h1>
        </div>

        {/* Hide on Small Screens */}
        <ul className="flex items-center sticky mt-1">
          <li className="cursor-pointer ease-in duration-300">
            <Link to="Plans" smooth={true} duration={400}>
              01. PLANS
            </Link>
          </li>
          <li className="cursor-pointer ease-in duration-300">
            <Link to="Landmarks" smooth={true} duration={400}>
              02. LANDMARKS
            </Link>
          </li>
          <li className="cursor-pointer ease-in duration-300">
            <Link to="hotels" smooth={true} duration={400}>
              03. HOTELS
            </Link>
          </li>
          <li className="cursor-pointer ease-in duration-300">
            <Link to="slider" smooth={true} duration={400}>
              04. CARS
            </Link>
          </li>
        </ul>
        <Link to="cart" smooth={true} duration={400} className="">
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
