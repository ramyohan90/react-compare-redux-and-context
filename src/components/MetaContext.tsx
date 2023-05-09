import { useReducer } from "react";
import { ContextComponent } from "./ContextComponent";
import { ContextOrderReducer } from "../reducer/context-reducer";
import { InitOrder, OrderContext } from "../context/context";


export function MetaContext() {
    const [data, setOrder] = useReducer(ContextOrderReducer, InitOrder);

    return (
        <OrderContext.Provider value={{
            data, setOrder
        }}>
            <div>
                <ContextComponent />
            </div>
        </OrderContext.Provider>
    )
}