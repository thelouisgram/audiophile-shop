import React from "react";

const Features = ({ product, includedItems }) => {
  return (
    // Parent container
    <div className="flex flex-col md:flex-row mb-20 md:mb-32 gap-14 md:gap-0">
      {/* Left Container / Top container */}
      <div className="w-full md:w-3/5">
        <h2 className="text-[28px] md:text-[32px] font-bold text-black uppercase md:w-[275px] leading-[1.1em] mb-6">
          FEATURES
        </h2>
        <p className="md:w-[600px] text-elements text-[13px] xs:text-[15px] leading-[1.7em]">
          {product.features.split("\n\n").map((paragraph, index) => (
            <React.Fragment key={index}>
              {paragraph}
              <br />
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
      {/* Right container /Bottom container */}
      <div className="md:w-2/5 md:pl-20">
        <h2 className="text-[28px] xs:text-[32px] font-bold text-black uppercase md:w-[275px] leading-[1.1em] mb-8">
          IN THE BOX
        </h2>
        {/* Included items */}
        <div className="flex flex-col gap-2">{includedItems}</div>
      </div>
    </div>
  );
};

export default Features;
