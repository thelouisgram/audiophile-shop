import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/storeSlice";
import CheckOutComponent from "../components/Checkout/CheckOutComponent";
import CheckOutItems from "../components/Checkout/CheckOutItems";

const Checkout = () => {
  const dispatch = useDispatch();
  const { cartArray } = useSelector(
    (state) => state.app
  );
  useEffect(() => {
    dispatch(toggleCart(false));
  }, []);

  const goBack = () => {
    window.history.back();
  };

  const cartItems = cartArray.map((item, index) => {
    return (
      <div key={index}>
        <CheckOutItems item={item}/>
      </div>
    );
  });

  return (
    <div>
      <section className="pt-20 w-[1100px] mx-auto">
        {/* Go Back Button */}
        <div
          className="text-elements mb-8 cursor-pointer hover:underline w-[100px]"
          onClick={goBack}
        >
          Go Back
        </div>
        <div className="flex gap-12 w-full mb-48">
            <CheckOutComponent items={cartItems}/>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
