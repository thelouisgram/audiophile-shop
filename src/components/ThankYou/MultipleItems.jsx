import React from "react";

const MultipleItems = ({items, handleToggleItems}) => {
  return (
    <div className="bg-grey px-3 xs:px-4 ss:w-1/2 flex flex-col py-4 gap-3 h-[125px] ss:h-auto md:h-[125px] overflow-auto scroll-container">
      {items}
      <p
        onClick={handleToggleItems}
        className="hover:underline text-elements border-[1px] py-[2px] px-1 border-elements text-center text-[14px] mb-4 cursor-pointer"
      >
        see less
      </p>
    </div>
  );
};

export default MultipleItems;
