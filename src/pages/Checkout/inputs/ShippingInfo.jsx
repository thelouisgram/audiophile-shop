// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';

const ShippingInfo = ({ address, city, country, postalCode, errors, onChange }) => {
    return (
        <div>
            <div className="flex flex-col w-full md:w-auto mb-6">
                <div className="flex justify-between items-center w-full mb-2">
                    <label
                        className={`text-[13px] font-bold ${errors.address ? "text-strawberryRed" : "text-black"
                            }`}
                        htmlFor="address"
                    >
                       Your Address
                    </label>
                    {errors.address && (
                        <span className="text-[13px] text-strawberryRed">{errors.address}</span>
                    )}
                </div>
                <input
                    id="address"
                    type="text"
                    name="address"
                    placeholder="1143 Williams Avenue"
                    value={address}
                    onChange={onChange}
                    className={`${errors.address ? "border-strawberryRed" : "border-greyBorder"
                        } px-4 rounded-[5px] py-4 border-[1px] w-full text-[14px] placeholder:text-elements 
                        placeholder:font-medium font-bold focus:outline-[1px] focus:outline-orange`}
                />
            </div>

            <div className="flex flex-col ss:flex-row gap-6 md:gap-0 justify-between mb-6">
            <div className="flex flex-col w-full md:w-auto">
                <div className="flex justify-between items-center w-full md:w-[300px] mb-2">
                    <label
                        className={`text-[13px] font-bold ${errors.city ? "text-strawberryRed" : "text-black"
                            }`}
                        htmlFor="city"
                    >
                        City
                    </label>
                    {errors.city && (
                        <span className="text-[13px] text-strawberryRed">{errors.city}</span>
                    )}
                </div>
                <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder='New York'
                    value={city}
                    onChange={onChange}
                    className={`${errors.city ? "border-strawberryRed" : "border-greyBorder"
                        } px-4 rounded-[5px] py-4 border-[1px] w-full md:w-[300px] text-[14px] placeholder:text-elements placeholder:font-medium font-bold focus:outline-[1px] focus:outline-orange`}
                />
            </div>

            <div className="flex flex-col w-full md:w-auto">
                <div className="flex justify-between items-center w-full md:w-[300px] mb-2">
                    <label
                        className={`text-[13px] font-bold ${errors.country ? "text-strawberryRed" : "text-black"
                            }`}
                        htmlFor="country"
                    >
                        Country
                    </label>
                    {errors.country && (
                        <span className="text-[13px] text-strawberryRed">{errors.country}</span>
                    )}
                </div>
                <input
                    id="country"
                    type="text"
                    name="country"
                    placeholder="England"
                    value={country}
                    onChange={onChange}
                    className={`${errors.country ? "border-strawberryRed" : "border-greyBorder"
                        } px-4 rounded-[5px] py-4 border-[1px] w-full md:w-[300px] text-[14px] placeholder:text-elements placeholder:font-medium font-bold focus:outline-[1px] focus:outline-orange`}
                />
            </div>
            </div>

            <div className="flex flex-col ss:flex-row gap-6 md:gap-0 justify-between mb-6">
            <div className="flex flex-col w-auto ss:w-1/2 md:w-full">
                <div className="flex justify-between items-center w-full md:w-[300px] mb-2">
                    <label
                        className={`text-[13px] font-bold ${errors.postalCode ? "text-strawberryRed" : "text-black"
                            }`}
                        htmlFor="postalCode"
                    >
                        Postal Code
                    </label>
                    {errors.postalCode && (
                        <span className="text-[13px] text-strawberryRed">{errors.postalCode}</span>
                    )}
                </div>
                <input
                    id="postalCode"
                    type="text"
                    name="postalCode"
                    placeholder="11430"
                    value={postalCode}
                    onChange={onChange}
                    className={`${errors.postalCode ? "border-strawberryRed" : "border-greyBorder"
                        } px-4 rounded-[5px] py-4 border-[1px] w-full md:w-[300px] text-[14px] placeholder:text-elements placeholder:font-medium font-bold focus:outline-[1px] focus:outline-orange`}
                />
            </div>
            <div className='ss:w-1/2 md:w-full' />
            </div>
        </div>
    );
};

ShippingInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ShippingInfo;
