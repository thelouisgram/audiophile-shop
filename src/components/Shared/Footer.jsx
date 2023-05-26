import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='w-full h-auto bg-black text-white'>
      <footer className='md:w-[1100px] px-6 xs:px-6 md:px-0 mx-auto flex flex-col items-center md:items-start gap-12  pb-10 '>
        <div className='h-1 w-24 mb-8 bg-orange '/>
        <div className=' flex flex-col md:flex-row gap-10 justify-between'>
                  <div className='flex items-center'>
                    <img src='/images/shared/desktop/logo.svg' />
                  </div>
                  <div className='flex flex-col md:flex-row text-center md:text-left gap-6 text-white tracking-[0.15rem] font-bold text-[13px]'>
                      <Link to='/' className='hover:text-orange cursor-pointer'>HOME</Link>
                      <Link to='/headphones' className='hover:text-orange cursor-pointer'>HEADPHONES</Link>
                      <Link to='/speakers' className='hover:text-orange cursor-pointer'>SPEAKERS</Link>
                      <Link to='/earphones' className='hover:text-orange cursor-pointer'>EARPHONES</Link>
                  </div>
        </div>
        <div>
            <div className='md:w-[575px] text-center md:text-left'>
            <p className='text-elements'>
                Audiophile is an all in one stop to fulfill your audio needs. 
                We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. 
                Come and visit our demo facility - we’re open 7 days a week.
            </p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-10 items-center'>
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
