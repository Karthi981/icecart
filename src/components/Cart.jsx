import React from 'react'
import SwipeableDrawer from './SwipeableDrawer'
import { useSelector } from 'react-redux';

const Cart = () => {
    const products = useSelector((state) => state.carts.products);
    console.log("Products in cart:", products); // Log the products to verify they are being retrieved correctly

  return (
        <SwipeableDrawer productList={products} />
  )
}

export default Cart