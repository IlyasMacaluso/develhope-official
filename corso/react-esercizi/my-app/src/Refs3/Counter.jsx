import { useRef, useState } from "react"
import { Button } from "./Button"
import { CounterDisplay } from "./CounterDisplay"

function Counter({ initialValue = 0, incrementAmount = 1 }) {
    const [counter, setCounter] = useState(initialValue)

    const prevDirectionRef = useRef(null)
    const currentDirectionRef = useRef(null)

    function handleCounterIncrement() {
        setCounter((c) => {
            if (c + incrementAmount > 0) {
                currentDirectionRef.current = "up"
                if (currentDirectionRef.current != prevDirectionRef.current) {
                    console.log(currentDirectionRef.current)
                    prevDirectionRef.current = currentDirectionRef.current
                }
            }
            return c + incrementAmount
        })
    }
    function handleCounterDecrement() {
        setCounter((c) => {
            if (c - incrementAmount < 0) {
                currentDirectionRef.current = "down"
                if (currentDirectionRef.current != prevDirectionRef.current) {
                    console.log(currentDirectionRef.current)
                    prevDirectionRef.current = currentDirectionRef.current
                }
            }
            return c - incrementAmount
        })
    }
    function handleCounterReset() {
        setCounter(initialValue)
    }
    return (
        <div>
            <h1>Counter with useRef</h1>
            <CounterDisplay currentCountValue={counter} />
            <Button onClick={handleCounterIncrement} label={"Increment"} />
            <Button onClick={handleCounterDecrement} label={"Decrement"} />
            <Button onClick={handleCounterReset} label={"Reset"} />
        </div>
    )
}

export default Counter
