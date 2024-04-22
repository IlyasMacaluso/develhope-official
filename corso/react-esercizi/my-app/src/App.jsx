import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";

export function App () {
    return (
        <div>
            <h1>La mia App</h1>
            <Welcome name="jhon"age={19} />
            <AlertClock/>
            <Counter initialValue={0} incrementAmount={5}/>
        </div>
    )
}