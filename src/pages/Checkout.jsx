import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/storeSlice";
import CheckOutComponent from "../components/Checkout/CheckOutComponent";

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

  const cartItems = cartArray.map((item) => {
    return (
      <div key={item.id} className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={item.cartImage}
            className="w-[64px] h-auto rounded-[8px] mr-3"
          />
          <div className="flex flex-col">
            <h3 className="font-bold text-black text-[15px]">
              {item.shortName}
            </h3>
            <h4 className="text-elements text-[14px]">
              $ {item.price.toLocaleString()}
            </h4>
          </div>
        </div>
        <div className="text-elements font-medium">x{item.number}</div>
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
            <CheckOutComponent cartItems={cartItems}/>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
