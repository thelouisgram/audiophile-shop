import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import React from "react"
import Cart from './Cart'

const SharedLayout = () => {
  return (
    <div className='bg-whitishGrey font-Manrope'>
      <Cart />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default SharedLayout
