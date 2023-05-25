import React from 'react'
import { Link } from "react-router-dom"


const Categories = () => {
    return (
            <section className="flex py-24 w-[1100px] mx-auto">
                <div className="w-full flex flex-wrap justify-between gap-8">
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
                        <div className="flex gap-3 items-center">
                            <h4 className="text-[13px] font-medium ">
                                SHOP
                            </h4>
                            <img src="/images/shared/desktop/icon-arrow-right.svg" />
                        </div>
                    </Link>
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
                        <div className="flex gap-3 items-center">
                            <h4 className="text-[13px] font-medium ">
                                SHOP
                            </h4>
                            <img src="/images/shared/desktop/icon-arrow-right.svg" />
                        </div>
                    </Link>
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
                        <div className="flex gap-3 items-center">
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
