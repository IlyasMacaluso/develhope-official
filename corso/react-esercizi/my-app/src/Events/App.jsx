//file di esempio per vedere come sono state passate le props al comenento richeisto dall'esercizio

import { AlertClock } from "./AlertClock"

export function App() {

    function handleShowTime() {
        alert(`Ora attuale: ${new Date().toLocaleTimeString()}`)
    }
    
    return (
        <div className="app">
            <h1>La mia App</h1>
            <AlertClock showTime={handleShowTime}/>
        </div>
    )
}
