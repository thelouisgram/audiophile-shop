import React from "react";
import productData from "../../public/products.json";
import { useEffect } from "react";
import { scrollToTop } from "../components/Utils/Shared";
import Product from "../components/Categories/Product";

const Speakers = () => {

  // Scroll to he top on render
  useEffect(() => {
    scrollToTop();
    document.title = `Audiophile Shop - Speakers`
  }, []);

  // Rendering product
  const speakers = productData["products"].filter(
    (item) => item.category === "speakers"
  );
  const speaker = speakers.map((item, index) => {
    return (
      <div key={index}>
        <Product item={item} index={index} />
      </div>
    );
  });

  return (
    // Parent container
    <div className="w-full mb-12">
      <div className="bg-black">
        <section className="flex py-10 xs:py-12 ss:py-20 md:py-24 h-auto justify-center px-4 xs:px-6 md:px-0 md:w-[1100px] mx-auto border-t-[1px] border-border">
          <h1 className="text-[28px] xs:text-[32px] ss:text-[36px] md:text-[42px] text-white font-medium ">SPEAKERS</h1>
        </section>
      </div>
      <div className="bg-whitishGrey">
        {/* Rendered product */}
        <section className="py-16 h-auto px-4 xs:px-6 md:px-0 md:w-[1100px] mx-auto flex flex-col gap-24 ">
          {speaker}
        </section>
      </div>
    </div>
  );
};

export default Speakers;
