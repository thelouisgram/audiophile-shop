import React from "react";
import { Link } from "react-router-dom";
import OrangeSeeProduct from "../Buttons/OrangeSeeProduct";

const Product = ({ item, index }) => {
  return (
    // Parent container
    <div
      className={`w-full flex gap-12 md:gap-8 flex-col items-center ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Image container */}
      <div className="md:w-1/2 w-full">
          {/* Desktop image */}
        <div className="default-container rounded-[10px] hidden md:flex">
          <img
            src={item.categoryImage.desktop}
            className="rounded-[10px] hidden md:flex"
          />
          </div>
          {/* Tablet image */}
        <div className="ss-container rounded-[10px] hidden ss:flex md:hidden">
          <img
            src={item.categoryImage.tablet}
            className="rounded-[10px]"
          />
          </div>
        {/* Mobile image */}
          <div className="default-container rounded-[10px] flex ss:hidden">
          <img
            src={item.categoryImage.mobile}
            className="rounded-[10px] flex ss:hidden"
          />
        </div>
      </div>
      <div
        className={`md:w-1/2 w-full text-center md:text-left ${
          index % 2 === 0 ? "md:pl-24" : "pl-0"
        }`}
      >
        {item.new && (
          <p className="text-orange text-[13px] xs:text-[15px] tracking-[0.5em] mb-4">
            NEW PRODUCT
          </p>
        )}
        {/* Name */}
        <h2 className="text-[28px] font-bold text-black uppercase md:w-[250px] leading-[1.1em] mb-8">
          {item.name}
        </h2>
        {/* Description */}
        <p className="text-[13px] xs:text-[15px] leading-[1.5em] text-elements ss:w-[625px] ss:mx-auto md:mx-0 md:w-[450px] mb-8">
          {item.description}
        </p>
        {/* See product button */}
        <Link
          to={item.slug}
          className="flex w-full md:justify-start justify-center "
        >
          <OrangeSeeProduct />
        </Link>
      </div>
    </div>
  );
};

export default Product;
