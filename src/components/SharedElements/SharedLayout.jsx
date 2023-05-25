import { Outlet } from "react-router-dom"
import Navbar from "../Shared/Navbar"
import Footer from "../Shared/Footer"
import React from "react"
import Cart from '../Shared/Cart'
import ThankYou from "../Shared/ThankYou"
import { useSelector } from "react-redux"
import Notif from "../Shared/Notif"

const SharedLayout = () => {
  const { cart, thankYou } = useSelector((state) => state.app);
  const layoutClasses = cart || thankYou ? 'max-h-[100vh] overflow-hidden' : '';

  return (
    <div className={`bg-whitishGrey font-Manrope ${layoutClasses}`}>
      <Notif />
      <Cart />
      <ThankYou />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};


export default SharedLayout
