import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../fetures/cartSlice";

const myStore=configureStore({
    reducer:{
        cartSlice:cartSlice
    }
});
export default myStore;
export type RootState = ReturnType<typeof myStore.getState>