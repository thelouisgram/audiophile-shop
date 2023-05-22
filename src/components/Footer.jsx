import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='w-full h-auto bg-black text-white font-Manrope'>
      <footer className='w-[1100px] mx-auto flex flex-col gap-12  pb-10 '>
        <div className='h-1 w-24 mb-8 bg-orange '/>
        <div className=' flex justify-between'>
                  <div className='flex items-center'>
                    <img src='/images/shared/desktop/logo.svg' />
                  </div>
                  <div className='flex gap-6 text-white tracking-[0.15rem] font-bold text-[13px]'>
                      <Link to='/' className='hover:text-orange cursor-pointer'>HOME</Link>
                      <Link to='/headphones' className='hover:text-orange cursor-pointer'>HEADPHONES</Link>
                      <Link to='/speakers' className='hover:text-orange cursor-pointer'>SPEAKERS</Link>
                      <Link to='/earphones' className='hover:text-orange cursor-pointer'>EARPHONES</Link>
                  </div>
        </div>
        <div>
            <div className='w-[575px]'>
            <p className='text-elements'>
                Audiophile is an all in one stop to fulfill your audio needs. 
                We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. 
                Come and visit our demo facility - we’re open 7 days a week.
            </p>
            </div>
        </div>
        <div className='flex justify-between items-center'>
                  <p className='text-elements'>Copyright 2021. All Rights Reserved</p>
            <div className='flex flex-row gap-4 items-center'>
                <img src='/images/shared/desktop/icon-facebook.svg' />
                <img src='/images/shared/desktop/icon-twitter.svg' />
                <img src='/images/shared/desktop/icon-instagram.svg' />
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
