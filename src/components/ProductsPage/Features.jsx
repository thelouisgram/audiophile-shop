import React from 'react'

const Features = ({product, includedItems}) => {
  return (
    <div className="flex mb-32">
          <div className="w-3/5">
            <h2 className="text-[32px] font-bold text-black uppercase w-[275px] leading-[1.1em] mb-6">
              FEATURES
            </h2>
            <p className="w-[600px] text-elements text-[15px] leading-[1.7em]">
              {product.features.split("\n\n").map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph}
                  <br />
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className="w-2/5 pl-20">
            <h2 className="text-[32px] font-bold text-black uppercase w-[275px] leading-[1.1em] mb-8">
              IN THE BOX
            </h2>
            <div className="flex flex-col gap-2">{includedItems}</div>
          </div>
        </div>
  )
}

export default Features
