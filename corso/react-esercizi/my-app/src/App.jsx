import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";

export function App () {
    return (
        <div>
            <h1>La mia App</h1>
            <Welcome name="jhon"age={19} />
            <AlertClock/>
        </div>
    )
}