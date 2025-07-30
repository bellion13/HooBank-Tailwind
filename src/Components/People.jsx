import React from 'react'
import quote from '../assets/assets/quotes.svg'
import people1 from '../assets/assets/people01.png'
import people2 from '../assets/assets/people02.png'
import people3 from '../assets/assets/people03.png'
const People = () => {
    return (
        <div className='w-full max-w-[1240px] mx-auto mt-16'>
            <div className='flex flex-col  justify-center '>
                <div className='flex flex-col md:flex-row'>
                    <div className='text-4xl md:text-5xl font-bold '>
                        What people are saying about us
                    </div>
                    <div className='text-gray-400 text-base md:text-lg md:ml-4 my-4'>
                        Everything you need to accept card payments and grow your business anywhere on the planet.
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8'>
                    <div className='grid p-4 md:p-8 hover:bg-[linear-gradient(30deg,_#33BBCF,_#ffffff)] rounded-lg shadow-lg cursor-pointer  hover:text-black'>
                        <img src={quote} alt="" />
                        <div className='text-base md:text-lg  my-4'>
                            Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                        </div>
                        <div className='flex items-center gap-4'>
                            <img className=' w-14 h-14' src={people1} alt="" />
                            <div>
                                <div className='text-base md:text-lg'>
                                    Herman Jensen
                                </div>
                                <div className='text-base text-gray-500'>
                                    Founder & Leader
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className='grid p-4 md:p-8 hover:bg-[linear-gradient(30deg,_#33BBCF,_#ffffff)] rounded-lg shadow-lg cursor-pointer  hover:text-black'>
                        <img src={quote} alt="" />
                        <div className='text-base md:text-lg  my-4'>
                            Money makes your life easier. If you're lucky to have it, you're lucky.
                        </div>
                        <div className='flex items-center gap-4'>
                            <img className=' w-14 h-14' src={people2} alt="" />
                            <div>
                                <div className='text-base md:text-lg'>
                                    Steve Mark
                                </div>
                                <div className='text-base text-gray-500'>
                                    Founder & Leader
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid p-4 md:p-8 hover:bg-[linear-gradient(30deg,_#33BBCF,_#ffffff)] rounded-lg shadow-lg cursor-pointer  hover:text-black'>
                        <img src={quote} alt="" />
                        <div className='text-base md:text-lg  my-4'>
                            It is usually people in the money business, finance, and international trade that are really rich.
                        </div>
                        <div className='flex items-center gap-4'>
                            <img className=' w-14 h-14' src={people3} alt="" />
                            <div>
                                <div className='text-base md:text-lg'>
                                    Kenn Gallagher
                                </div>
                                <div className='text-base text-gray-500'>
                                    Founder & Leader
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default People