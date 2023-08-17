import React from 'react'

const YouMayLike = ({others}) => {
  return (
      <div className="w-full mb-24">
          <div className="w-full text-center mb-14 md:mb-16">
              <h2 className="text-[24px] xs:text-[28px] md:text-[32px] font-bold text-black uppercase leading-[1.1em] ">
                  YOU MAY ALSO LIKE
              </h2>
          </div>
          <div className="flex flex-col ss:flex-row w-full gap-14 ss:gap-6 md:gap-8">{others}</div>
      </div>
  )
}

export default YouMayLike
