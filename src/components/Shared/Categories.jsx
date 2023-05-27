import React from 'react'
import { Link } from "react-router-dom"


const Categories = () => {
    return (
        // Shop categories component
            <section className="flex py-10 ss:py-16 md:py-24 w-full md:w-[1100px] px-4 xs:px-6 md:px-0 mx-auto">
                {/* Parent container */}
                <div className="w-full flex flex-col ss:flex-row flex-wrap justify-between ss:gap-4 gap-16 md:gap-8">
                    {/* Headphones container */}
                    <Link to='/headphones' className=" text-elements flex flex-col p-1 border-transparent border-2 
                    focus:outline-none focus:border-dashed focus:border-2 focus:border-brightOrange
                     items-center relative h-[180px] flex-1 pt-[100px] bg-grey rounded-[10px] cursor-pointer hover:text-orange">
                        <div className="mb-5 top-[-50px] w-[150px] absolute h-auto ">
                            <img
                                src="/images/shared/desktop/image-headphones.png"
                                className="h-full w-full"
                            />
                        </div>
                        <h3 className="mb-4 text-[17px] font-bold tracking-[0.1em] text-black">
                            HEADPHONES
                        </h3>
                    <div className="flex gap-3 items-center mb-3">
                            <h4 className="text-[13px] font-medium ">
                                SHOP
                            </h4>
                            <img src="/images/shared/desktop/icon-arrow-right.svg" />
                        </div>
                    </Link>
                    {/* Speaker container */}
                    <Link to='/speakers' className=" text-elements flex flex-col p-1 border-transparent border-2 
                    focus:outline-none focus:border-dashed focus:border-2 focus:border-brightOrange
                     items-center relative h-[180px] flex-1 pt-[100px] bg-grey rounded-[10px] cursor-pointer hover:text-orange">
                        <div className="mb-5 top-[-50px] w-[150px] absolute h-auto ">
                            <img
                                src="/images/shared/desktop/image-speakers.png"
                                className="h-full w-full"
                            />
                        </div>
                        <h3 className="mb-4 text-[17px] font-bold tracking-[0.1em] text-black">
                            SPEAKERS
                        </h3>
                    <div className="flex gap-3 items-center mb-3">
                            <h4 className="text-[13px] font-medium">
                                SHOP
                            </h4>
                            <img src="/images/shared/desktop/icon-arrow-right.svg" />
                        </div>
                    </Link>
                    {/* Earphones container */}
                    <Link to='/earphones' className=" text-elements flex flex-col p-1 border-transparent border-2 
                    focus:outline-none focus:border-dashed focus:border-2 focus:border-brightOrange
                     items-center relative h-[180px] flex-1 pt-[100px] bg-grey rounded-[10px] cursor-pointer hover:text-orange">
                        <div className="mb-5 top-[-50px] w-[150px] absolute h-auto ">
                            <img
                                src="/images/shared/desktop/image-earphones.png"
                                className="h-full w-full"
                            />
                        </div>
                        <h3 className="mb-4 text-[17px] font-bold tracking-[0.1em] text-black">
                            EARPHONES
                        </h3>
                        <div className="flex gap-3 items-center mb-3">
                            <h4 className="text-[13px] font-medium ">
                                SHOP
                            </h4>
                            <img src="/images/shared/desktop/icon-arrow-right.svg" />
                        </div>
                    </Link>
                </div>
            </section>
    )
}

export default Categories
