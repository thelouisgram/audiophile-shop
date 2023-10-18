/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateThankYou } from "../../store/storeSlice";
import OrderedItems from "../ThankYou/OrderedItems";
import SingleItem from "../ThankYou/SingleItem";
import MultipleItems from "../ThankYou/MultipleItems";

const ThankYou = () => {
  const dispatch = useDispatch();
  const { thankYou, completeOrder } = useSelector((state) => state.app);
  const [fullItems, setFullItems] = useState(false);

  if (!thankYou) {
    return null;
  }

  const currentOrder = completeOrder[completeOrder.length - 1];
  const currentItems = currentOrder.cartItems;

  const handleToggleItems = () => {
    setFullItems(!fullItems);
  };

  const renderedItems = fullItems ? currentItems : [currentItems[0]];

  const items = renderedItems.map((item, index) => (
    <div key={index}>
      <OrderedItems item={item} />
    </div>
  ));

  return (
    <div className="w-full absolute h-full min-h-[700px] z-[201] bg-blackII">
      <div className="flex justify-center items-center w-full h-full px-4 xs:px-6 md:px-0">
        <div className="bg-white rounded-[10px] w-full md:w-[550px] p-6 xs:p-8 md:p-12 flex gap-6 xs:gap-8 flex-col">
          <img
            src="/images/shared/desktop/icon-check-mark.svg"
            className="w-[48px] md:w-[72px]"
            alt="Check Mark"
          />
          <h1 className="text-[20px] xs:text-[28px] md:text-[32px] text-black font-bold leading-[1.1em]">
            THANK YOU <br className='flex ss:hidden md:flex' /> FOR YOUR ORDER
          </h1>
          <p className="text-elements">
            You will receive an email confirmation shortly.
          </p>
          <div className="w-full flex flex-col ss:flex-row h-auto rounded-[5px] overflow-hidden mb-4">
            {!fullItems ? (
              <SingleItem
                items={items}
                currentItems={currentItems}
                handleToggleItems={handleToggleItems}
              />
            ) : (
              <MultipleItems
                items={items}
                handleToggleItems={handleToggleItems}
              />
            )}
            <div className="bg-black px-4 xs:px-6 ss:w-1/2 h-[100px] xs:h-[125px] ss:h-auto md:h-[125px] flex flex-col gap-3 justify-center font-bold">
              <h3 className="text-elements font-medium">GRAND TOTAL</h3>
              <h3 className="text-white font-bold">
                $ {currentOrder.grandTotal.toLocaleString()}
              </h3>
            </div>
          </div>
          <Link to="/">
            <button
              onClick={() => dispatch(updateThankYou(false))}
              className="bg-orange hover:bg-orangeAccent text-[14px] tracking-[0.1em] text-white py-3 font-bold w-full flex justify-center cursor-pointer"
            >
              BACK TO HOME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
