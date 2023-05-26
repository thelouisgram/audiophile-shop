import React from 'react';
import PropTypes from 'prop-types';

const EmailInput = ({ value, error, onChange }) => {
    return (
        <div className="flex flex-col w-auto">
            <div className="flex justify-between items-center w-[300px] mb-2">
                <label
                    className={`text-[13px] font-bold ${!error ? "text-black" : "text-strawberryRed"
                        }`}
                    htmlFor="email"
                >
                    Email Address
                </label>
                {error && (
                    <span className={`text-[13px] text-strawberryRed`}>{error}</span>
                )}
            </div>
            <input
                id="email"
                type="email"
                name="email"
                value={value}
                placeholder='alexei@mail.com'
                onChange={onChange}
                className={`${error ? "border-strawberryRed" : "border-greyBorder"} px-4 rounded-[5px] py-4 border-[1px] w-[300px] text-[14px] 
        placeholder:text-elements placeholder:font-medium font-bold focus:outline-[1px] focus:outline-orange`}
            />
        </div>
    );
};

EmailInput.propTypes = {
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default EmailInput;
