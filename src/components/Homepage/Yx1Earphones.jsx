import React from 'react'
import { Link } from 'react-router-dom'

const Yx1Earphones = () => {
  return (
      <div className="w-full bg-whitishGrey mb-12">
          <section className="h-auto w-[1100px] rounded-[10px] mx-auto earphones">
              <div className="flex gap-8 h-[300px]">
                  <div className="w-1/2 h-full">
                      <img
                          src="/images/home/desktop/image-earphones-yx1.jpg"
                          className="h-full w-full rounded-[10px] object-cover"
                      />
                  </div>
                  <div className="w-1/2 flex flex-col justify-center pl-24 bg-grey rounded-[10px]">
                      <h3 className="text-[28px] text-black font-bold  mb-6">
                          YX1 EARPHONES
                      </h3>
                      <div>
                          <Link to='/earphones/yx1-earphones'>
                              <button className="py-3 px-6 text-[15px] font-bold hover:bg-black hover:text-white cursor-pointer text-black border-[1px] border-black">
                                  SEE PRODUCT
                              </button>
                          </Link>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default Yx1Earphones
