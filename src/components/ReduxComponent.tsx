import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { failureReducer, resetReducer, successReducer } from "../reducer/reducer";
import { ReduxFailureOrderComponent } from "./ReduxFailedOrderComponent";
import { ReduxSuccessOrderComponent } from "./ReduxSuccessOrderComponent";


export function ReduxComponent() {

    const dispatch = useDispatch();

    const {register, getValues} = useForm();

    function reduxSuccessOrder() {
        const getOrder = getValues('order');
        const load: any = {
            successOrders: getOrder
        }
        dispatch(successReducer(load))
    }

    function reduxFailureOrder() {
        const getOrder = getValues('order');
        const load: any = {
            failedOrders: getOrder
        }
        dispatch(failureReducer(load))
    }

    function reduxresetOrder() {
        dispatch(resetReducer())
    }
    
    return (
        <div>
            <h1>Redux Example</h1>
            <div className="mt-10">
                <form>
                    <div>
                        <div>Enter the order:</div>
                        <div className="mt-1">
                            <input
                            className="rounded p-2 focus:outline-none text-black"
                            type="text" {...register('order')} placeholder="Enter Order..." autoComplete="off"/></div>
                    </div>
                    <div className="mt-5 flex">
                    <div><button className="bg-green-600 text-white rounded p-2" type="button" onClick={reduxSuccessOrder}>Mark Order as Success</button></div>
                    <div><button className="bg-red-600 text-white rounded p-2 ml-3" type="button" onClick={reduxFailureOrder}>Mark Order as Failed</button></div>
                    <div><button className="bg-gray-600 text-white rounded p-2 ml-3" type="button" onClick={reduxresetOrder}>Reset</button></div>
                    </div>
                </form>
            </div>
            <div>
                <ReduxSuccessOrderComponent />
            </div>
            <div>
                <ReduxFailureOrderComponent />
            </div>
        </div>
    )
}