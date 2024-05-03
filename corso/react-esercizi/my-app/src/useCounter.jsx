import { useState } from "react"

export function useCounter({ initialValue = 0, incrementAmount = 1 }) {
    const [counter, setCounter] = useState(initialValue)

    //it's better to use a callback function to update the coutner values, because they allow
    //for multiple updates to the "state" value within the same cicle (render)
    function handleIncrement() {
        setCounter((c) => c + incrementAmount)
    }
    function handleDecrement() {
        setCounter((c) => c - incrementAmount)
    }
    function handleReset() {
        setCounter(initialValue)
    }
    return {
        handleIncrement,
        handleDecrement,
        handleReset,
        counter,
    }
}
