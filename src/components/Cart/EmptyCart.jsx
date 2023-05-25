import React from "react";

const EmptyCart = () => {
  return (
    <div className="flex flex-col gap-3 justify-center w-[300px] h-[125px] items-center">
      <h3 className="font-bold text-[16px] text-elements">
        {" "}
        Your Cart is Empty{" "}
      </h3>
      <img src="/images/cart/empty-cart.png" className="w-[72px] h-auto" />
    </div>
  );
};

export default EmptyCart;
