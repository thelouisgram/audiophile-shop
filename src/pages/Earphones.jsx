import React from "react";
import productData from "../../public/products.json";
import { useEffect } from "react";
import { scrollToTop } from "../components/Utils/Shared";
import CategoryComponent from "../components/CategoryComponent";

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
        <CategoryComponent item={item} index={index} />
      </div>
    );
  });

  return (
    <div className="w-full mb-12">
      <div className="bg-black">
        <section className="flex py-24 h-auto justify-center w-[1100px] mx-auto border-t-[1px] border-border">
          <h1 className="text-[42px] text-white font-medium ">EARPHONES</h1>
        </section>
      </div>
      <div className="bg-whitishGrey">
        <section className=" py-16 h-auto w-[1100px] mx-auto flex flex-col gap-24 ">
          {earphone}
        </section>
      </div>
    </div>
  );
};

export default Earphones;
