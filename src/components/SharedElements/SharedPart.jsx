import React from 'react'
import About from '../Shared/About'
import { Outlet } from 'react-router-dom'
import RevealDiv from '../RevealDiv'

const SharedPart = () => {
  return (
    <div className='bg-whitishGrey font-Manrope'>
      <Outlet />
      <RevealDiv>
      <About />
      </RevealDiv>
    </div>
  )
}

export default SharedPart
