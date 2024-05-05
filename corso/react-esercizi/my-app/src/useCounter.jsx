import { useState } from "react"
import { useCallback } from "react"

export function useCounter(initialValue = 0, incrementAmount = 1) {
    const [counter, setCounter] = useState(initialValue)
    const { handleIncrement, handleDecrement, handleReset } = useCallback()

    //it's better to use a callback function to update the coutner values, because they allow
    //for multiple updates to the "state" value within the same cicle (render)
    handleIncrement
    handleDecrement
    handleReset

    return {
        counter,
        handleDecrement,
        handleIncrement,
        handleReset,
    }
}
