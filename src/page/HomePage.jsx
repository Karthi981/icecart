import React from 'react'
import PolaroidLineCarousel from '../components/HangingCarousel';
import { GiMilkCarton } from "react-icons/gi";
import { GiSugarCane } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import { useNavigate } from 'react-router-dom';


const categories = [
  {
    label: 'Classic Flavors',
    description: 'Timeless vanilla, chocolate and strawberry favorites.',
    src: '/src/assets/icecream/image-01.png',
    tags: ['Vanilla', 'Chocolate', 'Strawberry'],
  },
  {
    label: 'Premium Flavors',
    description: 'Rich creations with indulgent ingredients.',
    src: '/src/assets/icecream/image-02.png',
    tags: ['Butterscotch', 'Caramel', 'Pistachio'],
  },
  {
    label: 'Seasonal Flavors',
    description: 'Fresh limited-time flavors for every season.',
    src: '/src/assets/icecream/image-03.png',
    tags: ['Seasonal', 'Limited Edition'],
  },
  {
    label: 'Vegan & Dairy-Free',
    description: 'Creamy plant-based scoops for dairy-free diets.',
    src: '/src/assets/icecream/image-04.png',
    tags: ['Vegan', 'Dairy-Free'],
  }
]


const HomePage = () => {

  const navigate = useNavigate();


  return (
    <main className='overflow-x-hidden bg-[#efece6]'>
      <HeroSection />
      <section>
        <PolaroidLineCarousel />
      </section>
      <section className='flex flex-col items-center p-12 min-h-[400px]'>
        <h2 className='text-3xl text-left'>Ingredient Story</h2>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8 mt-8'>
          <div className='flex flex-col items-center gap-4'>
            <GiMilkCarton className='w-16 h-16 text-rose-900' />
            <h3 className='text-xl font-semibold'>Fresh Dairy</h3>
            <p className='text-center max-w-xs'>We source our milk from local farms to ensure the freshest and creamiest ice cream possible.</p>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <GiSugarCane className='w-16 h-16 text-rose-900' />
            <h3 className='text-xl font-semibold'>Natural Sweeteners</h3>
            <p className='text-center max-w-xs'>Our ice creams are sweetened with natural cane sugar, providing a rich flavor without artificial additives.</p>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <GiFruitBowl className='w-16 h-16 text-rose-900' />
            <h3 className='text-xl font-semibold'>Real Fruit</h3>
            <p className='text-center max-w-xs'>We use real fruits in our ice creams, ensuring authentic flavors and a delightful taste experience.</p>
          </div>
        </div>
      </section>

      <section id='categories' className='scroll-mt-16'>
        <CategoriesSection cards={categories} />
      </section>

      <section className='py-12 md:py-16 bg-white'>
        <div className='container mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center'>
          <h2 className='text-3xl text-center'>Order Now  </h2>
          <p className='text-center mt-4 text-lg'>Experience the joy of our ice creams delivered to your doorstep. Order online and indulge in your favorite flavors today!</p>
          <button onClick={() => navigate('/products')} className='cursor-pointer mx-auto mt-8 rounded-md bg-rose-900 px-6 py-3 text-white hover:bg-rose-800'>
            Order Now
          </button>
        </div>
      </section>
    </main>
  )
}

export default HomePage;
