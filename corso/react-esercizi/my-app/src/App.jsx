import { Welcome } from "./Welcome"
import { AlertClock } from "./AlertClock"
import { Counter } from "./Counter"
import { CounterUseEff } from "./CounterUseEff"
import { Clock } from "./Clock"
import { MouseClicker } from "./MouseClicker"

export function App() {
    return (
        <div>
            <h1>La mia App</h1>
            <Welcome name="jhon" age={19} />
            <AlertClock />
            <Counter initialValue={0} incrementAmount={5} />
            <CounterUseEff initialValue={10} incrementAmount={10}/>
            <Clock />
            <MouseClicker label="Click me!" />
        </div>
    )
}
