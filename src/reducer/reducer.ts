import { createSlice } from "@reduxjs/toolkit";
import { InitOrder } from "../context/context";

const OrderSlice = createSlice({
    name: 'order',
    initialState: InitOrder,
    reducers: {
        successReducer: (state, action) => {
            state.successOrders.push(action.payload.successOrders);
            return state;
        },
        failureReducer: (state, action) => {
            state.failedOrders.push(action.payload.failedOrders);
            return state;
        },
        resetReducer: (state) => {
            state.successOrders = [];
            state.failedOrders = [];
            return state;
        }
    }
});

export const { successReducer, failureReducer, resetReducer } = OrderSlice.actions;

export default OrderSlice.reducer;