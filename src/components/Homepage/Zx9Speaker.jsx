import React from 'react'
import { Link } from 'react-router-dom'

const Zx9Speaker = () => {
  return (
      <div className="w-full bg-whitishGrey mt-20 mb-12">
          <section className="speaker flex pt-24 h-auto rounded-[10px] bg-orange w-[1100px] mx-auto ">
              <div className="w-full h-auto ">
                  <div className="flex justify-center overflow-hidden">
                      <div className="w-1/2 h-[500px] flex relative">
                          <img
                              src="/images/home/desktop/image-speaker-zx9.png"
                              className="w-relative h-[500px] bottom-[-10px] absolute "
                          />
                      </div>
                      <div className="mt-[15px]">
                          <h2 className="text-[56px] text-white font-bold tracking-[0.1em] leading-[1.1em] mb-8">
                              ZX9 <br />
                              SPEAKER
                          </h2>
                          <p className="w-[325px] text-white text-[15px] mb-8">
                              Upgrade to premium speakers that are phenomenally built to
                              deliver truly remarkable sound.
                          </p>
                          <Link to="/speakers/zx9-speaker">
                              <button className="px-6 py-3 text-[15px] text-white font-bold bg-black cursor-pointer hover:bg-elements">
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

export default Zx9Speaker
