import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="h-full w-full px-4 xs:px-6 md:px-0">
      {/* Go Back Button */}
      <Link
        to="/"
        className="text-elements cursor-pointer hover:underline w-[100px]"
      >
        Go Back
      </Link>
      <div className="w-full h-full flex items-center justify-center md:py-12">
        <div className="flex h-full justify-center flex-col md:flex-row gap-4 md:gap-8 items-center">
          <h2 className="text-black font-bold text-[28px]">404</h2>
          <div className="w-[1px] h-[50px] bg-elements hidden md:flex" />
          <p className="text-black text-[13px] xs:text-[16px]">
            THIS PAGE COULD NOT BE FOUND.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
