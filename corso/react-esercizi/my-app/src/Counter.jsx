import { useState } from "react"

function Counter({ initialValue = 0, incrementAmount = 1 }) {
    const [counter, setCounter] = useState(initialValue)

    //it's better to use a callback function to update the coutner values, because they allow
    //for multiple updates to the "state" value within the same cicle (render)
    function handleCounterIncrement() {
        setCounter((c) => c + incrementAmount)
    }
    function handleCounterDecrement() {
        setCounter((c) => c - incrementAmount)
    }
    function handleCounterReset() {
        setCounter(initialValue)
    }
    return (
        <div>
            <h1>Counter</h1>
            <h3>The current count is {counter}</h3>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}> Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}

export default Counter
