import React from 'react'
import { FaHeart, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className='flex flex-row h-16 w-full p-4 border-b bg-white border-gray-300 shadow-sm items-center'>
      <div className='flex flex-row w-full justify-around items-center mx-10'>
        <div className='flex flex-row gap-6'>
          <h2 className='text-base text-black'>Home</h2>
          <h2 className='text-base text-black'>Contact</h2>
        </div>
        <div className='flex flex-row gap-6'>
          <button className='cursor-pointer'>
            <FaSearch fill='' className='fill-black hover:fill-red-400'/>
          </button>
          <button className='cursor-pointer'>
            <FaHeart className='fill-black hover:fill-red-400'/>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header