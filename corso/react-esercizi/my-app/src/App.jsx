import { Welcome } from "./Welcome"
import { AlertClock } from "./AlertClock"
import { Counter } from "./Counter"
import { CounterUseEff } from "./CounterUseEff"
import { MouseClicker } from "./MouseClicker"
import { InteractiveWelcome } from "./InteractiveWelcome"
import { Login } from "./Login"
import { UncontrolledLogin } from "./UncontrolledLogin"
import FocusableInput from "./FocusableInput"
import MountedRef from "./MountedRef"
import CounterRef from "./CounterRef"
import Colors from "./Colors"
import ToDoList from "./ToDoList"
import Container from "./Conainer"
import ClockWrapper from "./ClockWrapper"
import GitHubUser from "./GitHubUser"
import GitHubUsers from "./GitHubUsers"
import CustomHookLogin from "./CustomHookLogin"
import GitHubUsersCustomHooks from "./GitHubUsersCustomHook"
import Ripasso from "./Ripasso"
import CurrentLocation from "./CurrentLocation"

const colors = [
    { id: 1, name: 'green' },
    { id: 2, name: 'red' },
    { id: 3, name: 'blue' },
    { id: 4, name: 'yellow' },
    { id: 5, name: 'purple' },
]
export function App() {
    function onLogin(data) {
        console.log(data)
    }
    return (
        <div className="app">
{/*             <h1>La mia App</h1>
            <hr />
            <Welcome name="jhon" age={19} />
            <AlertClock />
            <hr />
            <Counter initialValue={0} incrementAmount={5} />
            <hr />
            <CounterUseEff initialValue={10} incrementAmount={10} />
            <hr />
            <ClockWrapper />
            <hr />
            <MouseClicker label="Click me!" />
            <hr />
            <InteractiveWelcome />
            <hr />
            <Login onLogin={onLogin} />
            <hr />
            <UncontrolledLogin />
            <hr />
            <FocusableInput />
            <hr />
            <MountedRef />
            <hr />
            <CounterRef initialValue={0} incrementAmount={10} />
            <hr />
            <Colors colors={colors} />
            <hr />
            <ToDoList />
            <hr />
            <Container/> */}
            <hr />
            <GitHubUsers/>
            <hr />
            <CustomHookLogin />
            <hr />
            <GitHubUsersCustomHooks />
            <hr />
            <Ripasso />
            <hr />
            <CurrentLocation />
        </div>
    )
}
