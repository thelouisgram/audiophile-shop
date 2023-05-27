import React from "react";
import productData from "../../public/products.json";
import { useEffect } from "react";
import { scrollToTop } from "../components/Utils/Shared";
import Product from "../components/Categories/Product";

const Earphones = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const earphones = productData["products"].filter(
    (item) => item.category === "earphones"
  );
  const earphone = earphones.map((item, index) => {
    return (
      <div key={index}>
        <Product item={item} index={index} />
      </div>
    );
  });

  return (
    <div className="w-full mb-12">
      <div className="bg-black">
        <section className="flex py-10 xs:py-12 md:py-24 h-auto justify-center px-4 xs:px-6 md:px-0 md:w-[1100px] mx-auto border-t-[1px] border-border">
          <h1 className="text-[28px] xs:text-[32px] md:text-[42px] text-white font-medium ">EARPHONES</h1>
        </section>
      </div>
      <div className="bg-whitishGrey">
        <section className="py-16 h-auto px-4 xs:px-6 md:px-0 md:w-[1100px] mx-auto flex flex-col gap-24 ">
          {earphone}
        </section>
      </div>
    </div>
  );
};

export default Earphones;
