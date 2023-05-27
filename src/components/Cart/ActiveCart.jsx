import React from 'react'
import { Link } from 'react-router-dom'
import CheckOutBtn from './CheckOutBtn'
import RemoveAllBtn from './RemoveAllBtn'

const ActiveCart = ({ cartItems, cartItemsNumber, cartTotal, removeAll}) => {
  return (
      <div className='bg-white rounded-[10px] w-full md:w-[375px] h-auto px-4 py-6 xs:p-8'>
          <div className="flex justify-between  items-center mb-6 xs:mb-8">
              <h3 className="font-bold text-black text-[17px]">
                  CART ( {cartItemsNumber} )
              </h3>
              <RemoveAllBtn removeAll={removeAll} />
          </div>
          <div className="flex flex-col gap-4 xs:gap-6 mb-6 xs:mb-8 h-auto max-h-[290px] overflow-auto scroll-container">
              {cartItems}
          </div>
          <div className="flex justify-between items-center mb-6 xs:mb-8">
              <h3 className="text-elements">TOTAL</h3>
              <h3 className="tracking-[0.05em] text-black font-bold ">
                  $ {cartTotal.toLocaleString()}
              </h3>
          </div>
          <Link to="/checkout">
              <CheckOutBtn />
          </Link>
      </div>
  )
}

export default ActiveCart
