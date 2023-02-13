import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../Slice/Cart/cartSlice';

export const Store = configureStore({
   reducer: {
      cart: cartReducer,
   },
});