import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';


const products =[
   {
    name : "Blueberry Cheesecake",
    description : "A creamy cheesecake infused with the sweet and tangy flavor of fresh blueberries, topped with a luscious blueberry compote.",
    price : "$5.99",
    image : "/src/assets/icecream/image-01.png",
    tags : ["Blueberry", "Cheesecake", "Dessert"]
   }, 
    {
    name : "Strawberry Swirl",
    description : "A delightful blend of creamy vanilla ice cream and sweet strawberry swirls, creating a perfect balance of flavors.",
    price : "$4.99",
    image : "/src/assets/icecream/image-02.png",
    tags : ["Strawberry", "Vanilla", "Swirl"]
    },
    {
    name : "Chocolate Fudge Brownie",
    description : "Rich chocolate ice cream loaded with chunks of fudgy brownies, creating a decadent treat for chocolate lovers.",
    price : "$5.99",
    image : "/src/assets/icecream/image-03.png",
    tags : ["Chocolate", "Brownie", "Fudge"]
    },
    {
      name : "Mint Chocolate Chip",
      description : "Refreshing mint ice cream with a generous amount of chocolate chips, offering a cool and indulgent experience.",
      price : "$4.99",
      image : "/src/assets/icecream/image-04.png",
      tags : ["Mint", "Chocolate", "Chip"]
    },
    {
      name : "Salted Caramel Swirl",
      description : "Creamy caramel ice cream with a hint of sea salt, swirled with ribbons of rich caramel sauce for a perfect sweet and salty combination.",
      price : "$5.49",
      image : "/src/assets/icecream/image-05.png",
      tags : ["Caramel", "Salted", "Swirl"]
    },
    {
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
    <div className='min-h-screen selection:bg-black selection:text-white mx-auto max-w-[1440px] px-6 py-12 md:px-14 md:py-16'>
      <h1 className='text-3xl text-center'>Our Offerings</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 p-8'>
        {products.map((product, index) => (
          <div key={index} className='border rounded-lg border-rose-100 p-4'>
            <img src={product.image} alt={product.name} className='w-full h-72 object-cover' />
            <h2 className='text-xl font-semibold mt-4'>{product.name}</h2>
            <p className='mt-2'>{product.description}</p>
            <p className='text-2xl font-bold mt-4'>{product.price}</p>
            <div className='flex flex-wrap gap-2 mt-4'>
              {product.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className='bg-rose-100 rounded-sm text-gray-800 text-sm font-medium px-2 py-1 rounded'>
                  {tag}
                </span>
              ))}
            </div>
            <button onClick={() => dispatch(addToCart(product))} className='mt-4 bg-gray-900 rounded-md text-white py-2 px-4 hover:bg-[#555555]'>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductListing;