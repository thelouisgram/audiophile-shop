import React from 'react'

const YouMayLike = ({others}) => {
  return (
      <div className="w-full mb-12">
          <div className="w-full text-center mb-16">
              <h2 className="text-[32px] font-bold text-black uppercase leading-[1.1em] ">
                  YOU MAY ALSO LIKE
              </h2>
          </div>
          <div className="flex w-full gap-8">{others}</div>
      </div>
  )
}

export default YouMayLike
