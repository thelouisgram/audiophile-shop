import React from 'react'

const Gallery = ({product}) => {
  return (
      <div className="flex flex-col w-full md:flex-row gap-5 md:h-[568px] mb-32">
          <div className="flex flex-col gap-5 w-full md:h-full md:w-2/5">
              <img
                  src={product.gallery.first.desktop}
                  className="h-1/2 w-full object-cover rounded-[10px] hidden md:flex"
              />
              <img
                  src={product.gallery.first.mobile}
                  className="h-1/2 w-full object-cover rounded-[10px] flex md:hidden"
              />
              <img
                  src={product.gallery.second.desktop}
                  className="h-1/2 w-full object-cover rounded-[10px] hidden md:flex"
              />
              <img
                  src={product.gallery.second.mobile}
                  className="h-1/2 w-full object-cover rounded-[10px] flex md:hidden"
              />
          </div>
          <div className="md:w-3/5">
              <img
                  src={product.gallery.third.desktop}
                  className="w-full h-full object-cover rounded-[10px] hidden md:flex"
              />
              <img
                  src={product.gallery.third.mobile}
                  className="w-full h-full object-cover rounded-[10px] flex md:hidden"
              />
          </div>
      </div>
  )
}

export default Gallery
