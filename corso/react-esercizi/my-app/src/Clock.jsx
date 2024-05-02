import { useState, useEffect, useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export function Clock() {
    const [currentTime, setTime] = useState(new Date().toLocaleTimeString())
    const language = useContext(LanguageContext)

    useEffect(() => {
        const updateInterval = setInterval(() => {
            console.log("updating time...")
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearInterval(updateInterval)
    }, [])
    //avendo lasciato l'array delle dipendenze vuoto, questa funzione verrà eseguita solo una
    //volta quando il componente videne montato, ed essendo un timeInterval, rimarrà attiva a tempo indeterminato
    //utilizzo clearInterval per impedire alla funzione di essere eseguita due volte
    // Nota: clearInterval deve essere passato come arrow function se vogliamo che venga eseguito
    //solo nel ciclo successivo e non immediatamente (il che fermerebbe il setInterval subito dopo l'attivazione)

    return (
        <div className="clock">
            <h1>Clock</h1>
            <h2>
                {{ "en": "The current time is:", "it": "L'ora corrente è:",}[language]} {currentTime}
            </h2>
        </div>
    )
}
