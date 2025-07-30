import React from 'react'
import bettercard from '../assets/assets/card.png'
const BetterCard = () => {
    return (
        <div className='w-full max-w-[1240px] mx-auto mt-16'>
            <div className='flex flex-col md:flex-row items-center justify-between '>
                <div className='mb-8 md:mb-0'>
                    <div className='text-4xl md:text-5xl font-bold mb-4'>
                        Find a better card deal in few easy steps.
                    </div>
                    <div className='text-base md:text-lg  text-gray-400 mb-6'>
                        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                    </div>
                    <button className='bg-gradient-to-t from-[#33BBCF] to-white text-black px-6 py-3 rounded-md hover:opacity-90 text-lg font-semibold cursor-pointer' >
                        Get Started
                    </button>
                </div>
                <div className='md:pl-2.5 '>
                    <img src={bettercard} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BetterCard