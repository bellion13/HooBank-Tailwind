import React from 'react'

const CallToAction = () => {
    return (
        <div className='w-full max-w-[1240px] mx-auto mt-16'>
            <div className=' flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-black to-gray-400 py-14 rounded-lg pr-16'>
                <div className='flex flex-col  space-y-4 mb-6'>
                    <div className='md:text-5xl text-4xl font-bold'>Let’s try our service now!</div>
                    <p className='md:text-lg text-base'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
                <button class=" w-[160px] text-black px-6 py-3 text-lg font-semibold tracking-wide bg-gradient-to-t from-[#33BBCF] to-white rounded-md hover:opacity-90 transition duration-300 cursor-pointer">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default CallToAction