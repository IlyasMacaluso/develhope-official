import { useCounter } from "./useCounter"

export function Counter () {

const {counter, handleDecrement, handleIncrement} = useCounter(5, 5)

 return (
    <div>
        <h2>The current count is: {counter}</h2>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>

    </div>
 )
}