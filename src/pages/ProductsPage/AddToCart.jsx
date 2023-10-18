// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const AddToCart = ({ addToCart }) => {
  return (
    <button
      onClick={addToCart}
      className="bg-orange hover:bg-orangeAccent text-[12px] xs:text-[14px] px-4 tracking-[0.1em] text-white py-2 xs:py-3 font-bold 
                xs:w-[150px] flex items-center justify-center cursor-pointer"
    >
      ADD TO CART
    </button>
  );
};

export default AddToCart;
