import { ReduxComponent } from "./ReduxComponent";
import { MetaContext } from "./MetaContext";

export function RenderForm() {

    return (
        <div className="h-screen bg-blue-900 text-white">
            <div className="grid grid-cols-2 p-2 justify-items-center">
                <div>
                    <MetaContext />
                </div>
                <div>
                    <ReduxComponent />
                </div>
            </div>
        </div>
    )
}