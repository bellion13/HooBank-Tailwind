import React from 'react'
import { useState } from 'react'
import logo from '../assets/assets/logo.svg'
import menu from '../assets/assets/menu.svg'
import close from '../assets/assets/close.svg'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full max-w-[1240px] mx-auto h-[80px] px-4'>
      <div className='flex justify-between items-center h-full'>
        <div>
          <img className=' w-40' src={logo} alt="" />
        </div>
        <ul className='hidden md:flex space-x-8 text-lg'>
          <li className='hover:text-[#33BBCF] cursor-pointer '>Home</li>
          <li className='hover:text-[#33BBCF] cursor-pointer '>About</li>
          <li className='hover:text-[#33BBCF] cursor-pointer '>Features</li>
          <li className='hover:text-[#33BBCF] cursor-pointer '>Solution</li>
        </ul>

        {/* Menu Icon - Mobile */}
        <div className='md:hidden '>
          <button onClick={() => setIsOpen(!isOpen)}>
            <img className='cursor-pointer' src={isOpen ? close : menu} alt="Menu Toggle" />
          </button>
        </div>
      </div>
      {isOpen && (
        <ul className='absolute left-0 top-[80px] w-full bg-black text-white flex flex-col items-center space-y-4 text-lg z-50 p-6 md:hidden '>
          <li className='hover:text-[#33BBCF] cursor-pointer'>Home</li>
          <li className='hover:text-[#33BBCF] cursor-pointer'>About</li>
          <li className='hover:text-[#33BBCF] cursor-pointer'>Features</li>
          <li className='hover:text-[#33BBCF] cursor-pointer'>Solution</li>
        </ul>
      )}
    </div>
  )
}
export default Header