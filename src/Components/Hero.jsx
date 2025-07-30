import React from 'react'
import bulk from '../assets/assets/Discount.svg'
import getstarted from '../assets/assets/arrow-up.svg'
import robot from '../assets/assets/robot.png'
const Hero = () => {
    return (
        <div className='w-full max-w-[1240px] mx-auto'>
            <div className='flex justify-between items-center md:flex-row flex-col md:gap-0 gap-10 px-4 md:px-0'>
                <div className='flex flex-col gap-4 mt-10'>
                    <div className='flex items-center '>
                        <img src={bulk} alt="" />
                        20% <span className=' text-gray-400 p-1'> DISCOUNT FOR</span> 1 MONTH <span className=' text-gray-400 p-1'> ACCOUNT</span>
                    </div>
                    <div className='flex justify-between font-bold text-6xl'>
                        <div className='flex flex-col '>
                            The Next <span className='mt-5 bg-gradient-to-r from-[#33BBCF] to-white bg-clip-text text-transparent'>Generation</span>

                        </div>
                        <div className='flex flex-col justify-center items-center border-2 border-[#33BBCF] rounded-[50%] p-5 text-[18px] mb-8'>
                            <div className='flex items-center gap-2 text-[#33BBCF]'>
                                <span>Get</span>
                                <img className='w-[22x]' src={getstarted} alt="" />
                            </div>
                            <span className='text-[#33BBCF]'>Started</span>
                        </div>
                    </div>
                    <div className='font-bold text-6xl '>
                        Payment Method.
                    </div>
                    <div className='text-[18px] text-gray-400 mt-6'>
                        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                        We examine annual percentage rates, annual fees.
                    </div>
                </div>
                <div >
                    <img src={robot} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero