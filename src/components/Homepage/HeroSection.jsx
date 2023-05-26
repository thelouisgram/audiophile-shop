import React from 'react'
import {Link } from 'react-router-dom'
import OrangeSeeProduct from '../Buttons/OrangeSeeProduct'

const HeroSection = () => {
  return (
    // Hero section
      <div className="w-full bg-black mb-20">
          <section className="md:w-[1100px] mx-auto h-screen-16 xl:h-[611px] text-center md:text-start flex font-Manrope relative overflow-hidden border-t-[1px] border-border">
              {/* Hero section content */}
              <div className="z-[1] flex h-full justify-center md:items-start p-4 xs:p-6 md:p-0 flex-col">
                  <h4 className="tracking-[0.8em] text-elements text-[14px] mb-4 md:mb-0 font-bold">
                      NEW PRODUCT
                  </h4>
                  <h1 className="text-[36px] xs:text-[50px] md:text-[56px] text-white font-bold leading-[1.1em] mb-6 md:mb-8">
                      XX99 MARK II <br />
                      HEADPHONES
                  </h1>
                  <p className="md:w-[350px] text-elements text-[15px] xs:text-[16px] mb-[40px]">
                      Experience natural, lifelike audio and exceptional build quality
                      made for the passionate music enthusiast.
                  </p>
                  {/* See Product button */}
                  <Link to="/headphones/xx99-mark-two-headphones" className='flex w-full justify-center md:justify-start'>
                      <OrangeSeeProduct />
                  </Link>
              </div>
              {/* Hero section background */}
              <div className="absolute w-auto h-[700px] mt-[-90px] z-[0]">
                  <img
                      src="/images/home/desktop/image-hero.png"
                      className="w-auto h-full object-cover hidden md:flex"
                  />
                  <img
                      src="/images/home/mobile/image-hero.jpg"
                      className="w-auto h-full object-cover md:hidden flex"
                  />
              </div>
          </section>
      </div>
  )
}

export default HeroSection
