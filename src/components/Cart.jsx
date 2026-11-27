import React from 'react'
import SwipeableDrawer from './SwipeableDrawer'
import { useSelector } from 'react-redux';

const Cart = () => {
  
  const products = useSelector((state) => state.carts.products);
  return (
        <SwipeableDrawer productList={products} />
  )
}

export default Cart