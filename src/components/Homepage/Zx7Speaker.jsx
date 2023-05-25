import React from 'react'
import { Link } from 'react-router-dom'

const Zx7Speaker = () => {
  return (
      <div className="w-full bg-whitishGrey mb-12">
          <section className=" py-24 h-auto w-[1100px] rounded-[10px] mx-auto zx7">
              <div className="pl-24">
                  <h3 className="text-[28px] text-black font-bold  mb-6">
                      ZX7 SPEAKER
                  </h3>
                  <Link to='/speakers/zx7-speaker'>
                      <button className="py-3 px-6 text-[15px] font-bold hover:bg-black hover:text-white cursor-pointer text-black border-[1px] border-black">
                          SEE PRODUCT
                      </button>
                  </Link>
              </div>
          </section>
      </div>
  )
}

export default Zx7Speaker
