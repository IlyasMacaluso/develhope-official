import { useCallback, useState } from "react"

export function useCounter(initialValue = 0, incrementAmount = 1) {
    const [counter, setCounter] = useState(initialValue)

    const handleIncrement = useCallback(() => {
        setCounter((c) => c + incrementAmount), [counter]
    })
    const handleDecrement = useCallback(() => {
        setCounter((c) => c - incrementAmount), [counter]
    })
    const handleReset = useCallback(() => {
        setCounter(initialValue), [counter]
    })

    return {
        counter,
        handleDecrement,
        handleIncrement,
        handleReset,
    }
}
