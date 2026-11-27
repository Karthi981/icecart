import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const FavouritePage = () => {
  const dispatch = useDispatch();
  const favouriteProducts = useSelector((state)=> state.favourites.favouriteProducts);
  
    return (
      <main className='min-h-screen bg-[#f7f4ef] px-5 py-14 text-[#172033] selection:bg-rose-900 selection:text-white sm:px-8 md:py-20'>
        <div className='mx-auto max-w-7xl'>
          <header className='mx-auto mb-12 max-w-2xl text-center md:mb-16'>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-rose-900'>
              A little scoop of happiness
            </p>
            <h1 className='font-serif text-4xl font-medium tracking-tight text-[#172033] sm:text-5xl md:text-6xl'>
              Your Favourites
            </h1>
            <div className='mx-auto mt-7 h-px w-14 bg-rose-900/40' />
          </header>
  
          <section aria-label='Our ice cream flavors'>
            <div className='mb-5 flex items-center justify-between border-b border-stone-300/80 pb-3 text-sm text-stone-500'>
              <span>Made for your next happy moment</span>
              <span>{favouriteProducts.length} flavors</span>
            </div>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7'>
              {favouriteProducts.map((product) => (
                <article
                  key={product.id}
                  className='group flex h-full flex-col rounded-3xl border border-stone-200/80 bg-white p-3 shadow-[0_6px_24px_rgba(38,32,25,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(38,32,25,0.12)] sm:p-4'
                >
                  <div className='overflow-hidden rounded-2xl bg-[#f5f1ea]'>
                    <img
                      src={product.image}
                      alt={product.name}
                      loading='lazy'
                      className='aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]'
                    />
                  </div>
                  <div className='flex flex-1 flex-col px-2 pb-2 pt-5 sm:px-3'>
                    <div className='flex items-start justify-between gap-4'>
                      <h2 className='font-serif text-xl font-medium leading-snug text-[#172033] sm:text-2xl'>
                        {product.name}
                      </h2>
                      <p className='shrink-0 pt-1 text-lg font-semibold text-rose-900'>{product.price}</p>
                    </div>
                    <p className='mt-3 text-sm leading-6 text-stone-600'>{product.description}</p>
                    <div className='mt-4 flex flex-wrap gap-2'>
                      {favouriteProducts.tags.map((tag) => (
                        <span
                          key={tag}
                          className='rounded-full bg-[#f5f1ea] px-3 py-1 text-xs font-medium text-stone-600'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      type='button'
                      onClick={() => dispatch(addToCart(product))}
                      className='mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#172033] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-rose-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-900'
                    >
                      <span aria-hidden='true' className='text-lg leading-none'>+</span>
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    )
}

export default FavouritePage