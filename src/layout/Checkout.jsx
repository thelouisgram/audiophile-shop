// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/storeSlice";
import CheckOutComponent from "../pages/Checkout/CheckOutComponent";
import CheckOutItems from "../pages/Checkout/CheckOutItems";
import { handlePageRender, goBack } from "../Utils/Shared";

const Checkout = () => {
  const dispatch = useDispatch();
  // Destructuring global state
  const { cartArray } = useSelector((state) => state.app);

  // Turn cart off on render
  useEffect(() => {
    dispatch(toggleCart(false));
    handlePageRender('- Checkout')
  }, [dispatch]);

  // Map through cartArray and render cart items
  const cartItems = cartArray.map((item, index) => {
    return (
      <div key={index}>
        <CheckOutItems item={item} />
      </div>
    );
  });

  return (
    // Parent container
    <div>
      <section className="pt-6 md:pt-20 px-4 xs:px-6 md:px-0 w-full md:w-[1100px] mx-auto">
        {/* Go Back Button */}
        <div
          className="text-elements mb-8 cursor-pointer hover:underline w-[100px]"
          onClick={goBack}
        >
          Go Back
        </div>
        {/*  CheckOutComponent */}
        <div className="flex gap-12 w-full mb-24 md:mb-48">
          <CheckOutComponent items={cartItems} />
        </div>
      </section>
    </div>
  );
};

export default Checkout;
