import React from 'react'
import Categories from './Categories'

const MobileNav = () => {
  return (
    <div className='relative h-full flex md:hidden'>
    <div className='min-h-screen-16 top-[84px] rounded-b-[10px] absolute w-full bg-white py-5 z-[8] '>
      <Categories />
      </div>
          <div className='w-full h-[100vh] fixed bg-blackII z-[7]'/>
    </div>
  )
}

export default MobileNav
