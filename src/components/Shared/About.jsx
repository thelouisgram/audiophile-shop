import React from "react"

const About = () => {
  return (
      <div className='w-[1100px] pb-40 flex flex-row items-center gap-8 mx-auto'>
        <div className='w-1/2'>
          <h2 className='text-black font-bold text-[40px] mb-8 wide-[0.3rem]'>BRINGING YOU THE <span className='text-orange'>BEST</span> AUDIO GEAR</h2>
          <p className='text-elements w-[495px] text-[15px]'>Located at the heart of New York City,
            Audiophile is the premier store for high end headphones,
            earphones, speakers, and audio accessories.
            We have a large showroom and luxury demonstration
            rooms available for you to browse and experience a
            wide range of our products. Stop by our store to meet
            some of the fantastic people who make Audiophile the best
            place to buy your portable audio equipment.</p>
        </div>
        <div className='w-1/2'>
          <img src='/images/shared/desktop/image-best-gear.jpg' className="w-full h-auto rounded-[15px]" />
        </div>
      </div>
  )
}

export default About
