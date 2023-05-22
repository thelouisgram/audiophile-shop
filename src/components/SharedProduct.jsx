import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedProduct = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default SharedProduct
