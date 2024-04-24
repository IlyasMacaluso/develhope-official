import { useEffect, useState } from "react"
import { Button } from "./Button"
import { CounterDisplay } from "./CounterDisplay"

export function CounterUseEff({ initialValue = 0, incrementAmount = 1 }) {
    //useState -> counter = valore, setCounter = funzione attravarso cui aggiorniamo il valore di "counter"
    const [counter, setCounter] = useState(initialValue)

    //useEffect -> arrow function per il side effect (in questo caso vogliamo stampare il vlore corrente di counter),
    //un array di valori (non obbligatorio) all'interno del quale inseriamo le variabili che vogliamo tracciare.
    // quando una di queste cambia, il contenuto verrà ri renderizzato
    useEffect(() => {
        console.log(counter)
        //possiamo restituire una funzione (chiamata di cleanup) che viene eseguita al successivo
        //rendering:
        return () => {
            
            console.log(`The previous counter was: ${counter}`)
        }
    }, [counter])

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
            <h1>Counter with useEffect</h1>
            <CounterDisplay currentCountValue={counter} />
            <Button onClick={handleCounterIncrement} label={"Increment"} />
            <Button onClick={handleCounterDecrement} label={"Decrement"} />
            <Button onClick={handleCounterReset} label={"Reset"} />
        </div>
    )
}
