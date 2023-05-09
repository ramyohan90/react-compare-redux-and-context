import { configureStore } from "@reduxjs/toolkit";
import OrderReducer from '../reducer/reducer';

export const store = configureStore({
    reducer: {
        order: OrderReducer
    }
});