import React from 'react'
import Star from '../assets/assets/Star.svg'
import Shield from '../assets/assets/Shield.svg'
import Send from '../assets/assets/Send.svg'
const Feature = () => {
    return (
        <div className='w-full max-w-[1240px] mx-auto '>
            <div className='flex flex-col md:flex-row justify-between items-center '>
                <div className='flex flex-col gap-4 flex-1'>
                    <div className='text-4xl font-bold md:text-5xl'>
                        You do the business, we’ll handle the money.
                    </div>
                    <div className='text-gray-400 text-[16px] tracking-wide' >
                        With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
                    </div>
                    <button className="w-[160px] text-black px-6 py-3 text-lg font-semibold tracking-wide bg-gradient-to-t from-[#33BBCF] to-white rounded-md hover:opacity-90 transition duration-300 cursor-pointer">
                        Get Started
                    </button>

                </div>
                <div className='flex gap-3 flex-1 mt-10 md:mt-0 flex-col md:pl-10'>
                    <div className='flex gap-4 items-center hover:bg-gradient-to-t from-black to-gray-400 p-6 rounded-md transition duration-500 cursor-pointer'>
                        <img src={Star} alt="" />
                        <div>
                            <div className='text-[18px]'>
                                Rewards
                            </div>
                            <div className='text-gray-400 text-[16px]'>
                                The best credit cards offer some tantalizing combinations of promotions and prizes
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center hover:bg-gradient-to-t from-black to-gray-400 p-6 rounded-md transition duration-500 cursor-pointer'>
                        <img src={Shield} alt="" />
                        <div>
                            <div className='text-[18px]'>
                                100% Secured
                            </div>
                            <div className='text-gray-400 text-[16px]'>
                                We take proactive steps make sure your information and transactions are secure.
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center hover:bg-gradient-to-t from-black to-gray-400 p-6 rounded-md transition duration-500 cursor-pointer'>
                        <img src={Send} alt="" />
                        <div>
                            <div className='text-[18px]'>
                                Balance Transfer
                            </div>
                            <div className='text-gray-400 text-[16px]'>
                                A balance transfer credit card can save you a lot of money in interest charges.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature