import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
// eslint-disable-next-line no-unused-vars
import React from "react";
import Cart from "../Shared/Cart";
import ThankYou from "../Shared/ThankYou";
import { useSelector } from "react-redux";
import MobileNav from "../Shared/MobileNav";
import { Toaster } from "sonner";

const SharedLayout = () => {
  const { cart, thankYou } = useSelector((state) => state.app);
  const layoutClasses = cart || thankYou ? "max-h-[100vh] overflow-hidden" : "";

  return (
    <div className={`bg-whitishGrey font-Manrope ${layoutClasses}`}>
      <Toaster position="top-left" richColors={true} closeButton={true} visibleToasts={5} />
      <Cart />
      <ThankYou />
      <MobileNav />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
