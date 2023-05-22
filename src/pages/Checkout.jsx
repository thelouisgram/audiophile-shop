import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, updateVat, updateGrandTotal } from "../store/storeSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const { shipping, cartTotal, vat, cartArray, grandTotal } = useSelector(
    (state) => state.app
  );
  useEffect(() => {
    dispatch(toggleCart(false));
  }, []);

  const goBack = () => {
    window.history.back();
  };

  useEffect(() => {
    dispatch(updateGrandTotal(cartTotal + shipping + vat));
    dispatch(updateVat(cartTotal * 0.19));
  }, [cartArray, cartTotal, dispatch, shipping, vat]);

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
      <section className="pt-20 h-auto w-[1100px] mx-auto">
        {/* Go Back Button */}
        <div
          className="text-elements mb-8 cursor-pointer hover:underline w-[100px]"
          onClick={goBack}
        >
          Go Back
        </div>
        <div className="flex gap-10 w-full mb-48 h-auto">
          <div className="w-2/3 bg-white rounded-[5px] h-auto"></div>

          <div className="w-1/3 bg-white rounded-[5px] h-auto p-8">
            <h3 className="text-[18px] tracking-[0.1em] font-bold text-black mb-10">
              SUMMARY
            </h3>
            <div className="flex flex-col gap-6 w-full mb-10">{cartItems}</div>
            <div className="mb-10">
              <div className="flex justify-between items-center w-full">
                <h3 className="text-elements text-[15px]">TOTAL</h3>
                <h3 className="text-black font-bold text-[18px] tracking-[0.06em]">
                  $ {cartTotal.toLocaleString()}
                </h3>
              </div>
              <div className="flex justify-between items-center w-full">
                <h3 className="text-elements text-[15px]">SHIPPING</h3>
                <h3 className="text-black font-bold text-[18px] tracking-[0.06em]">
                  $ {shipping}
                </h3>
              </div>
              <div className="flex justify-between items-center w-full">
                <h3 className="text-elements text-[15px]">VAT (INCLUDED)</h3>
                <h3 className="text-black font-bold text-[18px] tracking-[0.06em]">
                  $ {vat.toLocaleString()}
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center w-full mb-10">
              <h3 className="text-elements text-[15px]">GRAND TOTAL</h3>
              <h3 className="text-orange font-bold text-[18px] tracking-[0.06em]">
                $ {grandTotal.toLocaleString()}
              </h3>
            </div>
            <button className="bg-orange w-full h-[50px] text-[13px] tracking-[0.2em] items-center text-white font-bold">
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
