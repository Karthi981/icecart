import React from 'react'
import { motion } from 'framer-motion'
import PolaroidLineCarousel from '../components/HangingCarousel';

const HomePage = () => {
  return (
    <main className='overflow-x-hidden'>
      <section className='relative flex flex-col md:flex-row items-center min-h-[620px] bg-gradient-to-br from-rose-100 via-red-200 to-rose-300'>
      
        <div className='relative z-10 w-full md:w-1/2 h-full flex flex-col items-start justify-center p-8 md:p-16'>
          
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
            className='w-24 h-24 md:w-36 md:h-36 mb-4 md:mb-0 md:absolute md:top-5 md:right-12 drop-shadow-md pointer-events-none'
            src='/src/assets/icecream.webp'
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
          className='w-full md:w-1/2 h-[380px] md:h-[620px] overflow-hidden md:rounded-bl-[4rem] shadow-2xl'
        >
          <motion.img
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='object-cover w-full h-full'
            src='/src/assets/icecart-image-1.jpeg'
            alt='Colorful artisanal ice cream cones'
          />
        </motion.div>
      </section>
      <section>
        <PolaroidLineCarousel />
      </section>

      <section>
        <h2></h2>
      </section>
    </main>
  )
}

export default HomePage;
