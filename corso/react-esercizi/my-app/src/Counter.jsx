import { useCounter } from "./useCounter"

export function Counter() {
    const { counter, handleDecrement, handleIncrement } = useCounter(5, 5)

    return (
        <div>
            <h2>The current count is: {counter}</h2>
            <button onClick={handleDecrement}>decrement</button>
            <button onClick={handleIncrement}>increment</button>
        </div>
    )
}
