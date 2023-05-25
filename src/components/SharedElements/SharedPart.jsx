import React from 'react'
import About from '../Shared/About'
import { Outlet } from 'react-router-dom'

const SharedPart = () => {
  return (
    <div className='bg-whitishGrey font-Manrope'>
      <Outlet />
      <About />
    </div>
  )
}

export default SharedPart
