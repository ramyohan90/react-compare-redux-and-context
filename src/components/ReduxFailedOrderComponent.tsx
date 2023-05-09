import { useRef } from "react";
import { useSelector } from "react-redux";

export function ReduxFailureOrderComponent() {

    const failedOrders = useSelector((state: any) => state['order']['failedOrders']);

    const ref = useRef(0);

    return (
        <div className="flex mt-5 rounded flex-col bg-red-900 p-4">
            <div className="">
                <div className="bg-red-500 h-auto p-2 rounded">
                    Failed Orders:
                    {
                        failedOrders && failedOrders.length > 0 && <div>
                            {failedOrders.map((order: string, index: number) => {
                                return <div key={index}>
                                    {order}
                                </div>
                            })}
                        </div>
                    }
                </div>
                <div className="mt-1 text-sm">
                    Number of renders happend in Failed Order Component: {ref.current++}
                </div>
            </div>
        </div>
    )
}