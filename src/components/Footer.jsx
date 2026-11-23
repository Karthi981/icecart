import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-red-50'>
      <div className='m-12 pb-10 border-b border-gray-300'>
        <div className='grid grid-cols-3 gap-2 items-start justify-center'>
          <div className='flex flex-col items-start gap-2'>
            <a className='text-lg font-bold'>Explore Our Ice Creams</a>
            <a className='text-sm'>Classic Vanilla</a>
            <a className='text-sm'>Belgian Chocolate</a>
            <a className='text-sm'>Strawberry Delight</a>
            <a className='text-sm'>Butterscotch Crunch</a>
            <a className='text-sm'>Mango Magic</a>
            <a className='text-sm'>Cookies & Cream</a>
            <a className='text-sm'>All Ice Creams</a>
          </div>

          <div className='flex flex-col items-start gap-2'>
            <a className='text-lg font-bold'>Discover More</a>
            <a className='text-sm'>About Us</a>
            <a className='text-sm'>Our Story</a>
            <a className='text-sm'>Our Ingredients</a>
            <a className='text-sm'>Quality & Freshness</a>
            <a className='text-sm'>Seasonal Specials</a>
            <a className='text-sm'>Store Locator</a>
            <a className='text-sm'>Contact Us</a>
          </div>
          <div className='flex flex-col items-start gap-1'>
            <a className='text-lg font-bold'>Help and support</a>
            <a className='text-sm'>Frequently asked questions</a>
            <a className='text-sm'>File a report</a>
            <a className='text-sm'>Legal compliance</a>

            <h4 className='text-sm font-bold mt-4'>Accessibility</h4>
            <a className='text-sm'>Read our statement</a>

            <h4 className='text-sm font-bold mt-4'>Media</h4>
            <a className='text-sm'>Wallpapers</a>
            <a className='text-sm'>Brouchers</a>
            <a className='text-sm'>User Guides</a>

            <h4 className='text-sm font-bold mt-4'>Official channels</h4>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer