import React from 'react'
import {Link } from 'react-router-dom'
import OrangeBtn from '../Buttons/OrangeBtn'

const HeroSection = () => {
  return (
      <div className="w-full bg-black mb-20">
          <section className="w-[1100px] mx-auto md:h-screen-16 xl:h-[611px]  flex font-Manrope relative overflow-hidden border-t-[1px] border-border">
              <div className="z-[1] flex h-full justify-center items-start flex-col">
                  <h4 className="tracking-[0.8em] text-elements text-[14px] font-bold">
                      NEW PRODUCT
                  </h4>
                  <h1 className="text-[56px] text-white font-bold leading-[1.1em] mb-8">
                      XX99 MARK II <br />
                      HEADPHONES
                  </h1>
                  <p className="w-[325px] text-elements text-[14px] mb-[40px]">
                      Experience natural, lifelike audio and exceptional build quality
                      made for the passionate music enthusiast.
                  </p>
                  <Link to="/headphones/xx99-mark-two-headphones">
                      <OrangeBtn />
                  </Link>
              </div>
              <div className="absolute w-auto h-[700px] mt-[-90px] z-[0]">
                  <img
                      src="/images/home/desktop/image-hero.png"
                      className="w-auto h-full object-cover"
                  />
              </div>
          </section>
      </div>
  )
}

export default HeroSection
