import React from 'react'
import OrangeBtn from '../Buttons/orangeBtn'
import { Link } from 'react-router-dom'

const Others = ({item}) => {
  return (
    <div className="flex flex-col gap-8 items-center">
        <div>
          <img src={item.image.desktop} className="rounded-[10px]" />
        </div>
        <h3 className="text-black text-[28px] font-medium">{item.name}</h3>
        <Link
          to={`/${item.slug}`}>
          <OrangeBtn />
        </Link>
      </div>
  )
}

export default Others