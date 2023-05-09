import { useRef } from "react";
import { useSelector } from "react-redux"

export function ReduxSuccessOrderComponent() {


    const successOrders = useSelector((state: any) => state['order']['successOrders']);

    const ref = useRef(0);

    return (
        <div className="flex mt-5 rounded flex-col bg-gray-500 p-4">
            <div className="">
                <div className="bg-green-900 h-auto p-2 rounded">
                    Success Orders: {
                        successOrders && successOrders.length > 0 && <div>
                            {successOrders.map((order: string, index: number) => {
                                return <div key={index}>
                                    {order}
                                </div>
                            })}
                        </div>
                    }
                </div>
                <div className="mt-1 text-sm">
                    Number of renders happend in Success Order Component: {ref.current++}
                </div>
            </div>
        </div>
    )
}