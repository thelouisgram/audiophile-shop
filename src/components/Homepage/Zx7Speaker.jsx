import React from 'react'
import { Link } from 'react-router-dom'

const Zx7Speaker = () => {
  return (
      <div className="w-full px-4 xs:px-6 md:px-0 bg-whitishGrey mb-6 md:mb-12">
          <section className="py-24 h-auto md:w-[1100px] rounded-[10px] mx-auto zx7">
              <div className="pl-6 md:pl-24">
                  <h3 className="text-[20px] xs:text-[28px] text-black font-bold  mb-3 md:mb-6">
                      ZX7 SPEAKER
                  </h3>
                  <Link to='/speakers/zx7-speaker'>
                      <button className="px-4 py-2 xs:py-3 xs:px-6 text-[12px] xs:text-[15px] font-bold hover:bg-black hover:text-white cursor-pointer text-black border-[1px] border-black">
                          SEE PRODUCT
                      </button>
                  </Link>
              </div>
          </section>
      </div>
  )
}

export default Zx7Speaker
