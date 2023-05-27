import React from 'react'
import OrangeSeeProduct from '../Buttons/OrangeSeeProduct'
import { Link } from 'react-router-dom'

const Others = ({ item }) => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 items-center">
      <div>
        <img src={item.image.desktop} className="rounded-[10px] hidden md:flex" />
        <img src={item.image.mobile} className="rounded-[10px] flex md:hidden" />
      </div>
      <h3 className="text-black text-[24px] md:text-[28px] font-bold">{item.name}</h3>
      <Link
        to={`/${item.slug}`}>
        <OrangeSeeProduct />
      </Link>
    </div>
  )
}

export default Others
