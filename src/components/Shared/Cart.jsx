/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCart,
  updateCartItemsNumber,
  updateCartTotal,
  updateCart
} from "../../store/storeSlice";
import CartItems from "../Cart/CartItems";
import EmptyCart from "../Cart/EmptyCart";
import ActiveCart from "../Cart/ActiveCart";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";

const Cart = () => {
  const { cart, cartArray, cartTotal, cartItemsNumber, notifMessage } =
    useSelector((state) => state.app);
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
    toast.error('Cart is empty')
    dispatch(toggleCart(false))
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
      <div key={index}>
        <CartItems
          minusCartItem={minusCartItem}
          addCartItem={addCartItem}
          item={item}
        />
      </div>
    );
  });

  return (
    <div>
      <div className="md:w-[1100px] w-full  relative mx-auto h-full ">
        <AnimatePresence>
          {cart && (
            <motion.div
              initial={{ x: "100%", opacity:0 }}
              animate={{ x: 0, opacity: 1}}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              ref={dropdownRef}
              className={`h-auto w-full flex absolute px-4 xs:px-6 md:px-0 top-[94px] md:justify-end right-0 z-[13]`}
            >
              {cartArray.length < 1 && <EmptyCart />}
              {cartArray.length > 0 && (
                <ActiveCart
                  cartItems={cartItems}
                  cartItemsNumber={cartItemsNumber}
                  cartTotal={cartTotal}
                  removeAll={removeAll}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {cart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            className={` w-full h-[100vh] fixed bg-blackII z-[11]`}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
