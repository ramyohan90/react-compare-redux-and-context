import { useForm } from "react-hook-form";
import { ContextSuccessOrderComponent } from "./ContextSuccessOrderComponent";
import { ContextFailureOrderComponent } from "./ContextFailureOrderComponent";
import { useContext, useState } from "react";
import { OrderContext } from "../context/context";


export function ContextComponent() {

    const {data, setOrder} = useContext(OrderContext);

    const {register, getValues} = useForm();

    const [bool, setCount] = useState(false);

    function successOrder() {
        
        const getOrder = getValues('order');
        if (true) {
            setCount((pv) => !pv);
        }
        console.log('here');
        setOrder({
            type: 'success',
            payload: {
                failedOrders: data.failedOrders,
                successOrders: [...data.successOrders, getOrder]
            }
        })
    }

    function failedOrder() {
        const getOrder = getValues('order');
        setOrder({
            type: 'fail',
            payload: {
                failedOrders: [...data.failedOrders, getOrder],
                successOrders: data.successOrders
            }
        })
    }

    function resetOrder() {
        setOrder({
            type: 'reset',
            payload: {
                failedOrders: [],
                successOrders: []
            }
        })
    }
    
    return (
        <div>
            <h1>React Context Example</h1>
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
                    <div><button className="bg-green-600 text-white rounded p-2" type="button" onClick={successOrder}>Mark Order as Success</button></div>
                    <div><button className="bg-red-600 text-white rounded p-2 ml-3" type="button" onClick={failedOrder}>Mark Order as Failed</button></div>
                    <div><button className="bg-gray-600 text-white rounded p-2 ml-3" type="button" onClick={resetOrder}>Reset</button></div>
                    </div>
                </form>
            </div>
            <div>
                <ContextSuccessOrderComponent />
            </div>
            <div>
                <ContextFailureOrderComponent />
            </div>
        </div>
    )
}