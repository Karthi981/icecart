import { createSlice } from "@reduxjs/toolkit";


const favouriteSlice = createSlice({
    name:'favourites',
    initialState:{
        favouriteProducts : []
    },
    reducers:{
        addToFavourites : (state,action) =>{
            return {
                ...state,
                favouriteProducts : action.payload
            }
        },
        removeFromFavourites : (state,action) => {
            const existingFavouriteProduct = state.favouriteProducts.find(product => product.id === action.payload.id);
            if(existingFavouriteProduct){
                state.favouriteProducts.filter((product) => product.id !== action.payload.id);
            }else{
                return;
            }
        }
    }
});

export const {removeFromFavourites,addToFavourites} = favouriteSlice.actions;

export default favouriteSlice.reducer;