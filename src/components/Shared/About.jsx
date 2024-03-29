/* eslint-disable no-unused-vars */
import React from "react"

const About = () => {
  return (
    // Parent Container
    <div className='md:w-[1100px] my-28 md:my-40 ss:mt-24 ss:mb-48 px-4 xs:px-6 md:px-0 flex flex-col-reverse md:flex-row items-center gap-8 
      mx-auto'>
      <div className='md:w-1/2 text-center md:text-left'>
        <h2 className='text-black font-bold text-[24px] ss:text-[44px] mb-6 md:mb-8 leading-[1.1em]'>BRINGING YOU THE <span className='text-orange'>BEST</span> AUDIO GEAR</h2>
        <p className='text-elements ss:w-[575px] md:w-[495px] mx-0 ss:mx-auto md:mx-0 text-[12px] xs:text-[15px]'>Located at the heart of New York City,
          Audiophile is the premier store for high end headphones,
          earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration
          rooms available for you to browse and experience a
          wide range of our products. Stop by our store to meet
          some of the fantastic people who make Audiophile the best
          place to buy your portable audio equipment.</p>
      </div>
      {/* Image Container */}
      <div className='md:w-1/2'>
        {/* Desktop Image */}
        <img src='/images/shared/desktop/image-best-gear.jpg' className="w-full h-auto rounded-[15px] hidden md:flex" />
        {/* Tablet Image */}
        <img src='/images/shared/tablet/image-best-gear.jpg' className="w-full h-auto rounded-[15px] hidden md:hidden ss:flex" />
        {/* Mobile Image */}
        <img src='/images/shared/mobile/image-best-gear.jpg' className="w-full h-auto rounded-[10px] flex ss:hidden" />
      </div>
    </div>
  )
}

export default About
