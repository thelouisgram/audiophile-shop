import React from 'react'
import { Link } from "react-router-dom";
import OrangeSeeProduct from '../Buttons/OrangeSeeProduct';

const Product = ({ item, index }) => {
  return (
    <div
      className={`w-full flex gap-8 flex-col items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
    >
      <div className="md:w-1/2">
        <img src={item.image.desktop} className="rounded-[10px] hidden md:flex" />
        <img src={item.image.mobile} className="rounded-[10px] flex md:hidden" />
      </div>
      <div className={`md:w-1/2 w-full text-center md:text-left ${index % 2 === 0 ? "md:pl-24" : "pl-0"}`}>
        {item.new && (
          <p className="text-orange text-[13px] xs:text-[15px] tracking-[0.5em] mb-4">
            NEW PRODUCT
          </p>
        )}
        <h2 className="text-[28px] font-bold text-black uppercase md:w-[250px] leading-[1.1em] mb-8">
          {item.name}
        </h2>
        <p className='text-[15px] leading-[1.5em] text-elements md:w-[450px] mb-8'>{item.description}</p>
        <Link to={item.slug} className='flex w-full md:justify-start justify-center '>
          <OrangeSeeProduct />
        </Link>
      </div>
    </div>
  )
}

export default Product
