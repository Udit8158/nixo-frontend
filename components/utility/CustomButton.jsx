import React from 'react'

const CustomButton = ({children, customClasses}) => {
  return (
    <button className={`px-6 py-2 bg[blue] hover:opacity-60 ${[...customClasses]}`}>
        {children}
    </button>
  )
}

export default CustomButton
