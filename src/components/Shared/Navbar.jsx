import React, {useEffect} from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, toggleNav } from "../../store/storeSlice";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  // Destructuring Global state
  const { cart, cartItemsNumber, nav } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  // Function to toggle cart visibility
  const handleCartToggle = () => {
      dispatch(toggleCart(cart ? false : true))
  }

  // Function to handle mobile navBar
  const handleNav = () => {
    dispatch(toggleNav(nav ? false : true))
  }

  const location = useLocation();

  // Listen to location changes and update nav value
  useEffect(() => {
    dispatch(toggleNav(false)); // Set nav to false when navigating to a new page
  }, [dispatch, location]);


  return (
    <div className="bg-black w-full relative h-[84px]">
      <header
        className="md:w-[1100px] z-[10] w-full text-white absolute md:relative
        h-full md:mx-auto flex items-center justify-between px-4 xs:px-6 md:p-0"
      >
        <div onClick={handleNav} className="flex md:hidden">
          {!nav ? <img src='/images/shared/tablet/icon-hamburger.svg' className="flex md:hidden"/> :
            <img src='/images/shared/tablet/icon-close-menu.svg' className="flex md:hidden" />}
        </div>
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
