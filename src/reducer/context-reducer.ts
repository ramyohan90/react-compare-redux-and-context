import { ActionType, OrderType } from "../context/context";
export function ContextOrderReducer(state: OrderType, action: ActionType) {
    switch (action.type) {
        case 'success':
            return {
                ...state,
                successOrders: [...action.payload.successOrders]
            };
        case 'fail':
            return {
                ...state,
                failedOrders: [...action.payload.failedOrders]
            };
        case 'reset':
            return {
                successOrders: [],
                failedOrders: []
            };
        default:
            return state;
    }
}


// import { ActionType, OrderType } from "../context/context";
// export function ContextOrderReducer(state: OrderType, action: ActionType) {
//     console.log(state);
//     switch (action.type) {
//         case 'success':
//             console.log('success');
//             state.successOrders = [...action.payload.successOrders];
//             return {...state};
//         case 'fail':
//             state.failedOrders = [...action.payload.failedOrders]
//             return {...state};
//         default:
//             return state;
//     }
// }