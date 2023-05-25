import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateThankYou } from '../../store/storeSlice';

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
    <div key={index} className="flex w-full justify-between items-center">
      <div className="flex gap-1 items-center">
        <img src={item.cartImage} className="w-[64px] h-auto rounded-[8px] mr-2" alt="Product" />
        <div className="flex flex-col">
          <h3 className="font-bold text-black text-[15px]">{item.shortName}</h3>
          <h4 className="text-elements text-[14px]">$ {item.price.toLocaleString()}</h4>
        </div>
      </div>
      <div className="text-elements font-medium">x{item.number}</div>
    </div>
  ));

  return (
    <div className="w-full fixed h-[100vh] z-[201] bg-blackII">
      <div className="flex justify-center items-center w-full h-full ">
        <div className="bg-white rounded-[10px] w-[550px] p-12 flex gap-8 flex-col">
          <img src="/images/shared/desktop/icon-check-mark.svg" className="w-[72px]" alt="Check Mark" />
          <h1 className="text-[32px] text-black font-bold leading-[1.1em]">THANK YOU <br /> FOR YOUR ORDER</h1>
          <p className="text-elements">You will receive an email confirmation shortly.</p>
          <div className="w-full flex h-auto rounded-[5px] overflow-hidden mb-4">
            {!fullItems ? (
              <div className="bg-grey px-4 w-1/2 flex flex-col gap-2 justify-center max-h-[125px]">
                {items}
                {currentItems.length > 1 && (
                  <p
                    onClick={handleToggleItems}
                    className="hover:underline text-elements text-center text-[14px] cursor-pointer"
                  >
                    and {currentItems.length - 1} other item{currentItems.length > 2 ? 's' : ''}
                  </p>
                )}
              </div>
            ) : (
              <div className="bg-grey px-4 w-1/2 flex flex-col gap-3 max-h-[125px] overflow-auto scroll-container">
                {items}
                <p
                  onClick={handleToggleItems}
                  className="hover:underline text-elements border-[1px] py-[2px] px-1 border-elements text-center text-[14px] mb-4 cursor-pointer"
                >
                  see less
                </p>
              </div>
            )}
            <div className="bg-black px-6 w-1/2 h-[125px] flex flex-col gap-3 justify-center font-bold">
              <h3 className="text-elements font-medium">GRAND TOTAL</h3>
              <h3 className="text-white font-bold">$ {currentOrder.grandTotal.toLocaleString()}</h3>
            </div>
          </div>
          <Link to="/">
            <button
              onClick={() => dispatch(updateThankYou(false))}
              className="bg-orange text-[14px] tracking-[0.1em] text-white py-3 font-bold w-full flex justify-center cursor-pointer"
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
