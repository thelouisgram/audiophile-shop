import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../store/storeSlice";

const Navbar = () => {
  // Destructuring Global state
  const { cart, cartItemsNumber } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  // Function to toggle cart visibility
  const handleCartToggle = () => {
      dispatch(toggleCart(cart ? false : true))
  }

  return (
    <div className="bg-black w-full h-[84px] ">
      <header
        className="md:w-[1100px] text-white 
        h-full md:mx-auto flex items-center justify-between p-4 md:p-0"
      >
        <img src='/images/shared/tablet/icon-hamburger.svg' className="flex md:hidden"/>
        <Link to="/">
          <div className="flex items-center">
            <img src="/images/shared/desktop/logo.svg" />
          </div>
        </Link>
        <div className="hidden md:flex gap-8 text-white tracking-[0.15rem] font-bold text-[13px] ">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return { color: isActive ? "hsl(22,65%,57%)" : "" };
            }}
            className="hover:text-orange cursor-pointer"
          >
            HOME
          </NavLink>
          <NavLink
            to="/headphones"
            style={({ isActive }) => {
              return { color: isActive ? "hsl(22,65%,57%)" : "" };
            }}
            className="hover:text-orange cursor-pointer"
          >
            HEADPHONES
          </NavLink>
          <NavLink
            to="/speakers"
            style={({ isActive }) => {
              return { color: isActive ? "hsl(22,65%,57%)" : "" };
            }}
            className="hover:text-orange cursor-pointer"
          >
            SPEAKERS
          </NavLink>
          <NavLink
            to="/earphones"
            style={({ isActive }) => {
              return { color: isActive ? "hsl(22,65%,57%)" : "" };
            }}
            className="hover:text-orange cursor-pointer"
          >
            EARPHONES
          </NavLink>
        </div>
        <div onClick={handleCartToggle} className="cursor-pointer relative h-full w-[40px] flex items-center">
          {cartItemsNumber > 0 && <div className="text-white bg-orange  text-[12px] w-[22px] h-[22px] rounded-full absolute top-[20px] justify-center
            flex items-center right-[4px]">{cartItemsNumber}</div> }
          <img src="/images/shared/desktop/icon-cart.svg" />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
