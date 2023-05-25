import React from 'react'

const Gallery = ({product}) => {
  return (
      <div className="flex gap-5 h-[568px] w-full mb-32">
          <div className="flex flex-col gap-5 h-full w-2/5">
              <img
                  src={product.gallery.first.desktop}
                  className="h-1/2 w-full object-cover rounded-[10px]"
              />
              <img
                  src={product.gallery.second.desktop}
                  className="h-1/2 w-full object-cover rounded-[10px]"
              />
          </div>
          <div className="w-3/5">
              <img
                  src={product.gallery.third.desktop}
                  className="w-full h-full object-cover rounded-[10px]"
              />
          </div>
      </div>
  )
}

export default Gallery
