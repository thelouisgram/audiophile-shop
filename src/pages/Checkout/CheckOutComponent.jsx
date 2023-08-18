/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ShippingInfo from "./inputs/ShippingInfo";
import Summary from "./Summary";
import {
  updateCompleteOrder,
  updateThankYou,
  updateCart,
} from "../../store/storeSlice";
import { useDispatch, useSelector } from "react-redux";
import BillingDetails from "./inputs/BillingDetails/BillingDetails";
import PaymentMethod from "./PaymentMethod";
import { scrollToTop } from "../../Utils/Shared";

const CheckOutComponent = ({ items }) => {
  const dispatch = useDispatch();
  // Destructuring global state
  const { cartArray, completeOrder, grandTotal } = useSelector(
    (state) => state.app
  );
  // Local state to hold personal form
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  // Local state to process form error
  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  // Function to handle change in form
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
    if (validateForm()) {
      dispatch(
        updateCompleteOrder([
          ...completeOrder,
          {
            cartItems: [...cartArray],
            personalData: formData,
            grandTotal: grandTotal,
          },
        ])
      );
      dispatch(updateThankYou(true));
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        address: "",
        city: "",
        country: "",
        postalCode: "",
      });
      dispatch(updateCart([]));
    } else {
      // Scroll to the top on re-render
      scrollToTop();
    }
  };

  return (
    // Parent container
    <div className="flex flex-col md:flex-row gap-8 md:w-[1100px] mx-auto w-full ">
      <div className="bg-white rounded-[10px] w-full px-3 py-6 xs:p-6 flex md:flex-1 md:p-10 h-auto">
        <div>
          <h1 className="font-bold text-[20px] xs:text-[28px] mb-8">
            CHECKOUT
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            {/* Billing section */}
            <BillingDetails
              formData={formData}
              errors={errors}
              handleChange={handleChange}
            />
            <div>
              <h3 className="text-orange text-[14px] font-bold mb-5">
                SHIPPING INFO
              </h3>
              <div className="w-full mb-6">
                {/* Shipping section */}
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
            <PaymentMethod />
          </form>
        </div>
      </div>
      <div className="w-full md:w-[500px]">
        <Summary items={items} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default CheckOutComponent;
