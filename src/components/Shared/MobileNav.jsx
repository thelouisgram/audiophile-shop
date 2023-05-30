import React from 'react'
import Categories from './Categories'
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux"

const MobileNav = () => {
  const { nav } = useSelector((state) => state.app);
  return (
    <div className={`relative h-auto flex md:hidden`}>
      <AnimatePresence>
        {nav && 
        <motion.div
          initial={{ y: -800 }}
          animate={{ y: 0 }}
          exit={{ y: -800 }}
          transition={{ ease: "easeInOut", duration: 0.5 }} 
          className='min-h-screen-16 top-[84px] rounded-b-[10px] absolute w-full bg-white py-5 z-[8] '>
      <Categories />
        </motion.div>}
        </AnimatePresence>
        <AnimatePresence>
        {nav && 
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
        className={` w-full h-[100vh] fixed bg-blackII z-[7]`}/>}
      </AnimatePresence>
    </div>
  )
}

export default MobileNav
