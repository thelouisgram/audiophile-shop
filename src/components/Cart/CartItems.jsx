/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const CartItems = ({minusCartItem, addCartItem, item}) => {
  return (
      <div className="flex items-center pr-1 justify-between w-full">
          <div className='flex gap-2 items-center'>
              <div className='w-[50px] xs:w-[64px] h-auto rounded-[8px] bg-[#f1f1f1]'>
              <img
                  src={item.cartImage}
                  className="w-full h-full"
              />
          </div>
          <div className="flex flex-col">
              <h3 className="font-bold text-black text-[13px] xs:text-[15px]">{item.shortName}</h3>
              <h4 className="text-elements text-[14px]">$ {item.price.toLocaleString()}</h4>
          </div>
          </div>
          <div className="bg-grey w-[80px] xs:w-[100px] h-[36px] justify-center items-center flex text-[15px] font-bold gap-3 text-black overflow-hidden">
              <button
                  onClick={() => minusCartItem(item.id)}
                  className="text-elements hover:bg-[#D3D3D3] hover:text-orange p-2 xs:p-3"
              >
                  -
              </button>
              <div className="text-[13px] flex items-center justify-center w-[30px]">
                  {item.number}
              </div>
              <button
                  onClick={() => addCartItem(item.id)}
                  className="text-elements hover:bg-[#D3D3D3] hover:text-orange p-2 xs:p-3"
              >
                  +
              </button>
          </div>
      </div>
  )
}

export default CartItems
