import React from 'react'

const PaymentMethod = () => {
  return (
      <div className='mb-8'>
          <h3 className="text-orange text-[14px] font-bold mb-5">
              PAYMENT METHOD
          </h3>
          <div className='w-[300px] mb-8 border-[1px] border-greyBorder p-4 rounded-[5px]  flex gap-3 font-bold text-[15px] items-center'>
              <div className='flex items-center justify-center border-greyBorder border-[1px] p-1 rounded-full'>
                  <div className='w-3 h-3 bg-orange rounded-full' />
              </div>
              <h3>Cash on Delivery</h3>
          </div>
          <div className='flex w-full gap-6 items-center'>
              <img src='/images/checkout/icon-cash-on-delivery.svg' className='w-auto h-[48px]' />
              <p className='text-elements text-[14px]'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
          </div>
      </div>
  )
}

export default PaymentMethod
