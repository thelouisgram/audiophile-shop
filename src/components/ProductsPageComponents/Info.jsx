import React from 'react'
import AddToCart from './AddToCart'

const Info = ({product, minusItemNumber, itemNumber, addToCart, addItemNumber}) => {
  return (
      <div className="flex items-center gap-24 mb-40">
          <div className="w-1/2">
              <img src={product.image.desktop} className="rounded-[10px]" />
          </div>
          <div className="w-1/2 pl-8">
              {product.new && (
                  <p className="text-orange text-[15px] tracking-[0.5em] mb-4">
                      NEW PRODUCT
                  </p>
              )}
              <h2 className="text-[40px] font-bold text-black uppercase w-[275px] leading-[1.1em] mb-8">
                  {product.name}
              </h2>
              <p className="text-[15px] leading-[1.5em] text-elements w-[450px] mb-8">
                  {product.description}
              </p>
              <h3 className="text-[20px] font-bold text-black uppercase leading-[1.1em] mb-8">
                  $ {product.price.toLocaleString()}
              </h3>
              <div className="flex gap-8">
                  <div className="bg-grey w-[125px] justify-center items-center flex text-[17px] font-bold gap-3 text-black">
                      <button
                          onClick={minusItemNumber}
                          className="text-elements hover:bg-[#D3D3D3] hover:text-orange px-4 py-3"
                      >
                          -
                      </button>
                      <div className="text-[14px] flex items-center justify-center w-[40px]">
                          {itemNumber}
                      </div>
                      <button
                          onClick={addItemNumber}
                          className="text-elements hover:bg-[#D3D3D3] hover:text-orange px-4 py-3"
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
