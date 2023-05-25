import React from 'react'

const RemoveAllBtn = ({removeAll}) => {
  return (
      <div
          onClick={removeAll}
          className="text-elements underline text-[15px] cursor-pointer hover:text-orange"
      >
          Remove All
      </div>
  )
}

export default RemoveAllBtn
