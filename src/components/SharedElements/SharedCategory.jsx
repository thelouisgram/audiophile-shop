import React from 'react'
import { Outlet } from "react-router-dom"
import Categories from '../Shared/Categories'

const SharedCategory = () => {
  return (
    <div className='bg-whitishGrey'>
      <Outlet />
      <Categories />
    </div>
  )
}

export default SharedCategory
