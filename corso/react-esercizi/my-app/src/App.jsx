import { Welcome } from "./Welcome"
import { AlertClock } from "./AlertClock"
import { Counter } from "./Counter"
import { CounterUseEff } from "./CounterUseEff"
import { Clock } from "./Clock"
import { MouseClicker } from "./MouseClicker"
import { InteractiveWelcome } from "./InteractiveWelcome"
import { Login } from "./Login"

export function App() {
    function onLogin(data) {
        console.log(data)
    }
    return (
        <div>
            <h1>La mia App</h1>
            <hr />
            <Welcome name="jhon" age={19} />
            <hr />
            <AlertClock />
            <hr />
            <Counter initialValue={0} incrementAmount={5} />
            <hr />
            <CounterUseEff initialValue={10} incrementAmount={10} />
            <hr />
            <Clock />
            <hr />
            <MouseClicker label="Click me!" />
            <hr />
            <InteractiveWelcome />
            <hr />
            <Login onLogin={onLogin} />
        </div>
    )
}
