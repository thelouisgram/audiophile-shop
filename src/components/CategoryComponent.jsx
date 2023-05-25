import React from 'react'
import { Link } from "react-router-dom";
import OrangeBtn from './Buttons/orangeBtn';

const CategoryComponent = ({item, index}) => {
  return (
    <div
        className={`w-full flex gap-8 items-center ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="w-1/2">
          <img src={item.image.desktop} className="rounded-[10px]" />
        </div>
        <div className={`w-1/2 ${index % 2 === 0 ? "pl-24" : "pl-0"}`}>
          {item.new && (
            <p className="text-orange text-[15px] tracking-[0.5em] mb-4">
              NEW PRODUCT
            </p>
          )}
          <h2 className="text-[28px] font-bold text-black uppercase w-[250px] leading-[1.1em] mb-8">
            {item.name}
          </h2>
          <p className='text-[15px] leading-[1.5em] text-elements w-[450px] mb-8'>{item.description}</p>
          <Link to={item.slug}>
            <OrangeBtn />
          </Link>
        </div>
      </div>
  )
}

export default CategoryComponent
