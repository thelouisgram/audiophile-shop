import React from 'react'
import NameInput from './NameInput'
import PhoneNumberInput from './PhoneNumberInput'
import EmailInput from './EmailInput'

const BillingDetails = ({formData, errors, handleChange}) => {
  return (
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
  )
}

export default BillingDetails
