import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCart,
  updateCartItemsNumber,
  updateCartTotal,
  updateCart,
  updateNotifMessage
} from "../../store/storeSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, cartArray, cartTotal, cartItemsNumber, notifMessage } = useSelector(
    (state) => state.app
  );
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(toggleCart(false));
      }
    };

    // add event listener for clicks outside of dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const minusCartItem = (id) => {
    const updatedCartArray = cartArray.map((item) => {
      if (item.id === id) {
        const newNumber = item.number - 1;
        const newTotal = newNumber * item.price;
        return { ...item, number: newNumber, total: newTotal };
      }
      return item;
    });
    dispatch(updateCart(updatedCartArray));
  };

  const addCartItem = (id) => {
    const updatedCartArray = cartArray.map((item) => {
      if (item.id === id) {
        const newNumber = item.number + 1;
        const newTotal = newNumber * item.price;
        return { ...item, number: newNumber, total: newTotal };
      }
      return item;
    });
    dispatch(updateCart(updatedCartArray));
  };

  const removeAll = () => {
    dispatch(updateCart([]));
    dispatch(updateNotifMessage([...notifMessage, "Cart is empty"]))
  };

  useEffect(() => {
    const totalItems = cartArray.reduce(
      (totalNumber, item) => totalNumber + item.number,
      0
    );
    const totalCost = cartArray.reduce((total, item) => total + item.total, 0);
    dispatch(updateCartItemsNumber(totalItems));
    dispatch(updateCartTotal(totalCost));
  }, [cartArray, dispatch]);

  useEffect(() => {
    if (cartArray.some((item) => item.number < 1)) {
      const filteredCartArray = cartArray.filter((item) => item.number >= 1);
      dispatch(updateCart(filteredCartArray));
    }
  }, [cartArray, dispatch]);

  const cartItems = cartArray.map((item, index) => {
    return (
      <div key={index} className="flex items-center pr-2">
        <div>
          <img
            src={item.cartImage}
            className="w-[64px] h-auto rounded-[8px] mr-2"
          />
        </div>
        <div className="flex flex-col mr-16 w-20">
          <h3 className="font-bold text-black text-[15px]">{item.shortName}</h3>
          <h4 className="text-elements text-[14px]">$ {item.price.toLocaleString()}</h4>
        </div>
        <div className="bg-grey w-[100px] h-[36px] justify-center items-center flex text-[15px] font-bold gap-3 text-black overflow-hidden">
          <button
            onClick={() => minusCartItem(item.id)}
            className="text-elements hover:bg-[#D3D3D3] hover:text-orange px-3 py-3"
          >
            -
          </button>
          <div className="text-[13px] flex items-center justify-center w-[30px]">
            {item.number}
          </div>
          <button
            onClick={() => addCartItem(item.id)}
            className="text-elements hover:bg-[#D3D3D3] hover:text-orange px-3 py-3"
          >
            +
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      {cart && (
        <div className="fixed h-[100vh] z-[100] w-full bg-blackII">
          <div className="w-[1100px] relative mx-auto h-full ">
            <div
              ref={dropdownRef}
              className={`h-auto w-auto p-8 flex absolute bg-white top-[94px] rounded-[5px] right-0 z-[150]`}
            >
              {cartArray.length < 1 && (
                <div className="flex flex-col gap-3 justify-center w-[300px] h-[125px] items-center">
                  <h3 className="font-bold text-[16px] text-elements">
                    {" "}
                    Your Cart is Empty{" "}
                  </h3>
                  <img
                    src="/images/cart/empty-cart.png"
                    className="w-[72px] h-auto"
                  />
                </div>
              )}
              {cartArray.length > 0 && (
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="font-bold text-black text-[17px]">
                      CART ( {cartItemsNumber} )
                    </h3>
                    <div
                      onClick={removeAll}
                      className="text-elements underline text-[15px] cursor-pointer hover:text-orange"
                    >
                      Remove All
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 mb-8 h-auto max-h-[290px] overflow-auto scroll-container">
                    {cartItems}
                  </div>
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-elements">TOTAL</h3>
                    <h3 className="tracking-[0.05em] text-black font-bold ">
                      $ {cartTotal.toLocaleString()}
                    </h3>
                  </div>
                  <Link to="/checkout">
                    <button className="bg-orange w-full h-[50px] text-[13px] tracking-[0.2em] items-center hover:bg-orangeAccent
                    cursor-pointer text-white font-bold">
                      CHECKOUT
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
