import React from 'react'
import logofooter from '../assets/assets/logo.svg'
import fb from '../assets/assets/facebook.svg'
import ig from '../assets/assets/instagram.svg'
import tw from '../assets/assets/twitter.svg'
import li from '../assets/assets/linkedin.svg'
const Footer = () => {
    return (

        <div className='w-full max-w-[1240px] mx-auto mt-8'>
            <div className='py-16'>
                <div className='grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-4 md:gap-8 px-4 md:px-0 text-center md:text-left'>
                    <div>
                        <img src={logofooter} alt="" />
                        <div className='text-gray-500 mt-6'>
                            A new way to make the payments easy, reliable and secure.
                        </div>
                    </div>
                    <div>
                        <h3 className=' text-lg ' >Usefull Links</h3>
                        <ul className='text-gray-500 text-base mt-4 space-y-2'>
                            <li>Content</li>
                            <li>How it Works</li>
                            <li>Create</li>
                            <li>Explore</li>
                            <li>Terms & Services</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className=' text-lg ' >Community</h3>
                        <ul className='text-gray-500 text-base mt-4 space-y-2'>
                            <li>Help Center</li>
                            <li>Partners</li>
                            <li>Suggestions</li>
                            <li>Blog</li>
                            <li>Newsletters</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className=' text-lg ' >Partner</h3>
                        <ul className='text-gray-500 text-base mt-4 space-y-2'>
                            <li>Our Partner</li>
                            <li>Become a Partner</li>

                        </ul>
                    </div>
                </div>


                <div className='flex justify-between items-center mt-8 border-t border-gray-300 pt-4'>
                    <div className='text-gray-500'>
                        Copyright &copy; 2021 HooBank. All Rights Reserved.
                    </div>
                    <div>
                        <ul className='flex gap-4'>
                            <li><img src={ig} alt="" /></li>
                            <li><img src={fb} alt="" /></li>
                            <li><img src={tw} alt="" /></li>
                            <li><img src={li} alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer