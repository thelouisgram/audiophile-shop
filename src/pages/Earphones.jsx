import React from 'react'
import productData from '../../public/products.json'
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Earphones = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const earphones = productData["products"].filter((item) => item.category === "earphones")
  const earphone = earphones.map((item, index) => {
    return (
      <div
        key={item.id}
        className={`w-full flex gap-8 items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className='w-1/2'>
          <img src={item.image.desktop} className='rounded-[10px]' />
        </div>
        <div className={`w-1/2 ${index % 2 === 0 ? 'pl-24' : 'pl-0'}`}>
          {item.new && <p className='text-orange text-[15px] tracking-[0.5em] mb-4'>NEW PRODUCT</p>}
          <h2 className='text-[28px] font-bold text-black w-[175px] leading-[1.1em] mb-8'>{item.name}</h2>
          <p className='text-[15px] leading-[1.5em] text-elements w-[425px] mb-8'>{item.description}</p>
          <Link to={item.slug} className="bg-orange text-[14px] tracking-[0.1em] text-white py-3 font-bold w-[150px] flex justify-center cursor-pointer">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    )
  })

  return (
    <div className="w-full  mb-12 bg-whitishGrey  font-Manrope">
      <div className='bg-black'>
        <section className="flex py-24 h-auto justify-center w-[1100px] mx-auto">
          <h1 className="text-[42px] text-white font-medium ">EARPHONES</h1>
        </section>
      </div>
      <div className='bg-whitishGrey'>
        <section className=" py-16 h-auto w-[1100px] mx-auto flex flex-col gap-24 ">
          {earphone}
        </section >
      </div>
    </div>
  )
}

export default Earphones
