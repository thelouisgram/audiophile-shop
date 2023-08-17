import React from 'react'
import { Link } from 'react-router-dom'

const Zx9Speaker = () => {
    return (
        // Parent container
        <div className="w-full px-4 xs:px-6 md:p-0 mb-6 mt-10 md:mt-20 ss:mb-8 md:mb-12">
            <section className="speaker w-full flex py-10 ss:py-14 md:pb-0 md:pt-24 h-auto rounded-[10px] bg-orange md:w-[1100px] mx-auto ">
                <div className="w-full h-auto px-5 md:px-0">
                    <div className="flex justify-center h-auto flex-col md:flex-row">
                        {/* image container */}
                        {/* Desktop image */}
                        <div className="w-1/2 h-[500px] relative hidden md:flex overflow-hidden">
                            <img
                                src="/images/home/desktop/image-speaker-zx9.png"
                                className=" h-[500px] bottom-[-10px] absolute "
                            />
                        </div>
                        {/* Tablet image */}
                        <div className='w-full hidden ss:flex justify-center mb-8 md:hidden'>
                            <img src='/images/home/tablet/image-speaker-zx9.png' className='w-[200px] h-auto' />
                        </div>
                        {/* Mobile Image */}
                        <div className='w-full flex justify-center mb-6 ss:hidden'>
                            <img src='/images/home/mobile/image-speaker-zx9.png' className='w-[125px] h-auto' />
                        </div>
                        {/* Text container */}
                        <div className="md:mt-[15px] flex flex-col text-center md:text-left items-center md:items-start">
                            <h2 className="text-[28px] xs:text-[48px] ss:text-[56px] text-white font-bold tracking-[0.1em] leading-[1.1em] mb-8">
                                ZX9 <br />
                                SPEAKER
                            </h2>
                            <p className="w-full ss:w-[325px] ss:mx-auto md:mx-0 text-white text-[13px] md:text-[15px] mb-10">
                                Upgrade to premium speakers that are phenomenally built to
                                deliver truly remarkable sound.
                            </p>
                            <Link to="/speakers/zx9-speaker">
                                <button className="px-4 py-2 xs:px-6 xs:py-3 text-[12px] xs:text-[15px] text-white font-bold bg-black cursor-pointer hover:bg-elements">
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
