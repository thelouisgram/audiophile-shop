// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import OrangeSeeProduct from "../../components/Buttons/OrangeSeeProduct";
import { AnimatePresence, motion } from "framer-motion";

const HeroSection = () => {
  return (
    // Hero section
    <div className="w-full bg-black mb-20">
      <section className="md:w-[1100px] mx-auto h-[600px] ss:h-[700px] md:h-[610px] text-center md:text-start flex font-Manrope relative overflow-hidden border-t-[1px] border-border">
        {/* Hero section content */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
            className="z-[1] flex h-full w-full justify-center md:items-start p-4 xs:p-6 md:p-0 flex-col"
          >
            <h4 className="tracking-[0.8em] text-elements text-[14px] mb-4 md:mb-0 font-bold">
              NEW PRODUCT
            </h4>
            <h1 className="text-[36px] xs:text-[44px] md:text-[56px] text-white font-bold leading-[1.1em] mb-6 ss:mb-10">
              XX99 MARK II <br />
              HEADPHONES
            </h1>
            <p className="ss:w-[350px] ss:mx-auto md:mx-0 text-elements text-[14px] xs:text-[15px] mb-[50px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            {/* See Product button */}
            <Link
              to="/headphones/xx99-mark-two-headphones"
              className="flex w-full justify-center md:justify-start"
            >
              <OrangeSeeProduct />
            </Link>
          </motion.div>
        </AnimatePresence>
        {/* Hero section background */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="absolute w-full ss:w-auto h-[700px] ss:h-[800px] md:h-[700px] mt-[-90px] z-[0]"
          >
            <img
              src="/images/home/desktop/image-hero.png"
              className="w-auto h-full object-cover hidden md:flex"
            />
            <img
              src="/images/home/tablet/image-hero.jpg"
              className="h-auto w-full object-cover hidden ss:flex md:hidden"
            />
            <img
              src="/images/home/mobile/image-hero.jpg"
              className="w-full h-auto object-cover ss:hidden flex"
            />
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default HeroSection;
