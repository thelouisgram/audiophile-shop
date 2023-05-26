import React from "react";

const EmptyCart = () => {
  return (
    <div className="flex flex-col gap-3 justify-center rounded-[5px] bg-white w-full md:w-[300px] md:right-0 h-[175px] items-center">
      <h3 className="font-bold text-[16px] text-elements">
        {" "}
        Your Cart is Empty{" "}
      </h3>
      <img src="/images/cart/empty-cart.png" className="w-[72px] h-auto" />
    </div>
  );
};

export default EmptyCart;
