import React from "react";
import PropTypes from 'prop-types';

const PhoneNumberInput = ({ value, error, onChange }) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex justify-between items-center w-full md:w-[300px] mb-2">
        <label
          className={`text-[13px] font-bold ${!error ? "text-black" : "text-strawberryRed"
            }`}
          htmlFor="number"
        >
          Phone Number
        </label>
        {error && (
          <span className={`text-[13px] text-strawberryRed `}>{error}</span>
        )}
      </div>
      <input
        id="number"
        type="tel"
        name="phoneNumber"
        value={value}
        placeholder="0814-555-0316"
        onChange={onChange}
        className={`${error ? "border-strawberryRed" : "border-greyBorder"} px-4 rounded-[5px] py-4 border-[1px] w-full md:w-[300px] text-[14px] 
        placeholder:text-elements placeholder:font-medium font-bold focus:outline-[1px] focus:outline-orange`}
      />
    </div>
  );
};

PhoneNumberInput.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};


export default PhoneNumberInput;
