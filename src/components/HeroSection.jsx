import React from 'react'
import { motion } from 'framer-motion'
import heroCreamImage from '../assets/icecart-image-1.jpeg'
import floatingCreamImage from '../assets/icecream.webp'

const HeroSection = () => {
  const scrollToCategories = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className='relative flex min-h-[calc(100vh-80px)] flex-col items-center overflow-hidden bg-gradient-to-br from-rose-100 via-rose-200 to-rose-300 md:flex-row'>
        <div className='relative z-10 flex h-full w-full flex-col items-start justify-center p-8 md:w-1/2 md:p-16'>
          
          <motion.img
            animate={{
              y: [0, -14, 0],
              rotate: [-4, 6, -4],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='pointer-events-none mb-4 h-24 w-24 drop-shadow-md md:absolute md:right-12 md:top-5 md:mb-0 md:h-36 md:w-36'
            src={floatingCreamImage}
            alt='icecream icon'
          />
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='text-4xl font-extrabold tracking-tight text-rose-950 max-w-sm leading-tight text-start'
          >
            The best ice cream brands
          </motion.h1>

          
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className='text-xl md:text-2xl font-medium text-rose-900/80 max-w-md mt-4'
          >
            All your faves, all in one place.
          </motion.p>

          
          <motion.button
            type='button'
            onClick={scrollToCategories}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className='text-lg font-semibold mt-8 py-3.5 px-8 text-white rounded-xl bg-gray-900 hover:bg-rose-800 shadow-lg shadow-rose-900/25 transition-colors cursor-pointer'
          >
            Explore Flavors
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='h-[380px] w-full overflow-hidden shadow-2xl md:h-[calc(100vh-80px)] md:w-1/2 md:rounded-bl-[4rem]'
        >
          <motion.img
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='object-cover w-full h-full'
            src={heroCreamImage}
            alt='Colorful artisanal ice cream cones'
          />
        </motion.div>
      </section>
  )
}

export default HeroSection