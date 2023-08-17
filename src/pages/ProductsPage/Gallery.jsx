import React from 'react'

const Gallery = ({product}) => {
  return (
    // Parent container
      <div className="flex flex-col w-full ss:flex-row gap-5 md:h-[568px] mb-32">
        {/* Image container */}
          <div className="flex flex-col gap-5 w-full md:h-full ss:w-2/5">
              <img
                  src={product.gallery.first.desktop}
                  className="h-1/2 w-full object-cover rounded-[10px] hidden md:flex"
              />
              <img
                  src={product.gallery.first.tablet}
                  className="h-1/2 w-full object-cover rounded-[10px] hidden ss:flex md:hidden"
              />
              <img
                  src={product.gallery.first.mobile}
                  className="h-1/2 w-full object-cover rounded-[10px] flex ss:hidden"
              />
              <img
                  src={product.gallery.second.desktop}
                  className="h-1/2 w-full object-cover rounded-[10px] hidden md:flex"
              />
              <img
                  src={product.gallery.second.tablet}
                  className="h-1/2 w-full object-cover rounded-[10px] hidden ss:flex md:hidden"
              />
              <img
                  src={product.gallery.second.mobile}
                  className="h-1/2 w-full object-cover rounded-[10px] flex ss:hidden"
              />
          </div>
          <div className="ss:w-3/5">
              <img
                  src={product.gallery.third.desktop}
                  className="w-full h-full object-cover rounded-[10px] hidden md:flex"
              />
              <img
                  src={product.gallery.third.tablet}
                  className="w-full h-full object-cover rounded-[10px] hidden ss:flex md:hidden"
              />
              <img
                  src={product.gallery.third.mobile}
                  className="w-full h-full object-cover rounded-[10px] flex ss:hidden"
              />
          </div>
      </div>
  )
}

export default Gallery
