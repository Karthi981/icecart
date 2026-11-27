import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const products =[
   {
    id: 1,
    name : "Blueberry Cheesecake",
    description : "A creamy cheesecake infused with the sweet and tangy flavor of fresh blueberries, topped with a luscious blueberry compote.",
    price : "$5.99",
    image : "/src/assets/icecream/image-01.png",
    tags : ["Blueberry", "Cheesecake", "Dessert"]
   }, 
    {
      id: 2,
    name : "Strawberry Swirl",
    description : "A delightful blend of creamy vanilla ice cream and sweet strawberry swirls, creating a perfect balance of flavors.",
    price : "$4.99",
    image : "/src/assets/icecream/image-02.png",
    tags : ["Strawberry", "Vanilla", "Swirl"]
    },
    {
      id: 3,
    name : "Chocolate Fudge Brownie",
    description : "Rich chocolate ice cream loaded with chunks of fudgy brownies, creating a decadent treat for chocolate lovers.",
    price : "$5.99",
    image : "/src/assets/icecream/image-03.png",
    tags : ["Chocolate", "Brownie", "Fudge"]
    },
    {
      id: 4,
      name : "Mint Chocolate Chip",
      description : "Refreshing mint ice cream with a generous amount of chocolate chips, offering a cool and indulgent experience.",
      price : "$4.99",
      image : "/src/assets/icecream/image-04.png",
      tags : ["Mint", "Chocolate", "Chip"]
    },
    {
      id : 5,
      name : "Salted Caramel Swirl",
      description : "Creamy caramel ice cream with a hint of sea salt, swirled with ribbons of rich caramel sauce for a perfect sweet and salty combination.",
      price : "$5.49",
      image : "/src/assets/icecream/image-05.png",
      tags : ["Caramel", "Salted", "Swirl"]
    },
    {
      id: 6,
      name : "Pistachio Delight",
      description : "Nutty pistachio ice cream with a smooth and creamy texture, offering a unique and delightful flavor experience.",
      price : "$5.99",
      image : "/src/assets/icecream/image-06.png",
      tags : ["Pistachio", "Nutty", "Delight"]
    }
]

const ProductListing = () => {

  const dispatch = useDispatch();

  return (
    <main className='min-h-screen bg-[#f7f4ef] px-5 py-14 text-[#172033] selection:bg-rose-900 selection:text-white sm:px-8 md:py-20'>
      <div className='mx-auto max-w-7xl'>
        <header className='mx-auto mb-12 max-w-2xl text-center md:mb-16'>
          <p className='mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-rose-900'>
            A little scoop of happiness
          </p>
          <h1 className='font-serif text-4xl font-medium tracking-tight text-[#172033] sm:text-5xl md:text-6xl'>
            Our Offerings
          </h1>
          <p className='mx-auto mt-5 max-w-xl text-base leading-7 text-stone-600 sm:text-lg'>
            Find your new favorite in our collection of small-batch, wonderfully creamy flavors.
          </p>
          <div className='mx-auto mt-7 h-px w-14 bg-rose-900/40' />
        </header>

        <section aria-label='Our ice cream flavors'>
          <div className='mb-5 flex items-center justify-between border-b border-stone-300/80 pb-3 text-sm text-stone-500'>
            <span>Made for your next happy moment</span>
            <span>{products.length} flavors</span>
          </div>
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7'>
            {products.map((product) => (
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
                    {product.tags.map((tag) => (
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

export default ProductListing;