import { useState } from "react"
import { Button } from "./Button"
import { CounterDisplay } from "./CounterDisplay"

export function Counter({initialValue = 0, incrementAmount = 1}) {
    const [counter, setCounter] = useState(initialValue)

    //it's better to use a callback function to update the coutner values, because they allow
    //for multiple updates to the counter value within the same cicle (render)
    function handleCounterIncrement() {
        setCounter((c) => c + incrementAmount)
    }
    function handleCounterDecrement() {
        setCounter((c) => c - incrementAmount)
    }
    function handleCounterReset() {
        setCounter((c) => (c = initialValue))
    }
    return (
        <div>
            <CounterDisplay currentCountValue={counter}/>
            <Button onClick={handleCounterIncrement} label={"Increment"} />
            <Button onClick={handleCounterDecrement} label={"Decrement"} />
            <Button onClick={handleCounterReset} label={"Reset"} />
        </div>
    )
}