import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App () {
    return (
        <div>
            <h1>My awasome App</h1>
            <hr />
            <Welcome name="Ilyas" age={26}/>
        </div>
    )
}