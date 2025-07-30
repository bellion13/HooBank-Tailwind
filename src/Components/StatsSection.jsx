import React from 'react'

const StatsSection = () => {
    return (
        <div className='w-full max-w-[1240px] mx-auto p-10 '>
            <div className='flex justify-between items-center my-10 md:flex-row flex-col gap-4'>
                <div className='flex justify-center items-center gap-2'>
                    <span className=' text-4xl font-bold'>
                        3800+
                    </span>
                    <span className=' text-2xl bg-gradient-to-r from-[#33BBCF] to-white bg-clip-text text-transparent '>
                        User Active
                    </span>
                </div>
                <span className=' text-gray-400 '>|</span>
                <div className='flex justify-center items-center gap-2'>
                    <span className=' text-4xl font-bold'>
                        230+
                    </span>
                    <span className=' text-2xl bg-gradient-to-r from-[#33BBCF] to-white bg-clip-text text-transparent '>
                        TRUSTED BY COMPANY
                    </span>
                </div>
                <span className=' text-gray-400 '>|</span>

                <div className='flex justify-center items-center gap-2'>
                    <span className=' text-4xl font-bold'>
                        $230M+
                    </span>
                    <span className=' text-2xl bg-gradient-to-r from-[#33BBCF] to-white bg-clip-text text-transparent '>
                        TRANSACTION
                    </span>
                </div>
            </div>
        </div>
    )
}

export default StatsSection


