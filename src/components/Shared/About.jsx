import React from "react"

const About = () => {
  return (
      <div className='md:w-[1100px] my-28 md:my-40 px-4 xs:px-6 md:px-0 flex flex-col-reverse md:flex-row items-center gap-8 
      mx-auto'>
        <div className='md:w-1/2 text-center md:text-left'>
          <h2 className='text-black font-bold text-[24px] md:text-[40px] mb-6 md:mb-8 wide-[0.3rem]'>BRINGING YOU THE <span className='text-orange'>BEST</span> AUDIO GEAR</h2>
          <p className='text-elements md:w-[495px] text-[12px] xs:text-[15px]'>Located at the heart of New York City,
            Audiophile is the premier store for high end headphones,
            earphones, speakers, and audio accessories.
            We have a large showroom and luxury demonstration
            rooms available for you to browse and experience a
            wide range of our products. Stop by our store to meet
            some of the fantastic people who make Audiophile the best
            place to buy your portable audio equipment.</p>
        </div>
        <div className='md:w-1/2'>
          <img src='/images/shared/desktop/image-best-gear.jpg' className="w-full h-auto rounded-[15px] hidden md:flex" />
          <img src='/images/shared/mobile/image-best-gear.jpg' className="w-full h-auto rounded-[10px] flex md:hidden" />
        </div>
      </div>
  )
}

export default About
