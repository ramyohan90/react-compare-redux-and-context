import { useContext, useRef } from "react";
import { OrderContext } from "../context/context";

export function ContextSuccessOrderComponent() {

    const ctx = useContext(OrderContext).data.successOrders;

    const ref = useRef(0);

    return (
        <div className="flex mt-5 rounded flex-col bg-gray-500 p-4">
            <div className="">
                <div className="bg-green-900 h-auto p-2 rounded">
                    Success Orders: {
                        ctx && ctx.length > 0 && ctx.map((order, index) => {
                            return (
                                <div key={index}>
                                    {order}
                                </div>
                            )
                        })}
                </div>
                <div className="mt-1 text-sm">
                    Number of renders happend in Success Order Component: {ref.current++}
                </div>
            </div>
        </div>
    )
}