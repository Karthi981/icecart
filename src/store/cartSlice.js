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
            console.log("Adding product to cart:", action.payload,state.products);
            return { 
                ...state,
                products : [...state.products,action.payload],
                isCartOpen : true
            }
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
        addMultipleToCart : (state,action) => {
            return {
                ...state,
                products : [...state.products,...action.payload]
            }
        }
    }
});

export const {addToCart,deleteFromCart,updateCart,addMultipleToCart,openCart,closeCart} = cartSlice.actions;

export default cartSlice.reducer;