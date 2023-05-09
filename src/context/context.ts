import React, { Dispatch } from "react";

export interface ContextType {
    data: OrderType;
    setOrder: Dispatch<ActionType>;
}

export interface OrderType {
    failedOrders: string[];
    successOrders: string[];
}

export const InitOrder: OrderType = {
    failedOrders: [],
    successOrders: []
}

export interface ActionType {
    type: string,
    payload: OrderType;
}

export const InitOrderContext: ContextType  = {
    data: InitOrder,
    setOrder: () => {},
}

export const OrderContext = React.createContext<ContextType>(InitOrderContext);

export interface ActionType {
    type: string,
    payload: OrderType;
}

