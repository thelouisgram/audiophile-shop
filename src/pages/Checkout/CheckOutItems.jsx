/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const CheckOutItems = ({item}) => {
  return (
      <div key={item.id} className="flex items-center justify-between">
          <div className="flex items-center">
              <img
                  src={item.cartImage}
                  className="w-[64px] h-auto rounded-[8px] mr-3"
              />
              <div className="flex flex-col">
                  <h3 className="font-bold text-black text-[15px]">
                      {item.shortName}
                  </h3>
                  <h4 className="text-elements text-[14px]">
                      $ {item.price.toLocaleString()}
                  </h4>
              </div>
          </div>
          <div className="text-elements font-medium">x{item.number}</div>
      </div>
  )
}

export default CheckOutItems
