import React from 'react'
import AddToCart from './AddToCart'

const Info = ({product, minusItemNumber, itemNumber, addToCart, addItemNumber}) => {
  return (
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24 mb-20 md:mb-40 w-full ">
          <div className="md:w-1/2 w-full">
              <img src={product.image.desktop} className="rounded-[10px] hidden md:flex" />
              <img src={product.image.mobile} className="rounded-[10px] flex md:hidden" />
          </div>
          <div className="md:w-1/2 w-full">
              {product.new && (
                  <p className="text-orange text-[15px] tracking-[0.5em] mb-4">
                      NEW PRODUCT
                  </p>
              )}
              <h2 className="text-[28px] xs-text[36px] md:text-[40px] font-bold text-black uppercase md:w-[275px] leading-[1.1em] mb-8">
                  {product.name}
              </h2>
              <p className="text-[13px] xs:text-[15px] leading-[1.5em] text-elements md:w-[450px] mb-8">
                  {product.description}
              </p>
              <h3 className="text-[20px] font-bold text-black uppercase leading-[1.1em] mb-8">
                  $ {product.price.toLocaleString()}
              </h3>
              <div className="flex gap-4 xs:gap-8">
                  <div className="bg-grey md:w-[125px] justify-center items-center flex text-[17px] font-bold gap-3 text-black">
                      <button
                          onClick={minusItemNumber}
                          className="text-elements hover:bg-[#D3D3D3] hover:text-orange px-2 xs:px-4 py-2 xs:py-3"
                      >
                          -
                      </button>
                      <div className="text-[13px] xs:text-[14px] flex items-center justify-center w-[24px] md:w-[40px]">
                          {itemNumber}
                      </div>
                      <button
                          onClick={addItemNumber}
                          className="text-elements hover:bg-[#D3D3D3] hover:text-orange px-2 xs:px-4 py-2 xs:py-3"
                      >
                          +
                      </button>
                  </div>
                  <AddToCart addToCart={addToCart} />
              </div>
          </div>
      </div>
  )
}

export default Info
