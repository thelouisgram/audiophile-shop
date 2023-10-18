/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Yx1Earphones = () => {
    return (
        // Parent container
        <section className="h-auto w-full md:w-[1100px] px-4 xs:px-6 md:px-0 mx-auto earphones">
            <div className="flex flex-col w-full ss:justify-between ss:flex-row gap-6 md:gap-8 md:h-[300px]">
                {/* image & right container */}
                <div className="ss:w-1/2 h-full">
                    {/* Desktop image */}
                    <img
                        src="/images/home/desktop/image-earphones-yx1.jpg"
                        className="h-full w-full rounded-[10px] object-cover hidden md:flex"
                    />
                    {/* Tablet image */}
                    <img
                        src="/images/home/tablet/image-earphones-yx1.jpg"
                        className="h-full w-full rounded-[10px] object-cover hidden ss:flex md:hidden"
                    />
                    {/* Mobile image */}
                    <img
                        src="/images/home/mobile/image-earphones-yx1.jpg"
                        className="h-full w-full rounded-[10px] object-cover flex ss:hidden"
                    />
                </div>
                {/* Left Container */}
                <div className="ss:w-1/2 flex flex-col py-16 md:py-0 justify-center pl-6 md:pl-24 bg-grey rounded-[10px]">
                    <h3 className="text-[20px] md:text-[28px] text-black font-bold mb-6">
                        YX1 EARPHONES
                    </h3>
                    <div>
                        <Link to='/earphones/yx1-earphones'>
                            <button className="py-2 px-4 xs:py-3 xs:px-6 text-[12px] xs:text-[15px] font-bold hover:bg-black hover:text-white cursor-pointer text-black border-[1px] border-black">
                                SEE PRODUCT
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Yx1Earphones
