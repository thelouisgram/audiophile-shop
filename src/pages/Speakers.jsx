import React from "react";
import productData from "../../public/products.json";
import { useEffect } from "react";
import { scrollToTop } from "../components/Utils/Shared";
import Product from "../components/Categories/Product";

const Speakers = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

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
    <div className="w-full mb-12">
      <div className="bg-black">
        <section className="flex py-24 h-auto justify-center w-[1100px] mx-auto border-t-[1px] border-border">
          <h1 className="text-[42px] text-white font-medium ">SPEAKERS</h1>
        </section>
      </div>
      <div className="bg-whitishGrey">
        <section className=" py-16 h-auto w-[1100px] mx-auto flex flex-col gap-24 ">
          {speaker}
        </section>
      </div>
    </div>
  );
};

export default Speakers;
