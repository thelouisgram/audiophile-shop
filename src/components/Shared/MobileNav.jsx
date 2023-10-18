/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import Categories from "./Categories";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleNav } from "../../store/storeSlice";

const MobileNav = () => {
  const { nav } = useSelector((state) => state.app);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(toggleNav(false));
      }
    };

    // add event listener for clicks outside of dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={`relative h-auto flex md:hidden`}>
      <AnimatePresence>
        {nav && (
          <motion.div
            ref={dropdownRef}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="h-auto top-[84px] rounded-b-[10px] absolute w-full bg-white py-5 z-[12] "
          >
            <Categories />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {nav && (
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

export default MobileNav;
