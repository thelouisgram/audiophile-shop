import React from 'react'

const AddToCart = ({addToCart}) => {
  return (
   <button
     onClick={addToCart}
    className="bg-orange hover:bg-orangeAccent text-[14px] tracking-[0.1em] text-white py-3 font-bold 
                w-[150px] flex items-center justify-center cursor-pointer"
    >
        ADD TO CART
    </button>
  )
}

export default AddToCart
