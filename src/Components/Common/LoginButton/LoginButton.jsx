'use client'
import React from 'react'

const LoginButton = ({btnClick,btnName}) => {
  return (
    <button
    onClick={btnClick}
    className='p-2 px-4 flex justify-center items-center bg-black text-[14px] md:text-[16px] text-white rounded-full leading-[21.6px] font-normal cursor-not-allowed'
    >
      {btnName}
    </button>
  )
}

export default LoginButton
