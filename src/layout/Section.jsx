// eslint-disable-next-line no-unused-vars
import React from 'react'
import productData from "../../public/products.json";
import { useEffect } from "react";
import { handlePageRender } from "../Utils/Shared";
import Product from "../pages/Section/Product";

// eslint-disable-next-line react/prop-types
const Section = ({ section }) => {
    // Scroll to the top on render
    useEffect(() => {
        handlePageRender(`- ${section}`)
    }, [section]);

    // Compiling all products in the section
    const productsInSection = productData.products.filter(
        (item) => item.category === section
    );

    // Rendering each product in the section
    const renderedProducts = productsInSection.map((item, index) => (
        <div key={index}>
            <Product item={item} index={index} />
        </div>
    ));

    return (
        // Parent Container
        <div className="w-full mb-12">
            <div className="bg-black">
                <section className="flex py-10 xs:py-12 ss:py-20 md:py-24 h-auto justify-center px-4 xs:px-6 md:px-0 md:w-[1100px] mx-auto border-t-[1px] border-border">
                    <h1 className="text-[28px] xs:text-[32px] ss:text-[36px] md:text-[42px] text-white font-medium uppercase">
                        {section}
                    </h1>
                </section>
            </div>
            <div className="bg-whitishGrey">
                {/* Rendered product */}
                <section className="py-16 h-auto px-4 xs:px-6 md:px-0 md:w-[1100px] mx-auto flex flex-col gap-24 ">
                    {renderedProducts}
                </section>
            </div>
        </div>
    );
}

export default Section
