import { useContext, useRef } from "react";
import { OrderContext } from "../context/context";

export function ContextFailureOrderComponent() {

    const ctx = useContext(OrderContext).data.failedOrders;

    const ref = useRef(0);

    return (
        <div className="flex mt-5 rounded flex-col bg-red-900 p-4">
            <div className="">
                <div className="bg-red-500 h-auto p-2 rounded">
                    Failed Orders: {
                        ctx && ctx.length > 0 && ctx.map((order, index) => {
                            return (
                                <div key={index}>
                                    {order}
                                </div>
                            )
                        })}
                </div>
                <div className="mt-1 text-sm">
                    Number of renders happend in Failed Order Component: {ref.current++}
                </div>
            </div>
        </div>
    )
}