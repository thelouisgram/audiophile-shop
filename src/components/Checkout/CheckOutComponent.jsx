import React, { useState } from "react";
import NameInput from "./inputs/NameInput";
import PhoneNumberInput from "./inputs/PhoneNumberInput";
import EmailInput from "./inputs/EmailInput";
import ShippingInfo from "./inputs/ShippingInfo";
import Summary from './Summary'
import { updateCompleteOrder, updateThankYou, updateCart } from '../../store/storeSlice'
import { useDispatch, useSelector } from "react-redux";

const CheckOutComponent = ({ items }) => {
    const dispatch = useDispatch()
    const { cartArray, completeOrder, grandTotal } = useSelector((state) => state.app)
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        address: "",
        city: "",
        country: "",
        postalCode: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        address: "",
        city: "",
        country: "",
        postalCode: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: "",
            });
        }
    };

    const validateForm = () => {
        let valid = true;
        const updatedErrors = {
            name: "",
            phoneNumber: "",
            email: "",
            address: "",
            city: "",
            country: "",
            postalCode: "",
        };

        if (formData.name.trim() === "") {
            updatedErrors.name = "Name is required.";
            valid = false;
        }

        if (formData.phoneNumber.trim() === "") {
            updatedErrors.phoneNumber = "Phone number is required.";
            valid = false;
        } else if (!/^\d{11}$/.test(formData.phoneNumber)) {
            updatedErrors.phoneNumber = "Invalid phone number.";
            valid = false;
        }

        if (formData.email.trim() === "") {
            updatedErrors.email = "Email address is required.";
            valid = false;
        } else if (
            !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(formData.email)
        ) {
            updatedErrors.email = "Invalid email address.";
            valid = false;
        }

        if (formData.address.trim() === "") {
            updatedErrors.address = "Your Address is required.";
            valid = false;
        }

        if (formData.city.trim() === "") {
            updatedErrors.city = "City is required.";
            valid = false;
        }

        if (formData.country.trim() === "") {
            updatedErrors.country = "Country is required.";
            valid = false;
        }

        if (formData.postalCode.trim() === "") {
            updatedErrors.postalCode = "Postal code is required.";
            valid = false;
        } else if (!/^\d{5}$/.test(formData.postalCode)) {
            updatedErrors.postalCode = "Invalid Postal code.";
            valid = false;
        }

        setErrors(updatedErrors);
        return valid;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // if (validateForm()) {
        dispatch(updateCompleteOrder([...completeOrder, 
            { cartItems: [...cartArray],
                  personalData: formData,
                   grandTotal: grandTotal }
                ]))
        dispatch(updateThankYou(true))
        setFormData({
            name: "",
            phoneNumber: "",
            email: "",
            address: "",
            city: "",
            country: "",
            postalCode: "",
        })
        dispatch(updateCart([]))
        // }
    };

    console.log(completeOrder)

    return (
        <div className="flex gap-8 w-[1100px] mx-auto ">
            <div className='bg-white rounded-[10px] flex flex-1 p-10 h-auto'>
                <div>
                    <h1 className="font-bold text-[28px] mb-8">CHECKOUT</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col w-full">
                        <div className='mb-8'>
                            <h3 className="text-orange text-[14px] font-bold mb-5">
                                BILLING DETAILS
                            </h3>
                            <div className="w-full flex gap-6 mb-6">
                                <NameInput
                                    value={formData.name}
                                    error={errors.name}
                                    onChange={handleChange}
                                />
                                <PhoneNumberInput
                                    value={formData.phoneNumber}
                                    error={errors.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <EmailInput
                                value={formData.email}
                                error={errors.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <h3 className="text-orange text-[14px] font-bold mb-5">
                                SHIPPING INFO
                            </h3>
                            <div className="w-full mb-6">
                                <ShippingInfo
                                    address={formData.address}
                                    city={formData.city}
                                    country={formData.country}
                                    postalCode={formData.postalCode}
                                    errors={errors}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
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
                    </form>
                </div>
            </div>
            <div className='w-[500px]'>
                <Summary items={items} handleSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default CheckOutComponent;
