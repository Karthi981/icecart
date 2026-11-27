import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        products: [],
        isCartOpen: false
    },
    reducers:{
        openCart : (state) => {
            return {
                ...state,
                isCartOpen : true
            }
        },
        closeCart : (state) => {
            return {   
                ...state,
                isCartOpen : false
            }
        },
        addToCart : (state,action) => {
            console.log("Adding product to cart:", action.payload);
            const existingProduct = state.products.find(product => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            }
            else {
                state.products.push({ ...action.payload, quantity: action.payload.quantity || 1 });
            }
            state.isCartOpen = true; 
        },
        reduceQuantityFromCart : (state,action) =>{
            const existingProduct = state.products.find(product => product.id === action.payload.id);
            if(existingProduct && existingProduct.quantity > 1){
                existingProduct.quantity = existingProduct.quantity - 1;
            }
            return;
        },
        deleteFromCart : (state,action) => {
            return {
                ...state,
                products : state.products.filter(product => product.id !== action.payload)
            }
        },
        updateCart : (state,action) => {
            return {
                ...state,
                products : state.products.map(product => product.id === action.payload.id ? action.payload : product)
            }  
        },
    }
});

export const {addToCart,deleteFromCart,updateCart,openCart,closeCart,reduceQuantityFromCart} = cartSlice.actions;

export default cartSlice.reducer;