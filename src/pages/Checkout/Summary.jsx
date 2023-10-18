/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateVat, updateGrandTotal } from "../../store/storeSlice";
import PropTypes from "prop-types";

const Summary = ({ items, handleSubmit }) => {
  const dispatch = useDispatch();
  const { shipping, cartTotal, vat, cartArray, grandTotal } = useSelector(
    (state) => state.app
  );

  useEffect(() => {
    dispatch(updateGrandTotal(cartTotal + shipping + vat));
    dispatch(updateVat(cartTotal * 0.19));
  }, [cartArray, cartTotal, dispatch, shipping, vat]);
  return (
    <div className="bg-white rounded-[5px] px-4 py-6 xs:p-6 md:p-8 h-auto">
      <h3 className="text-[18px] tracking-[0.1em] font-bold text-black mb-10">
        SUMMARY
      </h3>
      <div className="flex flex-col gap-6 w-full mb-10">
        {items.length < 1 && (
          <h1 className="text-elements text-center font-bold text-[16px] tracking-[0.06em]">
            No Cart Items
          </h1>
        )}
        {items}
      </div>

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
      <button
        onClick={handleSubmit}
        disabled={cartArray.length < 1}
        className={` ${
          cartArray.length < 1
            ? "cursor-not-allowed bg-orangeAccent"
            : "cursor-pointer"
        } bg-orange hover:bg-orangeAccent w-full h-[50px] text-[13px] tracking-[0.2em] items-center text-white font-bold`}
      >
        CONTINUE & PAY
      </button>
    </div>
  );
};

Summary.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default Summary;
