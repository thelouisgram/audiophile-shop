import React from 'react'

const SingleItem = ({items, currentItems, handleToggleItems
}) => {
  return (
      <div className="bg-grey px-4 w-1/2 flex flex-col gap-2 justify-center max-h-[125px]">
          {items}
          {currentItems.length > 1 && (
              <p
                  onClick={handleToggleItems}
                  className="hover:underline text-elements text-center text-[14px] cursor-pointer"
              >
                  and {currentItems.length - 1} other item{currentItems.length > 2 ? 's' : ''}
              </p>
          )}
      </div>
  )
}

export default SingleItem
