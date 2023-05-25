import React from 'react'

const Error404 = () => {
    const goBack = () => {
        window.history.back();
    };
  return (
    <div className='h-full'>
          {/* Go Back Button */}
          <div
              className="text-elements cursor-pointer hover:underline w-[100px]"
              onClick={goBack}
          >
              Go Back
          </div>
          <div className='w-full h-full flex items-center justify-center py-12'>
              <div className='flex h-auto gap-8 items-center'>
                  <h2 className='text-black font-bold text-[28px]'>404</h2>
                  <div className='w-[1px] h-[50px] bg-elements' />
                  <p className='text-black text-[16px]'>THIS PAGE COULD NOT BE FOUND.</p>
              </div>
          </div>
    </div>
  )
}

export default Error404
