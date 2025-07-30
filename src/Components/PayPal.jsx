import React from 'react'
import bill from '../assets/assets/bill.png'
import apple from '../assets/assets/apple.svg'
import google from '../assets/assets/google.svg'


const PayPal = () => {
  return (
    <div className='w-full max-w-[1240px] mx-auto mt-16 p-0 md:p-2'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-10 '>
        <div className='flex flex-col items-center md:items-start gap-4'>
          <img src={bill} alt="" />
        </div>
        <div className='flex flex-col items-start gap-8'> 
          <div className='font-bold md:text-5xl text-4xl '>
            Easily control your billing & invoicing.
          </div>
          <div className='text-gray-500 md:text-lg '>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
          </div>
          <div className='flex items-center gap-4'>
            <img src={apple} alt="" />
            <img src={google} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayPal