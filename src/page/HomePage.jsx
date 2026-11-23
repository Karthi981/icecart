import React from 'react'

const HomePage = () => {
  return (
    <main>
  <section className='relative flex flex-col items-start h-[620px]'>
    <div className='bg-red-300 w-full h-full flex flex-col text-start items-start justify-center p-10'>
        <h2 className='text-4xl'>The best ice cream brands</h2>
        <p className='text-2xl text-aqua-800'>
          All your faves, all in one place.
        </p>
        <button className='text-lg mt-4 py-3 px-6 text-zinc-100 rounded-xl bg-blue-600'>Explore</button>
    </div>
    <div className='absolute top-0 right-0 w-1/2 h-full overflow-hidden rounded-bl-4xl'>
      <img 
        className='object-cover w-full h-full' 
        src='/src/assets/icecart-image-1.jpeg' 
        alt='banner' 
      />
    </div>
  </section>
</main>
  )
}

export default HomePage