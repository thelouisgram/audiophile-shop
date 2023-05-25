import React from "react";
import productData from "../../public/products.json";
import { useEffect } from "react";
import { scrollToTop } from "../components/Utils/Shared";
import Product from "../components/Categories/Product";

const Headphones = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const headphones = productData["products"].filter(
    (item) => item.category === "headphones"
  );

  const headphone = headphones.map((item, index) => {
    return (
      <div key={index}>
        <Product item={item} index={index} />
      </div>
    );
  });

  return (
    <div className="w-full  mb-12">
      <div className="bg-black">
        <section className="flex py-24 h-auto justify-center w-[1100px] mx-auto border-t-[1px] border-border">
          <h1 className="text-[42px] text-white font-medium ">HEADPHONES</h1>
        </section>
      </div>
      <div className="bg-whitishGrey">
        <section className=" py-16 h-auto w-[1100px] mx-auto flex flex-col gap-24 ">
          {headphone}
        </section>
      </div>
    </div>
  );
};

export default Headphones;
