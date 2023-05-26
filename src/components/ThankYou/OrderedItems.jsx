import React from 'react'

const OrderedItems = ({item}) => {
  return (
      <div className="flex w-full justify-between items-center">
          <div className="flex gap-1 items-center">
              <img src={item.cartImage} className="w-[64px] h-auto rounded-[8px] mr-2" alt="Product" />
              <div className="flex flex-col">
                  <h3 className="font-bold text-black text-[15px]">{item.shortName}</h3>
                  <h4 className="text-elements text-[14px]">$ {item.price.toLocaleString()}</h4>
              </div>
          </div>
          <div className="text-elements font-medium">x{item.number}</div>
      </div>
  )
}

export default OrderedItems
