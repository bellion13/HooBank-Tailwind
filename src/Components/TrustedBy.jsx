import React from 'react'
import airbnb from '../assets/assets/airbnb.png'
import binance from '../assets/assets/binance.png'
import coinbase from '../assets/assets/coinbase.png'
import dropbox from '../assets/assets/dropbox.png'
const TrustedBy = () => {
    return (
        <div className='w-full max-w-[1240px] mx-auto mt-16'>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-6 items-center md:p-4 p-2'>
                <div><img className='h-12 object-contain mx-auto' src={airbnb} alt="" /></div>
                <div><img className='h-12 object-contain mx-auto' src={binance} alt="" /></div>
                <div><img className='h-12 object-contain mx-auto' src={coinbase} alt="" /></div>
                <div><img className='h-12 object-contain mx-auto' src={dropbox} alt="" /></div>
            </div>
        </div>
    )
}

export default TrustedBy